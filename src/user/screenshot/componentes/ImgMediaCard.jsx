import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { format } from 'date-fns';
import { errorMessage, successMessage } from 'helpers/ToasterMessages';
import { MdContentCopy, MdDelete } from "react-icons/md";

export default function ImgMediaCard({ screenshot }) {
    const formattedDate = format(new Date(screenshot.createdAt), 'pp'); // Format as desired
    const handleCopy = async (image) => {
        navigator.clipboard.writeText(image).then(async () => {
            await successMessage("Image URL copied to clipboard!");
        }).catch(async (err) => {
            await errorMessage('Failed to copy: ', err);
        });
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={screenshot.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {formattedDate}
                </Typography>
                <Typography>
                    {screenshot.memo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleCopy(screenshot.image)}>
                    <MdContentCopy style={{ fontSize: 20, color: 'blue' }} />
                </Button>
                <Button size="small">
                    <MdDelete style={{ fontSize: 20, color: 'red' }} />
                </Button>
            </CardActions>
        </Card>
    );
}

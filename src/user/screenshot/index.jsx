import { Typography, Box, Grid, Paper } from '@mui/material'
import MainCard from 'components/MainCard'
import React from 'react'
import { styled } from '@mui/material/styles';
const Screenshot = () => {
    const screenshots = [
        {
            _id: 1,
            date: new Date
        },
        {
            _id: 2,
            date: new Date
        }
    ]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const image = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
    return (
        <MainCard title="Screenshots">
            {
                screenshots.map((screenshot, key) => (
                    <MainCard title="07-07-2024" className="mt-3" key={key}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={3} sm={3}>
                                <Item><img src={image} height={100} width={100} /> </Item>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Item><Paper variant="outlined">
                                    {/* <img src={image} /> */}
                                </Paper></Item>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Item> <Box component="img" src={image} alt={'caption'} sx={{ height: "50px", width: "auto" }} />
                                </Item>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Item>xs=8</Item>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Item>xs=8</Item>
                            </Grid>
                        </Grid>
                    </MainCard>
                ))
            }
        </MainCard>
    )
}

export default Screenshot
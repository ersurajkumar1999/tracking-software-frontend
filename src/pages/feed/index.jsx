// material-ui
import { Typography, Grid, Paper, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import * as React from 'react';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Feed = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={12} md={4}
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}>
                <Item>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
                        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
                        officiate descent molls anim id est labours.
                    </Typography>
                </Item>
            </Grid>
            <Grid item xs={12} md={8}>
                <Item>
                    565
                </Item>
            </Grid>
        </Grid>

    )
}

export default Feed
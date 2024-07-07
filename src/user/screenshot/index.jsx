import { Typography, Grid  } from '@mui/material'
import MainCard from 'components/MainCard'
import React from 'react'

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
    return (
        <MainCard title="Screenshots">
            {
                screenshots.map((screenshot) => (
                    <MainCard title="07-07-2024" className="mt-3">
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
                            minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
                            officiate descent molls anim id est labours.
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                1
                            </Grid>
                            <Grid item xs={6}>
                                2
                            </Grid>
                            <Grid item xs={6}>
                                3
                            </Grid>
                            <Grid item xs={6}>
                                <Item>4</Item>
                            </Grid>
                        </Grid>
                    </MainCard>
                ))
            }
        </MainCard>
    )
}

export default Screenshot
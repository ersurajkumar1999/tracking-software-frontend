import { Grid } from '@mui/material'
import MainCard from 'components/MainCard'
import React, { useEffect, useState } from 'react'
import { getScreenshotList } from 'services/ApiService';
import ImgMediaCard from './componentes/ImgMediaCard';
import { format } from 'date-fns';
const Screenshot = () => {
    const [state, setState] = useState({
        activities: [],
        page: 1,
        pageSize: 3
    });

    // Fetch initial data
    useEffect(() => {
        handlescreenshotList();
    }, []);

    // Fetch data when the page changes
    useEffect(() => {
        if (state.page > 1) {
            handlescreenshotList();
        }
    }, [state.page]);

    const { activities, page, pageSize } = state;

    const handlescreenshotList = async () => {
        try {
            const response = await getScreenshotList({ page, pageSize });
            console.log("response", response.data);
            if (!response.status) {
                await errorMessage(response.massage ?? null);
                return;
            }
            setState(prevState => ({
                ...prevState,
                activities: [...prevState.activities, ...response.data?.data ?? []],
            }));
        } catch (error) {
            console.log("error", error);
        }
    }
    const handleTitle = (activity) => {
        const formattedDate = format(new Date(activity.createdAt), 'PPpp'); // Format as desired
        let endMemo = activity.endMemo ? `||  ${activity.endMemo}` : '';
        return `${formattedDate} || ${activity.startMemo} ${endMemo}`;
    }
    return (
        <MainCard title="Screenshots">
            {
                activities.length > 0 && activities.map((activity, key) => (
                    <MainCard title={handleTitle(activity)} className="mt-3" key={key} sx={{ mt: 2 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                activity.screenshots.length > 0 && activity.screenshots.map((screenshot) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={screenshot._id}>
                                        <ImgMediaCard screenshot={screenshot} />
                                    </Grid>
                                ))
                            }
                            {
                                activity.screenshots.length == 0 &&
                                <Grid item xs={12} sm={12} >
                                    Image not available
                                </Grid>
                            }

                        </Grid>
                    </MainCard>
                ))
            }
        </MainCard>
    )
}

export default Screenshot
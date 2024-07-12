import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CurrentDateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);
    return (
        <Box sx={{ flexShrink: 0, ml: 10 }}>
            <div>{currentTime}</div>
        </Box>
    )
}

export default CurrentDateTime
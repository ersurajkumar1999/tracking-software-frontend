import { useEffect, useRef, useState } from 'react';
import {
    Button, IconButton, DialogActions, Grid, Stack, InputLabel, OutlinedInput,
    DialogContent, DialogTitle, Dialog, Box, Badge, TextField
} from '@mui/material';
import { MdClose } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { createActivityLog, lastLogActivity } from 'services/ApiService';
import { errorMessage } from 'helpers/ToasterMessages';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentLog, setCurrentLog } from 'features/timeLogSlice';
export default function ClockInClockOut() {
    const dispatch = useDispatch();
    const lastLog = useSelector((state) => state.timeLog.lastLog);
    console.log("lastLog",lastLog);
    //  Show current Date time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleClickOpen = async () => {
        await getLastLog();
        setOpen(true)
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const [state, setState] = useState({
        activityLogId: lastLog?._id || null,
        startTime: new Date().toLocaleTimeString(),
        startMemo: lastLog?.startMemo,
        endMemo: null,
    })
    
    const iconBackColorOpen = 'grey.100';

    const handleSubmit = async () => {
        console.log("handle submit");
        console.log("state", state);

        try {
            const response = await createActivityLog(state);
            if (!response.status) {
                await errorMessage(response.massage ?? null);
                return;
            }
            state?.activityLogId? dispatch(setCurrentLog(response.data.data)):dispatch(clearCurrentLog());
            console.log("response getLastLog", response.status);
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getLastLog = async () => {
        try {
            const response = await lastLogActivity();
            if (!response.status) {
                await errorMessage(response.massage ?? null);
                return;
            }
            response.data ? dispatch(setCurrentLog(response.data.data)) : dispatch(clearCurrentLog());
            console.log("response getLastLog", response.status);
        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
                color="secondary"
                variant="light"
                sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleClickOpen}
            >
                <Badge color="primary">
                    <FaRegClock />
                </Badge>
            </IconButton>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <MdClose />
                </IconButton>
                <DialogContent dividers>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email-login">Login Time:</InputLabel>
                                <OutlinedInput
                                    id="Login-Time"
                                    type="text"
                                    value={currentTime}
                                    name="LoginTime"
                                    placeholder="Login Time"
                                    fullWidth
                                    disabled
                                />

                            </Stack>

                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email-login">Memo:</InputLabel>
                                <TextField
                                    id="filled-multiline-static"
                                    placeholder='Memo'
                                    multiline
                                    rows={4}
                                    name="startMemo"
                                    value={state.startMemo}
                                    onChange={handleChange}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outlined" color="success" autoFocus onClick={handleSubmit}>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog >
        </Box>
    );
}

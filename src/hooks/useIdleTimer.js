// src/hooks/useIdleTimer.js
import { useEffect, useRef } from 'react';

const useIdleTimer = (onIdle, idleTime = 600000) => { // 600000ms = 10 minutes
    const timerRef = useRef(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(onIdle, idleTime);
    };

    const handleActivity = () => {
        resetTimer();
    };

    useEffect(() => {
        const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event => window.addEventListener(event, handleActivity));
        resetTimer();

        return () => {
            clearTimeout(timerRef.current);
            events.forEach(event => window.removeEventListener(event, handleActivity));
        };
    }, []);

    return null;
};

export default useIdleTimer;

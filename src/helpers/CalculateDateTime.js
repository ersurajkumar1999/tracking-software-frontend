export const CalculateDateTime = (dateTime) => {
    const seconds = Math.floor((new Date() - new Date(dateTime)) / 1000);
    if (seconds < 30) {
        return 'Just now';
    }
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    let counter;
    for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
            return counter === 1 ? `${counter} ${i} ago` : `${counter} ${i}s ago`;
        }
    }

    return dateTime;
}
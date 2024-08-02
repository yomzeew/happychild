export function convertTo12HourFormat(timeslots) {
    if (timeslots.length === 0) return '';
    
    const start = timeslots[0].split('-')[0];
    const end = timeslots[timeslots.length - 1].split('-')[1];
    
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    
    function convertHour(hour, minute) {
        let period = 'AM';
        if (hour === 0) {
            hour = 12;
        } else if (hour === 12) {
            period = 'PM';
        } else if (hour > 12) {
            hour -= 12;
            period = 'PM';
        }
        const hourStr = String(hour).padStart(2, '0');
        const minuteStr = String(minute).padStart(2, '0');
        return `${hourStr}:${minuteStr}${period.toLowerCase()}`;
    }
    
    const startFormatted = convertHour(startHour, startMinute);
    const endFormatted = convertHour(endHour, endMinute);
    
    return `${startFormatted} - ${endFormatted}`;
}
export function convertDateFormat(isoDate) {
    const date = new Date(isoDate);

    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear();

    const getOrdinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th'; // Exceptions for 11th to 13th
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const dayWithSuffix = day + getOrdinalSuffix(day);

    return `${dayWithSuffix}, ${month}, ${year}`;
}
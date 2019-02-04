module.exports = {
    dateFormatter(dateStr) {
        let months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
        ];
        let fullDate = new Date(dateStr);
        let month = months[fullDate.getMonth()];
        let date = fullDate.getDate();
        let year = fullDate.getFullYear();
        return `${month} ${date}, ${year}`;
    }
};
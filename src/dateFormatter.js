/**
 * 
 * @param {Date} obj 
 */
let dateFormatter = function (obj) {
    if (!(obj instanceof Date)) {
        obj = new Date(obj);
    }
    let monthMapper = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];

    let year = obj.getFullYear();
    let month = obj.getMonth();
    let date = obj.getDate();

    return `${monthMapper[month]} ${date}, ${year}`;
}

export default dateFormatter;
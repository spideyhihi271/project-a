export const getTimes = (input, option) => {
    let date = new Date();
    let result;
    switch (option) {
        case 1:
            result = date.getFullYear();
            break;
        case 2:
            result = date.getMonth();
            break;
        case 3:
            result = date.getDay();
            break;
        default:
            result = date;
            break;
    }
    return result;
};

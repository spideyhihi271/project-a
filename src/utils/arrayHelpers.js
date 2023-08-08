export const johnKeyValue = (data, key = 'name') => {
    let result = '';
    data.map((item) => {
        result += item[key] + ', ';
    });
    // Xóa dấu ',' ở cuối chuỗi
    result = result.slice(0, -2);
    return result;
};

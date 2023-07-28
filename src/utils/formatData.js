export const formatCurrencyVi = (input) => {
    let result = input.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    });
    return result;
};

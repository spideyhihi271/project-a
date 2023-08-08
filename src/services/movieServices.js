import * as httpRequest from '~/utils/httpRequest';

export const get = async (id = '', q) => {
    try {
        const res = await httpRequest.get('/movies' + id, {
            params: {
                q,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

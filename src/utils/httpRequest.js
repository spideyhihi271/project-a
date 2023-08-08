import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://beecine-bf8523ffcd79.herokuapp.com/api',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;

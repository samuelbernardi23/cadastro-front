import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-igj.herokuapp.com/'
});

export default api;
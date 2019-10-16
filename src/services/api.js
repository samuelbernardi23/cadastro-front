import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-igj-front.herokuapp.com/'
});

export default api;
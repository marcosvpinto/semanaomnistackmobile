import axios from 'axios';

const api = axios.create({
    //baseUrl: 'http://10.0.2.2:3333',
    baseUrl: 'http://192.168.43.10:3333',
    //baseUrl: 'http://localhost:3333',
});

export default api;
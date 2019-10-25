// src/axios-orders.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burgur-buildar-34dw0xxxx.firebaseio.com/'
});

export default instance;

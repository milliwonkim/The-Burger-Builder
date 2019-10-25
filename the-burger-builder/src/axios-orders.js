// src/axios-orders.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-60fc4.firebaseio.com/'
});

export default instance;
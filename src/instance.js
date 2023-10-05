import axios from 'axios';

// Create an Axios instance with default headers
const instance = axios.create({
    baseURL: 'https://comment-task-api.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Retrieve the token from local storage
const accessToken = localStorage.getItem('accessToken'); // Replace 'accessToken' with the actual key you use

if (accessToken) {
    // Set the Authorization header with the token if it exists in local storage
    instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

export default instance;

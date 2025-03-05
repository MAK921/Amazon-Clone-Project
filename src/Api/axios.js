import axios from 'axios';

const axiosInstance = axios.create({
// baseURL: "http://127.0.0.1:5001/clone-6dc63/us-central1/api",
baseURL: "https://amazon-backend-1-l8ou.onrender.com"
});

export {axiosInstance}
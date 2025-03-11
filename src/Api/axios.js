import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-6dc63/us-central1/api",
  //   baseURL: "https://amazon-backend-gfvo.onrender.com",
});

export { axiosInstance };

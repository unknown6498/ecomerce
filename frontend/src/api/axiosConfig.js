import axios from "axios";

const apiClient = axios.create({baseURL: process.env.REACT_API_URL || "http://localhost:5000/api", header: {
    "content-type": "application/json"
    },
});

apiClient.interceptors.request.use ((config)=>{
    const token = localStorage.getItem("token");
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default apiClient;
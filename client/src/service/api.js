import axios from 'axios';

const API_URL='https://localhost:8000';

const axiosInstance=axios.create({
    baseURL: API_URL,
    timeout:10000,
    headers:{
        "content-type":"application/json"
    }
})
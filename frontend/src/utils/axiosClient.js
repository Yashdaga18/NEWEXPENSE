import axios from "axios";


export const axiosClient = axios.create({
    // baseURL : 'https://expensify-tracker.onrender.com'
    baseURL : 'http://localhost:5050'
})

import axios from 'axios'
import { config } from './axiosConfig';
export const axiosClient = axios.create(config)
axiosClient.interceptors.request.use(async config => config);
axiosClient.interceptors.response.use( res=>{
    if(res && res.data) {
        return res.data;
    }
    return res;
})


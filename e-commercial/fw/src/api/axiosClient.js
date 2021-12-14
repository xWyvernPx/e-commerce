import axios from 'axios'
import { config } from './axiosConfig';
const axiosClient = axios.create(config)
axiosClient.interceptors.request.use(async config => config);
axiosClient.interceptors.response.use( res=>{
    if(res && res.data) {
        return res.data;
    }
    return res;
})
export default axiosClient;

import  {axiosClient}  from "./axiosClient";
import {convertBearer} from "../utils/bearerToken"

class LoginAPI {
    async login(token , payload) {
        const url = "/account/signin";
        let userInfo = {};
        if(token)
        
            userInfo = await axiosClient.post(url,payload,{header : {"Authorization" : convertBearer(token) }});
        else
            userInfo = await axiosClient.post(url,payload,{header : {"Authorization" : null }});
        
        return userInfo;
    }
    async register(payload) {
        const url = "/account/signup";
        return await axiosClient.post(url,{data : payload});
    }
}
export default new LoginAPI();

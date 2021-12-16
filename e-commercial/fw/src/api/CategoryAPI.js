import {axiosClient} from "./axiosClient";

class CategoryAPI {
     async getAll(){
        return await axiosClient.get("/category");
    }
}
export default new CategoryAPI();
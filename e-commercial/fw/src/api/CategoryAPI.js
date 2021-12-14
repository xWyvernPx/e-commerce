import axiosClient from "./axiosClient";

class CategoryAPI {
     getAll(){
        return axiosClient.get("/category");
    }
}
export default new CategoryAPI();
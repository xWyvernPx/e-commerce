import {axiosClient} from "./axiosClient";

class CategoryAPI {
     async getAll(){
        return await axiosClient.get("/category");
    }
    async getBySlug(slug) {
        const url = `/category/${slug}/slug`;
        return await axiosClient.get(url);
    }
}
export default new CategoryAPI();
import { axiosClient } from "./axiosClient";
class ProductAPI {
    
     getProduct(pagination,sort1,sort2,filter) {
        const url = `/product`;
        return axiosClient.get(url, {
            params : {...pagination,...sort1,...sort2,...filter}
        })

     }
}
export default new ProductAPI();
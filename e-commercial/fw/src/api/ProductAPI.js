import { axiosClient } from "./axiosClient";
class ProductAPI {
    
    async getProduct(pagination,sort1,sort2,filter) {
        const url = `/product`;
        return await axiosClient.get(url, {
            params : {...pagination,...sort1,...sort2,...filter}
        })
         }
     getProductCate (pagination,sort1,sort2,filter,slug) {
        const url = `/product/${slug.cate}/${slug.subcate}`;
        return axiosClient.get(url, {
            params : {...pagination,...sort1,...sort2,...filter}
        })
     }
     getProductById (id) {
         const url = `/product/${id}`;
         return axiosClient.get(url);
     }
}
export default new ProductAPI();
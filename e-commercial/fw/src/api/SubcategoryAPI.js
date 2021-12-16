import {axiosClient} from "./axiosClient";
class SubcategoryAPI {
    getByParentSlug (slug) {
        const url=`/subcategory/${slug}`
        return axiosClient.get(url);
    }
}
export default new SubcategoryAPI();
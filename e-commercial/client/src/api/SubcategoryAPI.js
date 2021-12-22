import {axiosClient} from "./axiosClient";
class SubcategoryAPI {
    async getByParentSlug (slug) {
        const url=`/subcategory/${slug}`
        return await axiosClient.get(url);
    }
    async getBySlug (slug) {
        const url = `/subcategory/${slug}/slug`;
        return await axiosClient.get(url);
    }
}
export default new SubcategoryAPI();
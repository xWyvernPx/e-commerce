import { axiosClient } from "./axiosClient";
class ProvinceAPI {
    getCity() {
        const url = "https://provinces.open-api.vn/api/";
        return axiosClient.get(url);
    }
    getDistrict(cityId) {
        const url = `https://provinces.open-api.vn/api/p/${cityId}`
        return axiosClient.get(url,{params : {depth : 2}});
    }
    getCommune(districtId) {
        const url = `https://provinces.open-api.vn/api/d/${districtId}`
        return axiosClient.get(url,{params : {depth : 2}});
    }
}
export default new ProvinceAPI();
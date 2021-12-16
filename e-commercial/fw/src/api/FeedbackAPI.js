import { axiosClient } from "./axiosClient";
class FeedbackAPI {
    constructor() {
        this.url = "/feedback"
    }
     getAll(){
        return  axiosClient.get("/feedback");
    }
}
export default new FeedbackAPI();
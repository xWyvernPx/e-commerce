import feedbackService from "../services/feedback.service.js";

class FeedbackController {

   async GetAll(req,res) {
        const data = await feedbackService.findAll()
        console.log(data)
        res.json((data))
    }
  

}
export default new FeedbackController();
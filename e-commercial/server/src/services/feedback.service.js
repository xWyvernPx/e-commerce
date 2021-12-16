import Feedback from "../models/feedback.model.js";
import Account from "../models/account.model.js"
class FeedbackService {
    async findAll() {
        Account.hasMany(Feedback);
        Feedback.belongsTo(Account,{foreignKeyConstraint : "FK_FeedbackAccount"})
        
        return await Feedback.findAll({include : Account ,limit : 20})
        .then(data=> {
            return data.map(ele=> ({
                id : ele.id ,
                content : ele.content,
                username : ele.Account.dataValues.username,
            }))
        })
        
    }
    
}
export default new FeedbackService;
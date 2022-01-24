
import Account from "../models/account.model.js";
class AccountService {
    async login({username, password}) {
        return await Account.findOne ( {
            where : {username: username , password: password}
        });
    }
    async register (account) {
        return await Account.create({...account},{logging : true});
    }
    async findByEmail(email,phone) {
        if(phone || email)
        return await Account.findOne({where : {email}}) || await Account.findOne({where : {phone}});
    }
   
}
export default new AccountService;
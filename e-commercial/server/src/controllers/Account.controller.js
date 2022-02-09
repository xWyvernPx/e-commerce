import Account from "../models/account.model.js";
import {Sequelize,Model,DataTypes} from "sequelize";
import jwt from "jsonwebtoken";
import { config } from "../../database/dbconfig.js";
import accountService from "../services/account.service.js";
const sequelize = new Sequelize(config);
const encodeToken = (userId)=>{
    return jwt.sign({
        iss : "Phong",
        sub : userId,
        iat : new Date().getTime(),
        exp : new Date().setDate(new Date().getDate() + 3)
    },"FRESHNECOM")
}
class AccountController {
    async login (req, res,next) {
        const token = req.header("Authorization");
        console.log(token);
        
        if(token) next();
        else{
            const data = req.user.dataValues
            const token = encodeToken(data.id);
            res.setHeader("Authorization", `Bearer ${token}`);
            res.json({msg: "success first", user : data });
        }
    }
    async loginWithToken(req, res,next) {

        res.json({msg: "success second",user : req.user});
    }

    async register (req , res) {
        console.log(req.body)
        
        const {username, password,email,phone,address,gender,name,bod,active} = req.body;
        const foundAccount = await accountService.findByEmail(email,phone);
        if(foundAccount) res.status(403).json({msg: "account already exists"});
        else {
            
            const account = await accountService.register(req.body)
            console.log(account)
            const token = encodeToken(account.id);
            res.setHeader("Authorization", token);
            res.json({"user" : account});
        }
    }
    async secret (req , res,next) {
        console.log("secret controller");
        res.json({msg: "success"})  
    }
   
 
 }
 export default new AccountController();
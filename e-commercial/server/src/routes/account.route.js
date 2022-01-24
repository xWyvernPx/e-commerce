import AccountController from "../controllers/Account.controller.js";
import express from "express";
const route = express.Router();
import "../middleware/passport.js";
import passport from 'passport';


route.post("/signin",passport.authenticate("local",{session: false}),AccountController.login,passport.authenticate("jwt",{session: false}),AccountController.loginWithToken);
route.post("/signup",AccountController.register);
route.route("/secret").get(passport.authenticate('jwt',{session : false}),AccountController.secret);
route.post("/forget");
route.put("/change");

// 
export default route;
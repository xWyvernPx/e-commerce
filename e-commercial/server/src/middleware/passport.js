import passport from "passport";
import JwtStrategy from "passport-jwt/lib/strategy.js";
import {ExtractJwt} from "passport-jwt";
import passport_jwt from "passport-jwt";
import LocalStrategy from "passport-local/lib/strategy.js";
import Account from "../models/account.model.js";
import accountService from "../services/account.service.js";
passport.use(new JwtStrategy({
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
    secretOrKey : "FRESHNECOM",
},
async (payload,done)=>{
        try {
            console.log("passport jwt",payload);
            const user = await Account.findOne({where : {id : payload.sub}})
            return done(null, user);
        } catch (error) {
            
           return done(error, false);
        }
}))
passport.use(new LocalStrategy(
    async function(username, password, done) {
        await Account.findOne({where: {username: username}}).then(user=>{
            // if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
        })
    }
  ));
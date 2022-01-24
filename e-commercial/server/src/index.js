import cors from "cors";
import express from "express";
import { Sequelize } from "sequelize";
import { config } from "../database/dbconfig.js";
import { Route } from "./routes/index.js";
import faker from "@withshepherd/faker/locale/en.js"
import Account from "./models/account.model.js";
import 'dotenv/config'

const app = express();
var port = 4001;
const sequelize = new Sequelize(config);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended:true
}))


try {
  await sequelize.authenticate();
  app.listen(port,()=>{ 
    console.log("App listening at : http://localhost:4001")
  });

} catch (error) {
  console.error('Unable to connect to the database:', error);
}
Route(app);
// checking section

// Account.create ({
//   username: 'athena20937',
//   password: 'iloveyoumuch1',
//   email : 'athena20937@gmail.com',
//   phone : '0926782779',
//   address : '61/7C Thoi Tay 2 Tan hiep Hoc Mon',
//   gender : 'male',
//   name : "Le Thanh Phong",
//   bod : Date.now(),
//   active : 1,

// })
// console.log(await Account.findOne({where : {username: 'athena20937', password: 'iloveyoumuch1',id : "205"}}))
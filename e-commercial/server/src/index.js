import express from "express";
import { Route } from "./routes/index.js";
import {config} from "../database/dbconfig.js"
import {Sequelize} from "sequelize"
import cors from "cors";

import OrderItem from "./models/orderitem.model.js";
import Feedback from "./models/feedback.model.js";
import Discount from "./models/discount.model.js";
import CartItem from "./models/cartitem.model.js";
import AddressSet from "./models/addressSet.model.js";
import Account from "./models/account.model.js";

const app = express();
var port = 4000;
const sequelize = new Sequelize(config);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended:true
}))
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  app.listen(port,()=>{ 
    console.log("App listening at : http://localhost:4000")
  });

} catch (error) {
  console.error('Unable to connect to the database:', error);
}
Route(app);
// checking section
const data = await Account.findAll();
console.log(data);
import cors from "cors";
import express from "express";
import { Sequelize } from "sequelize";
import { config } from "../database/dbconfig.js";
import { Route } from "./routes/index.js";


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

// productService.getAll() ;

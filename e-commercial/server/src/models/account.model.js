import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
import Feedback from "./feedback.model.js";
const sequelize = new Sequelize(config);
  class Account extends Model {}
  Account.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
      // allowNull defaults to true
    },
    email : {
        type : DataTypes.STRING(150),
    },
    phone : {
        type : DataTypes.STRING(15),
    },
    Address : {
        type : DataTypes.STRING(200),
    },
    gender : {
        type : DataTypes.STRING(10),
    },
    ava : {
        type : DataTypes.STRING(300),
    },
    name : {
        type : DataTypes.STRING(150),
        allowNull:false,
    },
    active : {
        type : DataTypes.BOOLEAN,
        allowNull:false,
    },
 
    created_at : {
        type : DataTypes.DATE,
    },
    modefied_at : {
        type: DataTypes.DATE,
        allowNull:false,
    },
    deleted_at : {
        type: DataTypes.DATE,
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Account', // We need to choose the model name
    tableName: "account",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
export default Account;
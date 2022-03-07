import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class Payment extends Model {}
  Payment.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
      // allowNull defaults to true
    },
    provider : {
        type : DataTypes.STRING(100),
        allowNull:false,
    },
    account_no : {
        type : DataTypes.STRING(20),
        allowNull:false,
    },
    expiry : {
        type : DataTypes.DATE,
        allowNull:false
    },
    accountID : {
        type : DataTypes.INTEGER,
        allowNull : false ,
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
    modelName: 'Payment', // We need to choose the model name
    tableName: "payment",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default Payment;
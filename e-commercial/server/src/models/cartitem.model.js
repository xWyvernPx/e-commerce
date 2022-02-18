import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
import ShoppingSession from "./shopping_session.model.js";
const sequelize = new Sequelize(config);
  class CartItem extends Model {}
  CartItem.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    quantity: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
   
    productID : {
        type : DataTypes.INTEGER,
        allowNull : false ,
    },
    // sessionID : {
    //     type : DataTypes.INTEGER,
    //     allowNull : false ,
    //     references : ShoppingSession,

    // },

    
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
    modelName: 'CartItem', // We need to choose the model name
    tableName: "CartItem",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default CartItem;
import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);

  class ShoppingSession extends Model {}
  ShoppingSession.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
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
    modelName: 'ShoppingSession', // We need to choose the model name
    tableName: "shopping_session",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
  // sequelize.close();
export default ShoppingSession;
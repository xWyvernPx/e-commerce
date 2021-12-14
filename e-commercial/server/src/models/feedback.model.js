import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class Feedback extends Model {}
  Feedback.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
      // allowNull defaults to true
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
    modelName: 'Feedback', // We need to choose the model name
    tableName: "feedback",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default Feedback;
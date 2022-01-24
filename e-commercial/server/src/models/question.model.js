import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class Question extends Model {}
  Question.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    // userId : {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // productId : {
    //     type : DataTypes.INTEGER,
    //     allowNull : false ,
    // },
    content : {
        type: DataTypes.TEXT
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
    modelName: 'Question', // We need to choose the model name
    tableName: "question",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default Question;
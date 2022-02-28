import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
class Answer extends Model {}
Answer.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      primaryKey: true,
    },
    // userId : {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // productId : {
    //     type : DataTypes.INTEGER,
    //     allowNull : false ,
    // },
    content: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Answer", // We need to choose the model name
    tableName: "answer",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default Answer;

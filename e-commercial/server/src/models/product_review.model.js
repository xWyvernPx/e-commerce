import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class ProductReview extends Model {}
  ProductReview.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(50),
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
    rate : {
        type: DataTypes.INTEGER,
    },
    content : {
        type: DataTypes.TEXT
    },
    appreciate : {
        type : DataTypes.INTEGER,
    },
    dislikes : {
        type: DataTypes.INTEGER,
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
    modelName: 'ProdusctReview', // We need to choose the model name
    tableName: "product_review",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default ProductReview;
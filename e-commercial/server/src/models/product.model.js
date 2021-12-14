import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class Product extends Model {}
  Product.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
      // allowNull defaults to true
    },
    describe : {
        type : DataTypes.TEXT,
        allowNull:false
    },
    categoryID : {
        type : DataTypes.INTEGER,
        allowNull : false ,
    },
    SKU : {
        type :DataTypes.INTEGER,
        allowNull:false
    },
    price :{
        type :DataTypes.INTEGER,
        allowNull :false
    },
    discountID : { 
        type: DataTypes.INTEGER
    },
    viewCount : {
        type : DataTypes.INTEGER,
    },
    buyCount :{
        type :DataTypes.INTEGER,
    },
    Rating :{ 
        type : DataTypes.FLOAT,
    },
    subcategoryID : {
        type :DataTypes.INTEGER,
        allowNull:false
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
    modelName: 'Product', // We need to choose the model name
    tableName: "product",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default Product;
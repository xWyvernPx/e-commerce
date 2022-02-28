import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
class Wishlist extends Model {}
Wishlist.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // userId : {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // productId : {
    //     type : DataTypes.INTEGER,
    //     allowNull : false ,
    // },
    active: {
      type: DataTypes.BOOLEAN,
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
    modelName: "Wishlist", // We need to choose the model name
    tableName: "wishlist",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default Wishlist;

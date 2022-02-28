import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
class ProductImg extends Model {}
ProductImg.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      // allowNull defaults to true
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: "ProductImg", // We need to choose the model name
    tableName: "product_img",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default ProductImg;

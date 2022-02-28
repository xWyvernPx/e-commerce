import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
class Discount extends Model {}
Discount.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "iD",
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // allowNull defaults to true
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
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
    modelName: "Discount", // We need to choose the model name
    tableName: "discount",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default Discount;

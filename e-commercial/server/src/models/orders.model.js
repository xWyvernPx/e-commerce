import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
import Account from "./account.model.js";
const sequelize = new Sequelize(config);
class Orders extends Model {}
Orders.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    isDone: {
      type: DataTypes.BOOLEAN,
    },
    isProgressing: {
      type: DataTypes.BOOLEAN,
    },
    paymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
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
    modelName: "Orders", // We need to choose the model name
    tableName: "orders",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
Account.hasMany(Orders, { foreignKeyConstraint: "FK_OrdersAccount" });
Orders.belongsTo(Account, { foreignKeyConstraint: "FK_OrdersAccount" });
export default Orders;

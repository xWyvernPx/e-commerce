import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "../../database/dbconfig.js";
import Feedback from "./feedback.model.js";
import bcrypt from "bcryptjs";
const sequelize = new Sequelize(config);
class Account extends Model {}
Account.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(15),
      unique: true,
    },
    address: {
      type: DataTypes.STRING(200),
    },
    gender: {
      type: DataTypes.STRING(10),
    },
    ava: {
      type: DataTypes.STRING(300),
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bod: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    session: {
      type: DataTypes.STRING,
    },
    jwt: { type: DataTypes.STRING },
    token: { type: DataTypes.STRING },
    last_login: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    modified_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Account", // We need to choose the model name
    tableName: "account",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    initialAutoIncrement: "id",
  }
);
Account.beforeSave(async function (account) {
  try {
    console.log("password", account.password);
    const salt = await bcrypt.genSalt(2);
    console.log("salt", salt);
    // const passwordHash = await bcrypt.hash(account.password,1);
    console.log("passwordHash", passwordHash);
    // account.password = passwordHash;
  } catch (error) {
    console.log(error);
  }
});
Account.prototype.validPassword = function (password) {
  return password === this.password;
};

export default Account;

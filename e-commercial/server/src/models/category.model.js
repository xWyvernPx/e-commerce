import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  class Category extends Model {}
  Category.init({
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
        type : DataTypes.STRING,
    },
    slug : {
        type : DataTypes.STRING(50),
        allowNull:false,
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
    modelName: 'Category', // We need to choose the model name
    tableName: "category",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
  // sequelize.close();
export default Category;
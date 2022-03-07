import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class AddressSet extends Model {}
  AddressSet.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    type : {
      type: DataTypes.STRING(20),
      // allowNull defaults to true
    },
    commune : {
        type : DataTypes.STRING(50),
        allowNull:false,
    },
    district : {
        type : DataTypes.STRING(50),
        allowNull:false,
    },
    city : {
        type : DataTypes.STRING(50),
        allowNull:false,
    },
    address : {
        type : DataTypes.STRING(100),
    },
    accountID : {
        type : DataTypes.INTEGER,
        allowNull : false ,
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
    modelName: 'AddressSet', // We need to choose the model name
    tableName: "addressSet",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default AddressSet;
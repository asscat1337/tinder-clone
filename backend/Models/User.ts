import {DataTypes} from "sequelize";
import {connection} from '../config/config'

const User = connection.define('user',{
    user_id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    login:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false
})

export {
    User
}
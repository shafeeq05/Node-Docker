import { Sequelize,DataTypes } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_ROOT_PASSWORD,{
    dialect:"mysql",
    host:process.env.HOST,
    port:process.env.MYSQL_PORT
    
})


export  {sequelize,DataTypes}
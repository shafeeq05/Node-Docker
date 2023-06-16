import express from'express'
import userrouter from './Router/User.js'
import cors from 'cors'
import mySql from 'mysql2'
import { sequelize } from './Helpers/Sequlizesettings.js'
import dotenv from 'dotenv'
import moneyRequestrouter from './Router/Money_Rquest_Router.js'

dotenv.config()
console.log(process.env.sha);


const app = express()
app.use(cors())


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',userrouter)
app.use('/',moneyRequestrouter)




  sequelize.authenticate().then(()=>{
    app.listen(process.env.PORT,async()=>{
        console.log("server started");
        console.log("db connected");
        
        sequelize.sync()
    })
  }).catch((err)=>{
    console.log("error",err);
  })
 



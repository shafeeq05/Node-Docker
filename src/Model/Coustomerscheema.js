import {sequelize,DataTypes} from "../Helpers/Sequlizesettings.js"



const   User = sequelize.define(
    "996_users",{
        username:{ 
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
       type:DataTypes.STRING,
       allowNull:false
    }
    // PhoneNo:{
    //     type:DataTypes.STRING,
    //     allowNull:false,
    //     unique:true
    // },
    // Email:{
    //     type:DataTypes.STRING,
    //     allowNull:false,
    //     unique:true
    // },
    // PassWord:{
    //     type:DataTypes.STRING,
    //     allowNull:false
    // },
    // walletid:{
    //     type:DataTypes.STRING,
       
    // }
},
{
    timestamps: true,
    underscored: true,
  }
)


export default User



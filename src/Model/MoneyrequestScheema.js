import { sequelize,DataTypes } from "../Helpers/Sequlizesettings.js";

const moneyRequestsScheema = sequelize.define(
    "996_payout_release_requests",
    {
        user_id :{
            type:DataTypes.BIGINT,
            allowNull:false
        },
        balance_amount:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        status:{
            type:DataTypes.TINYINT
        },
        payment_method:{
            type:DataTypes.BIGINT
        },
        amount:{
            type:DataTypes.DECIMAL
        }
        // balaceamount:{
        //     type:DataTypes.DECIMAL,

        // }

}, {
    // timestamps: true,
    underscored: true,
  })

export default moneyRequestsScheema
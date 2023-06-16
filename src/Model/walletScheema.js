import { sequelize,DataTypes } from "../Helpers/Sequlizesettings.js";

const wallet = sequelize.define(
    '996_user_balance_amounts',
    {
        // amount:{
        //     type:DataTypes.DECIMAL,
        //     allowNull:true
        // },
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.BIGINT,
                allowNull:false
            },
            payout_wallet_amount :{
                type:DataTypes.DECIMAL   
            }
        
    },
    {
        // timestamps: true,
        underscored: true,
      }
)

export default wallet
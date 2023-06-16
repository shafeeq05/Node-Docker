import { sequelize,DataTypes } from "../Helpers/Sequlizesettings.js";

const payoutconfigurations = sequelize.define(
    
    "996_payout_configurations",{
        min_payout:{
            type:DataTypes.INTEGER
        },
        max_payout:{
            type:DataTypes.INTEGER
        }
    },
    { underscored: true}
    
)
export default payoutconfigurations
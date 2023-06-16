import User from "../Model/Coustomerscheema.js";
import moneyRequestsScheema from "../Model/MoneyrequestScheema.js";
import wallet from "../Model/walletScheema.js";
import payoutconfigurations from "../Model/payout_configurations.js";



const moneyRequests = {
   

    get:async(req,res)=>{
        try {
          const user = await  wallet.findOne(
            {
                where:{
                    user_id:req.body.miduser.id
                }
            })
            console.log(user.toJSON(),"user-----------");
             res.json({message:'requested sucssess', data:user.toJSON()})
           
        } catch (error) {
            console.log(error,"CATCH ERORR");
            res.status(401).json({message:"something wrong" ,data:''})
        }
    },
    post:async(req,res)=>{
        try {
            const {miduser,amount}=req.body
            const condition = await payoutconfigurations.findOne()

            console.log(condition.toJSON());

if(condition.toJSON().min_payout<parseInt(amount) && condition.toJSON().max_payout  >parseInt(amount)){
            
            console.log(miduser,"userrr--------------------");
            const moneyrequest = await  moneyRequestsScheema.create({
                user_id:miduser.id,
                balance_amount:amount,
                status:false,
                payment_method:4,
                amount:amount
            })
            console.log(moneyrequest.toJSON());
            const balance = await wallet.findOne(
                {where:{
                user_id:miduser.id
                }
            })
            console.log(balance.toJSON(),"user balance --------------------");
                const {updatedAt,createdAt,id,...resObj} = moneyrequest.toJSON()
                // console.log(moneyRequests,'payment request ------------------------');
                balance. payout_wallet_amount -=  amount
                balance.save()
                res.json({message:"requested succsessfully",data:resObj})
        }else{
            res.json({message:"amount not satify min or maximum amount"})
        }
            
        } catch (error) {
            console.log(error);
            res.status(401).json({ error: "requst error" });
        }

    },
    update:async(req,res)=>{
        try {
            // console.log(req.body,"reqest --------------------------------------------------------------------------");
            const updateUser = await  moneyRequestsScheema.findOne({
                where : {
                    userId:req.body.miduser.id,
                }
            })
            const balanceUpdate = await wallet.findOne({
                where:{
                    id:req.body.miduser.walletid
                }
            })
            if(updateUser.status == true){
                res.json({message:'already approved'})
            }
              else if(parseInt(balanceUpdate.amount)>parseInt(updateUser.amount)){
                    //    console.log(updateUser.amount,"user amount -------------------------------------------------");
                       updateUser.status =  true
                       updateUser.save()
                       res.json({message:'request approved'})
                   
               }

        } catch (error) {
            // console.log(error,"eroorrrr------------------------------------------------------");
            res.json({message:'updation error',error:error})
        }
    }

}
export default moneyRequests
import { Router } from "express";
import moneyRequests from "../Controller/Moneyrequest.js";
import { auth } from "../middleware/Userauth.js";
const router = Router()


router.get('/wallet',auth.user,moneyRequests.get)
router.post('/wallet',auth.user,moneyRequests.post)
// router.post('/walletamount',auth.user,moneyRequests.balance)
router.put('/wallet',auth.user,moneyRequests.update)



export default router
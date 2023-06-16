import { Router } from "express";
import loginControl from "../Controller/User.js";
import { auth } from "../middleware/Userauth.js";
const router = Router()
router.get('/user',auth.user,loginControl.getuser)
//-------------------------Login and signup---------------------
router.post('/login',loginControl.login)
router.post('/signup',loginControl.signin)
router.get('/',auth.user,loginControl.user)
router.get('/a',loginControl.test)



export default router
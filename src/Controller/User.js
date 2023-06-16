import User from "../Model/Coustomerscheema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginFormVal, signupFormVal } from "../Validation/formValidation.js";
import moneyRequestsScheema from "../Model/MoneyrequestScheema.js";
import wallet from "../Model/walletScheema.js";
import { sequelize } from "../Helpers/Sequlizesettings.js";


const userControl = {
  test:(req,res)=>{
    res.send('<h1>Shafeeq</h1>');
    res.end();
  },
  user:async(req,res)=>{
    const user = await User.findOne({
      id:req.body.miduser.id
    })
    res.json({message:"user details",data:user.toJSON()})

  },
  getuser: async (req, res) => {
    try {
      const { PassWord, createdAt, updatedAt, ...newuser } = req.body.miduser;
      // console.log(newuser, "getuser ---------------- ");
      const users = await moneyRequestsScheema.findAll({
        where: {
          userid: newuser.id,
        },
      });
      // console.log(users);
      return res.json({ message: "fecthing sucsessfull", data: users });
    } catch (error) {
      // console.log("error ------------------", error);
      res.status(401).json({ error: "requst error" });
    }
  },
  //---------------------Login------------------------------

  login: async (req, res) => {
    try {
      const validation = loginFormVal.parse(req.body);
      console.log(validation, "validaton---------------------");
      const { uname, pwd } = req.body;
      const user = await User.findAll(
        {
        where: {
          username: uname,
        },
      });
      console.log(user,"table-----------------");
      if (!user) {
        return res.status(401).json({ error: "Invalid Username" });
      }
      console.log(user[0].toJSON());
      const match = await bcrypt.compare(pwd, user[0].toJSON().password);
      console.log(match,'match-----------------');
      if (!match) {
        const tocken = jwt.sign({ id: user[0].toJSON().id }, "shafeeq", {
          expiresIn: "7d",
        });
        const { PassWord, createdAt, updatedAt, ...newuser } = user[0].toJSON();
        // console.log(newuser);
        return res.json({
          message: "Login successful",
          data: newuser,
          usertocken: tocken,
        });
      } else {
        console.log("error");
        return res.status(401).json({ error: "Invalid Password" });
      }
    } catch (err) {
      console.log(err.message,"eoorr---------------");
      return res.status(401).json({ error: err.message });
    }
  },
  //-------------------------------Signup-----------------------------

  signin: async (req, res) => {
    // console.log(req.body);
    try {
      const validation = signupFormVal.parse(req.body);
      const { Firstname, Lastname, Phone, Email, Pwd } = req.body;
      const password = await bcrypt.hash(Pwd, 10);

      await sequelize.transaction(async(t)=>{
      const createuser = await User.create(
        {
          FirstName: Firstname,
          LastName: Lastname,
          PhoneNo: Phone,
          Email: Email,
          PassWord: password,
        },
        { transaction: t }
      );
      const createWallet = await wallet.create(
        { amount: 1000 },
        { transaction: t }
      );
      createuser.walletid = createWallet.id
      createuser.save()
      res.json({message:'Signup sucssessfully'})
    })
    } catch (err) {
      console.log("error---------------", err.message);
      res.status(401).json({ error: err.message });
    }
  },
};
export default userControl;

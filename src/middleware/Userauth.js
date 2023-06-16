import jwt from "jsonwebtoken";
import userModel from "../Model/Coustomerscheema.js";

export const auth = {
  user: async (req, res, next) => {
    try {
      // console.log(req.body);
      // console.log(req.headers.userid);
      const userjwt = req.headers.userid;
      const jwtVerify = await jwt.verify(userjwt, "shafeeq").id;
      // console.log(jwtVerify);
      const verify = await userModel.findOne({
        where: {
          id: jwtVerify,
        },
      });
      if (verify) {
  
        req.body.miduser = verify.toJSON();
        next();
      }
    } catch (error) {
      console.log(error,"error----------");
      return res.status(401).json({ error: "Invalid credentials" });
    }
  },
};

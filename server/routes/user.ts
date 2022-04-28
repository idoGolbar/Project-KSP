
import { Router,Request,Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";


const router = Router();
const saltRounds = 10;

router.post('/login', async (req:Request, res:Response) => {
    try {
        const { username, password } = req.body;
        let findUser = await User.findOne({ username })
        if (findUser && await checkUserPassword(password, findUser.password)) {
            res.json({ success: true, message: "User login successful" });
        } else {
            res.json({ sucess: false, message: "User not found" });
        }
    } catch (err) {
        res.json({ success: false, message: "Something went wrong" });
    }
});



router.post('/CreateNewUser', async (req:Request, res:Response) => {
    try {
        const { username, address, phone, mail, password } = req.body;
        checkUser(username, phone, mail).then(async(result) => {
            if (result.success) {
                let hashPassword=bcrypt.hashSync(password,saltRounds);
                await User.create({
                    username, address, phone, mail, password:hashPassword
                })
            }
            else {
                 res.send({message:result.message})
            }
        });
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});
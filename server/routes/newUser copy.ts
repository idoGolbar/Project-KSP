import { Router,Request,Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
const router = Router();

router.post('/CreateNewUser', async (req:Request, res:Response) => {
    try {
        const { username, address, phone, mail, password } = req.body;
        checkUser(username, phone, mail).then(async(result) => {
            if (result.success) {
                await User.create({
                    username, address, phone, mail, password
                })
            }
            else {
                 res.send({message:result.message})
            }
        });
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
})
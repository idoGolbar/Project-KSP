import { Router } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";

const router = Router();

router.post('/CreateNewUser', async (req, res) => {
    try {
        const { username, address, phone, mail, password } = req.body;
        checkUser(username, phone, mail).then((result) => {
            if (result.success) {

            }
        });



    } catch (err) {
        res.json({ success: false, message: "Something went wrong" });
    }
})
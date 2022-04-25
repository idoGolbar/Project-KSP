import { Router } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";


const router = Router();

router.post('/login', async (req, res) => {
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
})
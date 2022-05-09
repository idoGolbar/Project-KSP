
import { Router, Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
import { ValidationEmailPhone } from '../helpers/ValidationEmailPhone';

import session from 'express-session';

declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any };
    }
}

const router = Router();
const saltRounds = 10;

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        let findUser = await User.findOne({ username })
        if (findUser && await checkUserPassword(password, findUser.password)) {
            req.session.user = findUser;
            console.log(req.session.user);
            res.json({ success: true, message: "User login successful" });
        } else {
            res.json({ sucess: false, message: "User not found" });
        }
    } catch (err) {
        res.json({ success: false, message: "Something went wrong" });
    }
});



router.post('/CreateNewUser', async (req: Request, res: Response) => {
    try {
        const { username, address, phone, email, password } = req.body;
        if (ValidationEmailPhone(email)) {
            checkUser(username, phone, email).then(async (result) => {
                if (result.success) {
                    let hashPassword = bcrypt.hashSync(password, saltRounds);
                    await User.create({
                        username, address, phone, email, password: hashPassword, role: "user"
                    })
                    res.send({ message: 'complitely' })
                }
                else {
                    res.send({ message: result.message })
                }
            });
        } else {
            res.send({ message: 'You have entered an invalid email address!' })
        }
    } catch (err) {
        res.json({ success: false, message: "Something went wrong" }).status(500);
    }
});

export default router;
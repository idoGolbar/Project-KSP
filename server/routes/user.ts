
import { Router, Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
import { ValidationEmailPhone } from '../helpers/ValidationEmailPhone';

import session from 'express-session';
import jwt from "jsonwebtoken";

declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any };
    }
}

const createToken = (userId: string) => {
    return jwt.sign({ userId }, 'top secret 123456789', {
        expiresIn: 60 * 60 * 60 * 24 * 1000
    })
}

const router = Router();
const saltRounds = 10;

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        let foundUser = await User.findOne({ username })
        if (foundUser && await checkUserPassword(password, foundUser.password)) {
            // req.session.user = foundUser;
            const token = createToken(foundUser.id);
            res.cookie('jwt', token, { maxAge: 60 * 60 * 1000 * 24 });
            // res.setHeader('Access-Control-Allow-Origin', 'true');
            res.status(200).send({ success: true, message: "User login successful", user: foundUser._id });
            console.log(res);
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
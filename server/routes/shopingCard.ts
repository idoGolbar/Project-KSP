import { Router,Request,Response } from "express";
import User from "../models/User";
import ShopingCard from "../models/ShopingCard"
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
import IUser from "../interfaces/User"
const router = Router();

router.post('/CreateNewOrder', async (req:Request, res:Response) => {
    try {
        const { emailUser, id_Prodact, countPiece } = req.body;
        let user = await User.findOne({email : emailUser})
        let id_user=user._id;
        if(id_user)
        {
//כאן אני מוסיף למערך
        }
        else {
            ShopingCard.create({idUser:id_user,product:id_Prodact,countPiece:countPiece});
        }
       
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});

router.post('/OrderUser', async (req:Request, res:Response) => {
    try {
        const { emailUser } = req.body;
        let user = await User.findOne({email : emailUser})
        let id_user=user._id;
        let findOrderUSer_id=await ShopingCard.findOne({idUser : id_user})
        if(findOrderUSer_id)
        {
            //מחזיר את המערך
        }
        else {
            res.send({success: false, message: "There are no Order" })
        }
       
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});
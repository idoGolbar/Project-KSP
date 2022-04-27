import { Router,Request,Response } from "express";
import User from "../models/User";
import ShopingCart from "../models/ShopingCart"
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
import IUser from "../interfaces/User"
const router = Router();

router.post('/NewOrder', async (req:Request, res:Response) => {
    try {
        const { emailUser, id_Prodact, count } = req.body;
        let user = await User.findOne({email : emailUser})
        let id_user=user?._id;
        let findUserCart=await ShopingCart.findOne({idUser:id_user});
        if(findUserCart)
        {
               await ShopingCart.findOneAndUpdate({listShopingUser:[...findUserCart.listShopingUser,{product_id: id_Prodact ,count}]})
               res.send({success:true,message:'Done successfully'})  
        }
        else {
            await ShopingCart.create({idUser:id_user,listShopingUser:[{product_id: id_Prodact ,count}]})
            res.send({success:true,message:'creat successfully'})
        }
       
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});

router.post('/OrderUser', async (req:Request, res:Response) => {
    try {
        const { emailUser } = req.body;
        let user = await User.findOne({email : emailUser})
        let id_user=user?._id;
        let findOrderUSer_id=await ShopingCart.findOne({idUser : id_user})
        if(findOrderUSer_id)
        {
            res.send({success:true,data:findOrderUSer_id.listShopingUser,message:'found order'})
        }
        else {
            res.send({success: false, message: "There are no Order" })
        }
       
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});
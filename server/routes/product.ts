import { Router,Request,Response } from "express";
import User from "../models/User";
import ShopingCart from "../models/ShopingCart"
import bcrypt from "bcrypt";
import { checkUserPassword } from "../helpers/validatePassword";
import { checkUser } from "../helpers/checkUser";
import IUser from "../interfaces/User"
import Product from "../models/Product";
const router = Router();


router.post('/AddProduct', async (req:Request, res:Response) => {
    try {
        const {   name,
            company,
            price,
            amount,
            color,
            description,
            discountedPrice,
            category,
            imageUrl } = req.body;
       let findName=await Product.findOne({name})
       if(!findName){
        await Product.create({name, company,
            price,
            amount,
            color,
            description,
            discountedPrice,
            category,
            imageUrl,
            mkt:'1222',})
            res.send({success:true, message:'success'})
       }
       else{
           res.send({message:'This name already exists'});
       }
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});

router.post('/DeletProduct', async (req:Request, res:Response) => {
    try {
        const { idProdact } = req.body;
        await Product.deleteOne({_id:idProdact});
        res.send({success:true})
      
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});
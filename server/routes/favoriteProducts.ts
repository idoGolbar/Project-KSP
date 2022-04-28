import { Router,Request,Response } from "express";
import User from "../models/User";
import FavoritesProducts from "../models/FavoritesProducts"
const router = Router();

router.post('/NewFavorite', async (req:Request, res:Response) => {
    try {
        const { emailUser, id_Product } = req.body;
        let user = await User.findOne({email : emailUser});
        let checkeUser_id=await FavoritesProducts.findOne({user_id : user?._id});
        if(checkeUser_id){
            await FavoritesProducts.findOneAndUpdate({user_id:checkeUser_id,products_ids:[id_Product,...checkeUser_id.products_ids,]})
            res.send({sucess:true,message:'Updatefavorites true'});
        }
        else{
           await FavoritesProducts.create({user_id:user?._id,products_ids:[id_Product]})
           res.send({sucess:true,message:'create favorites true'}).status(400);
        }
      
       
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});

router.post('/AllFavoriteUser', async (req:Request, res:Response) => {
    try {
        const { emailUser } = req.body;
        let user=await User.findOne({email : emailUser});
        let checkeUserFavoritesId =await FavoritesProducts.findOne({user_id:user?._id});
        if(checkeUserFavoritesId){

res.send({sucess:true,data:checkeUserFavoritesId.products_ids,message:'favorites found'})
        }
        else{ 
            res.send({sucess:false,message:'No favorites found'}).status(400);
        } 
    } catch (err) {
        res.json({  success: false, message: "Something went wrong" }).status(500);
    }
});
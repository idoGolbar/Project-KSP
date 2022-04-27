import mongoose from 'mongoose';
import { Schema, model, connect } from 'mongoose';

import IShopingCart from "../interfaces/ShopingCart"
const shopingCartSchema = new Schema<IShopingCart>({
    
    idUser: { type: Schema.Types.ObjectId, required: true },
    listShopingUser :{ type:Schema.Types.Array , required: false },
}, { timestamps: true })


export default model<IShopingCart>('Shoping Card', shopingCartSchema); 
import mongoose from 'mongoose';
import { Schema, model, connect } from 'mongoose';

import IShopingCard from "../interfaces/ShopingCard"

const shopingCardSchema = new Schema<IShopingCard>({
    
    idUser: { type: Schema.Types.ObjectId, required: true },
    product: { type: Schema.Types.ObjectId, required: true },
    countPiece :{ type: Number, required: true },
    // arrShopingUser :{ type: Number, required: true },
}, { timestamps: true })


export default model<IShopingCard>('Shoping Card', shopingCardSchema); 
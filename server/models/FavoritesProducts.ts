import { Schema, model, connect, Types, ObjectId } from 'mongoose';
import IFavoriteProduct from '../interfaces/FavoriteProduct';



const FavoriteProductSchema = new Schema<IFavoriteProduct>({
    user_id: { type: Types.ObjectId, required: true },
    products_ids: [{ type: Types.ObjectId, required: true },
}, { timestamps: true })


export default model<IFavoriteProduct>('NewUser', FavoriteProductSchema); 
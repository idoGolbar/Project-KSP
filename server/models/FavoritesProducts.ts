import { Schema, model, connect, Types, ObjectId, SchemaDefinitionProperty } from 'mongoose';
import IFavoriteProduct from '../interfaces/FavoriteProduct';



const FavoriteProductSchema = new Schema<IFavoriteProduct>({
    user_id: { SchemaDefinitionProperty: Types.ObjectId, required: true },
    products_ids: { type:Schema.Types.Array, required: true },
}, { timestamps: true })


export default model<IFavoriteProduct>('FavoritesProducts', FavoriteProductSchema);  
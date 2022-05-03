import { Schema, model, connect, Types, ObjectId, SchemaDefinitionProperty } from 'mongoose';
import IProduct from '../interfaces/Product';



const ProductSchema = new Schema<IProduct>({
    name: { type:String, required: true },
    mkt: { type:String, required: false },
    company: { type:String, required: true },
    price: { type:String, required: true },
    discountedPrice: { type:String, required: false },
    Description: { type:String, required: true },
}, { timestamps: true })


export default model<IProduct>('Products', ProductSchema);  
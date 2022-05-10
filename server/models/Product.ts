import { Schema, model, connect, Types, ObjectId, SchemaDefinitionProperty } from 'mongoose';
import IProduct from '../interfaces/Product';



const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    mkt: { type: String, required: false },
    company: { type: String, required: true },
    price: { type: String, required: true },
    amount: { type: Number, required: false },
    color: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    discountedPrice: { type: String, required: false },
}, { timestamps: true })


export default model<IProduct>('Products', ProductSchema);  
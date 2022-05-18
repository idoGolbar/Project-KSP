import { Schema, model, connect, Types, ObjectId, SchemaDefinitionProperty } from 'mongoose';
import IProduct from '../interfaces/Product';



const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    mkt: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    discountPrice: { type: String, required: false },
    extraData: { type: Object, required: false },
    collection: { type: [Types.ObjectId], required: false }
}, { timestamps: true })


export default model<IProduct>('Products', ProductSchema);  
import { ObjectId } from "mongoose";
export default interface IProduct {
    name: string;
    mkt: string;
    company: string;
    price: string;
    description: string;
    discountPrice?: string;
    extraData?: Object;
    collection?: Array<ObjectId>;
    category: string;
    imageUrl: string;
    createdAt: Date,
    updatedAt: Date,
}
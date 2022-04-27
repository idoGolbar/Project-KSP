import { Types, Document } from "mongoose";

export default interface IFavoriteProduct extends Document<Types.ObjectId> {
    user_id: Types.ObjectId;
    products_ids: Array<Types.ObjectId>;
}
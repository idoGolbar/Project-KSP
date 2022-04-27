import { Types } from "mongoose";

export default interface IFavoriteProduct {
    user_id: Types.ObjectId;
    products_ids: Array<Types.ObjectId>;
}
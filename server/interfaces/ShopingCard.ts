import Types  from "mongoose";

export default interface IShopingCard {
    idUser: Types.ObjectId;
    product: Types.ObjectId;
    countPiece : number;
    // countPiece :{ type: Number, required: true };
}
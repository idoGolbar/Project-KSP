import Types  from "mongoose";

 interface ListProduct{
product_id:Types.ObjectId,
count : number
}
export default interface IShopingCart {
    idUser: Types.ObjectId;
    listShopingUser :Array<ListProduct>;
}
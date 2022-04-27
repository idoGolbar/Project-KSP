import { Schema, model, connect } from 'mongoose';

import INewUser from "../interfaces/NewUser"

const newUserSchema = new Schema<INewUser>({
    username: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })


export default model<INewUser>('NewUser', newUserSchema); 
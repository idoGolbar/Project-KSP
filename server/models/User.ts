import { Schema, model, connect } from 'mongoose';

import IUser from "../interfaces/User"

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })


export default model<IUser>('User', userSchema); 
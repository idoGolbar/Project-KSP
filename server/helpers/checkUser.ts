import User from "../models/User";

export const checkUser = async (findUser: string, findPhone: number, findMail: string)=> {
    let user = await User.findOne({ username: findUser });
    let phone = await User.findOne({ phone: findPhone });
    let mail = await User.findOne({ mail: findMail });
    if (user) {
        return { success: false, message: "Please change the username" };
    } else if (phone) {
        return { success: false, message: "This number already exists" };
    } else if (mail) {
        return { success: false, message: "This email already exists" };
    }
    return { success: true, message: "ok" };
} 
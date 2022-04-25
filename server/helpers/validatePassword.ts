import bcrypt from "bcrypt";

export const checkUserPassword = (loginPassword: string, dbPassword: string) => {
    return bcrypt.compare(loginPassword, dbPassword);
} 
import express from 'express';
import mongoose from 'mongoose';
import User from "./routes/user";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { ConnectMongoOptions } from 'connect-mongo/build/main/lib/MongoStore';

dotenv.config();


const connection = mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log('DB connection established');
}).catch((err) => {
    console.log(err);
});



const app = express();


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3001', 'http://localhost:3000'], credentials: true }));
app.use(bodyParser.json());
app.use('/api/user', User);
app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})
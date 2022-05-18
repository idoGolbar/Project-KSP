import express from 'express';
import mongoose from 'mongoose';
import User from "./routes/user";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { ConnectMongoOptions } from 'connect-mongo/build/main/lib/MongoStore';

dotenv.config();


const connection = mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log('DB connection established');
}).catch((err) => {
    console.log(err);
});



const app = express();
// SESSIONS FOR AUTH

// const sessionStore = new MongoStore({
//     mongooseConnection: connection,
//     collection: 'sessions',
// })


app.use(session({
    secret: 'i love dogs',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/api/user', User);

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})
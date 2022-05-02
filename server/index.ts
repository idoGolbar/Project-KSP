import express from 'express';
import mongoose from 'mongoose';
import User from "./routes/user";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.DB_URL as string).then((status) => {
    console.log("database connection established");
}).catch((error) => {
    console.log("database connection error", error);
});



const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/api/user', User);

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})
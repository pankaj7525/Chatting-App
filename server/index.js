import express from 'express';
import connection from './database/db.js';
import bodyParser from 'body-parser';
import Route from './routes/route.js'
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Route);

connection();

const PORT = 8000;

app.listen(PORT, ()=> console.log(`server is succesfully running on PORT ${PORT}`))
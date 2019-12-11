require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const massive = require('massive');
const session = require('express-session');
const {register, login, logout} = require('./Controllers/authController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("*presses enter* I'm In")
});

const authEnd = '/auth/user';

//Auth Endpoints
app.post(`${authEnd}/new`, register);
app.post(`${authEnd}/login`, login)
app.post(`${authEnd}/logout`, logout);

//Drinks Endpoints


app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
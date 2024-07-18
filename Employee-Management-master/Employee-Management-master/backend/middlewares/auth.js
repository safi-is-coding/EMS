const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
// const auth = (req, res, next) => {
    
//     // accessing the token from cookie
//     const token = req.cookie.token

//     // if no token, stop there
//     if (!token) {
//         return res.status(401).json({ error: 'Unauthorized' })
//     }

//     // decoding that token and get id
//     const decode = jwt.verify(token, 'shhhh') // (token as a string, jwt secret key)
//     console.log(decode);

//     next()

// }



// Middleware to check if the user is authenticated
const path = require('path');

function auth(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).sendFile(path.join(__dirname, '../../frontend/unauthorized.html'));
        // return res.redirect('/user/login');
    }

    try {
        const decoded = jwt.verify(token, 'shhhh');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
}


module.exports = auth
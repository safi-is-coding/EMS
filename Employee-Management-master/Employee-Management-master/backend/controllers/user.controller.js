const User = require('../models/user.model.js')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')

const register = async (req, res) => {

    try {
        // getting all the data from body
        const { firstName, lastName, email, password } = req.body

        // checking that all the data should exist
        if(!(firstName && lastName && email && password)){
            res.status(400).json({message: "All fileds are compulsory !!"})
        }

        // checking if user already exists
        const existingUser = await User.findOne({ email })
        if(existingUser){
            res.status(400).json({message: "User already registered with this email !!"})
        }

        //encrypting the password
        const EncPassword = await bycrypt.hash(password, 10)

        // saving the user in database
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: EncPassword
        })

        // generating the token for user and send it
        const token = jwt.sign(
            {id: user._id, email: user.email},
            'shhhh', // this is the secret key we should take this using process.env.JWT_SECRET_KEY
            {
                expiresIn: "1m"
            }
        )
        user.token = token

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const login = async (req, res) => {
    try {
        // getting all data from the body
        const { email, password } = req.body

        // validation of the fields
        if (!(email && password)) {
            res.status(400).json({message: "All fileds are compulsory !!"})
        }

        // find user in DB
        const user = await User.findOne({ email })

        // match the password
        if (user && (await bycrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id },
                'shhhh',
                { expiresIn: '2h' }
            )    
            user.token = token    
            
            const options = {
                expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
                httpOnly: true 
            }
            // res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })


        }else{
            res.status(400).json({message: "User not found"})
        }


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({message: "Logged out successfully"})
    } 
    catch (error) {
            res.status(500).json({message: error.message})
    }
}

module.exports = {
    register,
    login,
    logout
}
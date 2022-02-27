const User = require("../model/User")
const bcrypt = require("bcrypt")

const authController = {
    //Register
    registerUser: async(req, res) => {
        try{
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // Create new user
            const newUser = await new User({
                userName: req.body.userName,
                email: req.body.email,
                password: hashed
            })
            //Save database
            const user = await newUser.save()
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    },
    loginUser: async(req, res) => {
        try{
            const user = await User.findOne({userName : req.body.userName})
            if(!user){
                res.status(404).json("khong tim thay username")
            }
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            )
            if (!validPassword) {
                res.status(404).json("sai mat khau") 
            }
            if(user && validPassword){
                res.status(200).json(user)
            }
        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = authController
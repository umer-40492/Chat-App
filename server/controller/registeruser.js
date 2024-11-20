const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs")
async function registerUser(req, res){
    try {
        const {name, email, password,profile_pic} = req.body;
        const checkEmail =  await userModel.findOne({email});

        if(checkEmail){
            return message.status(400).json({
                message: "email Already exist",
                error: true
            })
        }

        //password into hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPass = await bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashPass,
            profile_pic
        }
        const user =  new  userModel(payload);
        const userSave = await user.save();
        return res.status(201).json({
            message: "User Created Successfully",
            data: userSave,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = registerUser;
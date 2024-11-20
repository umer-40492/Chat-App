const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");
const userModel = require("../models/userModel");

async function userUpdateDetail(req,res) {
    try {
        const token = req.cookies.token || "";
        const user = await getUserDetailFromToken(token);
        const {name, profile_pic} = req.body;
        const updateUser = await userModel.updateOne({_id: user.id},{
            name, profile_pic
        });

        const userInformation = await userModel.findById(user._id);
        return res.json({
            message: "user updated successfully",
            data: userInformation,
            success: true
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}
module.exports = userUpdateDetail;
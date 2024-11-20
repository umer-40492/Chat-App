const express = require("express");
const registerUser = require("../controller/registeruser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkpassword");
const userDetail = require("../controller/userdetail");
const logout = require("../controller/logout");
const userUpdateDetail = require("../controller/updateUserDetail");
const router = express.Router();

//create user API
router.post('/register', registerUser);
// check user email 
router.post('/email', checkEmail)
//check userpassword
router.post('/verifypassword', checkPassword)
//login user detail
router.get('/user-detail', userDetail);
//logout 
router.get('/logout', logout);
//update user 
router.post('/update-user', userUpdateDetail)

module.exports = router;
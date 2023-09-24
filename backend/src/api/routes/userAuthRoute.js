const express=require("express");
const router=express.Router();
// const {authentication}=require("../middleware");
const {userAuthController}=require("../controllers");

router.post("/signup",[],userAuthController.signup);
router.post("/login",[],userAuthController.login);


module.exports=router;
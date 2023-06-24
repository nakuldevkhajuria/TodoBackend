const express = require("express");
const { createUser } = require("../controllers/UserCtrl");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hi htis is home')
})

router.post('/',createUser)

module.exports = router
const express = require('express');
const {login} = require("../services/getCookies");
const router = express.Router();


router.get("/login",async (req,res) => {
    let username = req.header("username");
    let password = req.header("password");
    let result = await login(username,password)
    res.send(result);
})

module.exports = router;

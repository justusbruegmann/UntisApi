const express = require('express');
const {fetchMessages,fetchMessage} = require("../services/fetchMessages");
const router = express.Router();


router.get("/messages",async (req,res) => {

    let cookies = req.header("Token")
    let result = await fetchMessages(cookies)
    res.send(result);
})

router.get("/message",async (req,res) => {
    let messageId = req.query.messageId
    let cookies = req.header("Token")
    let result = await fetchMessage(cookies,messageId)
    res.send(result);
})

module.exports = router;

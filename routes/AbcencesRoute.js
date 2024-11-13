const express = require('express');
const {fetchAbcences} = require("../services/fetchAbcences");
const router = express.Router();


router.get("/abcences",async (req,res) => {
    let studentId = req.query.studentId
    let startDate = req.query.startDate
    let endDate = req.query.endDate
    let status = req.query.status

    let cookies = req.header("Cookies")
    let result = await fetchAbcences(startDate,endDate,studentId,status,cookies)
    res.send(result);
})

module.exports = router;

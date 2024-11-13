const express = require('express');
const {fetchHomework} = require("../services/fetchHomework");
const router = express.Router();


router.get("/homework", async (req, res) => {
    let studentId = req.query.studentId
    let enddate = req.query.enddate
    let cookies = req.header("Cookies")
    let result = await fetchHomework(cookies, enddate, studentId)
    res.send(result);
})

module.exports = router;

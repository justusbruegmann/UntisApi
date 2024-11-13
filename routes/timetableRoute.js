const express = require('express');
const {fetchTimetable} = require("../services/fetchTimetable");
const router = express.Router();


router.get("/timetable",async (req,res) => {
    let studentId = req.query.studentId
    let cookies = req.header("Cookies")
    let result = await fetchTimetable(cookies,studentId)
    res.send(result);
})

module.exports = router;

const {searchSchoolname} = require("../services/getSchoolname")
const {login} = require("../services/getCookies")
const {fetchAbcences} = require("../services/fetchAbcences")
const {makeCookiesString} = require("../utils/utils");
const dotenv = require("dotenv").config()


test("get Abcences", async () => {
    await searchSchoolname(process.env.SCHOOLNAME)
    let data = await login(process.env.UNTISUSERNAME, process.env.PASSWORD)
    let result = await fetchAbcences("20240901","202401231", data.studentId,-1,makeCookiesString(data.cookies.JSESSIONID,data.cookies.schoolname,data.cookies.traceId))
    expect(typeof result).toBe("object")
},30*1000)


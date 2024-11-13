const {searchSchoolname} = require("../services/getSchoolname")
const {login} = require("../services/getCookies")
const {fetchHomework} = require("../services/fetchHomework")
const {makeCookiesString} = require("../utils/utils")
const dotenv = require("dotenv").config()

test("get Homework", async () => {

    await searchSchoolname(process.env.SCHOOLNAME)
    let data = await login(process.env.UNTISUSERNAME, process.env.PASSWORD)
    let result = await fetchHomework(20240501,20240231,makeCookiesString(data.cookies.JSESSIONID,data.cookies.schoolname,data.cookies.traceId))
    //console.log(result)
    expect(await result.status).toBe("success")
},30*1000)
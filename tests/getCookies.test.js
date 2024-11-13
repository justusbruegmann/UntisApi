const {login} = require("../services/getCookies");
const {searchSchoolname} = require("../services/getSchoolname");
const dotenv = require("dotenv").config()



test("get cookies succesfull", async () => {
    await searchSchoolname(process.env.SCHOOLNAME)
    let data = await login(process.env.UNTISUSERNAME, process.env.PASSWORD)
    expect(await data.status).toBe("success")
},30*1000)
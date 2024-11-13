const {searchSchoolname} = require("../services/getSchoolname")
const dotenv = require("dotenv").config()


test('seach',async () => {
    expect( await searchSchoolname(process.env.SCHOOLNAME)).toBe(process.env.SCHOOLNAME+"#")
},1000*20)
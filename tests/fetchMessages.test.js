const {searchSchoolname} = require("../services/getSchoolname")
const {login} = require("../services/getCookies")
const {fetchMessages,fetchMessage} = require("../services/fetchMessages")
const dotenv = require("dotenv").config()


test("get messages", async () => {
    await searchSchoolname(process.env.SCHOOLNAME)
    let data = await login(process.env.UNTISUSERNAME, process.env.PASSWORD)
    let result = await fetchMessages(data.token)
    //console.log(await result)
    expect(typeof result).toBe("object")
},30*1000)

test("get message", async () => {
    await searchSchoolname(process.env.SCHOOLNAME)
    let data = await login(process.env.UNTISUSERNAME, process.env.PASSWORD)
    let messages = await fetchMessages(data.token)
    //console.log( await messages.incomingMessages[0])
    let id = await messages.incomingMessages[1].id
    let message = await fetchMessage(id,data.token)
    expect(typeof await messages).toBe("object")
},30*1000)
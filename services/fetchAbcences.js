const utils = require("../utils/utils")
const {login} = require("../services/getCookies")

async function fetchAbcences(startDate = utils.getDate().replaceAll("-","") ,endDate,studentId,status= -1,cookies) {
    return new Promise(async (resolve) => {


        const url = "https://erato.webuntis.com/WebUntis/api/classreg/absences/students?startDate="+startDate+"&endDate="+endDate+"&studentId="+studentId+"&excuseStatusId="+status
        //have fun
        let headers = {
            Cookie: cookies
        }

        const respones = await fetch(url, {method: "GET",headers:headers})
        resolve(await respones.json())
    })
}

module.exports = {fetchAbcences}
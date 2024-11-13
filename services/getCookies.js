const puppeteer = require("puppeteer")
const {executablePath} = require("puppeteer");
const {getSchoolName} = require("../utils/utils")

async function login(username, password) {
    let browser;
    let cookies;
    try {
        if (getSchoolName() === "schoolname not set") {
            return "failed schoolname not set"
        }
        browser = await puppeteer.launch({headless: true, executablePath: executablePath(), args: ['--no-sandbox']});
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(60 * 1000);
        await page.goto("https://erato.webuntis.com/WebUntis/?school=" + getSchoolName() + "/basic/login");
        //login simulate a real user
        await page.keyboard.type(username);
        await page.keyboard.press('Tab');
        await page.keyboard.type(password);
        await page.keyboard.press('Enter');
        //retrieve cookies over google dev session because traceId is not an http cookie which you could get from the framework it self
        const client = await page.target().createCDPSession();
        cookies = (await client.send('Network.getAllCookies')).cookies;

        //filter cookies to get them in an right format
        let sessionid = cookies.filter((cookie) => cookie.name === 'JSESSIONID');
        let school = cookies.filter((cookie) => cookie.name === 'schoolname');
        let traceId = cookies.filter((cookie) => cookie.name === 'traceId');
        cookies = {
            "JSESSIONID": sessionid[0].value,
            "schoolname": school[0].value,
            "traceId": traceId[0].value
        }
        //wait if the login is succesful
        await page.waitForNavigation()
        await page.waitForNetworkIdle()
        let bearerToken = await page.evaluate(() => {
            return localStorage.getItem("tokenString")
        })
        bearerToken = "Bearer " + bearerToken
        //console.log(bearerToken)
        //check if login was successful
        if (await page.title() === "WebUntis") {
            let studentId = await getStudentId(bearerToken)
            await browser.close()
            return {
                "status": "success",
                "cookies": cookies,
                "studentId": studentId,
                "token" : bearerToken
            }
        } else {
            await browser.close()
            return {
                "status": "failed",
                "statusCode": 400
            }
        }
    } catch (e) {

    }
}

async function getStudentId(token) {
    return new Promise((resolve) => {
        let result = 0
        let url = "https://erato.webuntis.com/WebUntis/api/rest/view/v1/app/data"

        let header = {
            "Authorization": token
        }
        // featch data from webuntis to get studentID
        fetch(url, {method: 'GET', headers: header}).then(res => {
            //console.log(res.json())
            return res.json()
        })
            .then(json => {
                //let temp = json.user.person.displayName
                result = json.user.person.id
                result = Object.keys(result)
                result = JSON.stringify(result)
                result = result.replace(/\D/g, "")
                result = Number(result)


                resolve(result);
            })
    })
}

module.exports = {login}
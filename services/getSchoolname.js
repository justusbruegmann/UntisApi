const puppeteer = require("puppeteer")
const {executablePath} = require("puppeteer");
const {setSchoolname} = require("../utils/utils")



async function  searchSchoolname(name) {
    let browser;
    try {
        browser = await puppeteer.launch({headless: "new", executablePath: executablePath(), args: ['--no-sandbox']})
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(60*1000);
        await page.goto("https://webuntis.com")
        await page.keyboard.type(name);
        await page.waitForNetworkIdle()
        await page.keyboard.press('Tab');
        await page.waitForNavigation();
        if (page.url() === "https://www.untis.at/de") {
            await browser.close()
            return "name not valid"
        } else {
            let temp =  page.url()
            temp = temp.split("?")
            temp = temp[1].split("/")
            temp = temp[0].split("=")
            setSchoolname(temp[1])
            await browser.close()
            return temp[1]
        }
    } catch (e) {
        console.log(e)
        throw new Error("scrape failed")
    }
}

module.exports = {searchSchoolname};
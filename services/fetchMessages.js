async function fetchMessages(token) {
    return new Promise(async (resolve) => {
        const url = "https://erato.webuntis.com/WebUntis/api/rest/view/v1/messages"

        let headers = {
            Authorization: token
        }

        const response = await fetch(url, {method: "GET", headers: headers})
        resolve(await response.json())
    })
}

async function fetchMessage(messageId, token) {
    return new Promise(async (resolve) => {
        const url = "\n" +
            "https://erato.webuntis.com/WebUntis/api/rest/view/v1/messages/" + messageId + "?contentAsHtml=true"

        let headers = {
            Authorization: token
        }

        const response = await fetch(url,{method : "GET", headers: headers})
        resolve(await response.json())
    })
}

module.exports = {fetchMessage,fetchMessages}
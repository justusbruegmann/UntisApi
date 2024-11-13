function fetchHomework(startdate, enddate, cookies) {
    return new Promise(async resolve => {
        let result;
        const url = "https://erato.webuntis.com/WebUntis/api/homeworks/lessons?startDate=" + startdate + "&endDate=" + enddate;

        let headers = {
            Cookie: cookies
        }

        const response =  await fetch(url, {method: "GET", headers: headers})
        const json = await response.json()
        result = {
            status: "success",
            data: {
                records: json.data.records,
                homeworks: json.data.homeworks,
                teachers: json.data.teachers
            }
        }
        if (typeof result === "undefined") {
            throw new Error("no data")
        } else {
            resolve(result)
        }
    })
}

module.exports = {fetchHomework}
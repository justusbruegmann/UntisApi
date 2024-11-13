let schoolName = "";
let isSet = false
function setSchoolname(name) {
    if(isSet !== true) {
        schoolName = name;
        isSet = true;
    } else {

    }
}

function getSchoolName() {
    if (schoolName === ""){
        return "schoolname not set";
    } else {
        return schoolName;
    }

}

function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    //console.error(yyyy+"-"+mm+"-"+dd)
    return yyyy+"-"+mm+"-"+dd
}

function makeCookiesString(jssessionid,schoolname,traceid) {
    return "JSESSIONID="+ jssessionid+";schoolname="+schoolname+";traceId="+traceid+";"
}

module.exports = {getSchoolName, setSchoolname,getDate,makeCookiesString}
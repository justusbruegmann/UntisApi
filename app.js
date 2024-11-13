const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const {searchSchoolname} = require("./services/getSchoolname")
const {getSchoolName} = require("./utils/utils");

//const {fetchService} = require("./utils/fetchService");
// declarerate users route
const usersRoute = require('./routes/loginRoute');
const homeworkRoute = require('./routes/homeworkRoute');
const timetableRoute = require('./routes/timetableRoute');
const abcencesRoute = require('./routes/abcencesRoute');
const messagesRoute = require('./routes/messagesRoute');


// activate the Users Route
app.use('/login', usersRoute);
app.use('/homework', homeworkRoute);
app.use('/timetable', timetableRoute);
app.use('/abcences', abcencesRoute);
app.use('/messages', messagesRoute);



app.get('/', (req, res) => {

    res.send('Hello World!');
});

app.get('/heartbeat',(req, res) => {
    res.sendStatus(200);
})

app.get('/getSchoolname', (req, res) => {
    const schoolname = getSchoolName();
    if ( schoolname === "schoolname not set") {
        res.send("schoolname not set");
    } else  {
        res.send(schoolname);
    }
})


app.listen(process.env.PORT, async () => {
    console.log(process.env.PORT)
    if (process.argv[2] == null) {
        console.error("You need to set an schoolname with --schoolname \"schoolname\"")
        process.exit(0)
    } else {
        await searchSchoolname(process.argv[2+1]);
    }
    //server
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});


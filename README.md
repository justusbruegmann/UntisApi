**Untis Api**\
This is a simple API for the Untis WebUntis API.\
It is written in Javascript with Express.js and it uses the puppeteer library to scrape the login from the WebUntis website.\
The API is able to be hosted easily on Docker with 2 set env variables.\
If u want to use the Tests u have to make more env variables.\
One ist Port: The port the API should run on.\
The other one is the schoolname which u would input on the WebUntis website.\

**Important**\
The API is not finished yet.\
it will get a lot of update like getting the timetable from other clases if u have the permission and everything else.
It is possible that the old endpoints will be removed and new ones will be added.\
I try to keep the API as simple as possible.\
and I will try to make it possible to use the API after updates without changing the code.\
you have to Put the schoolname as the 4th word in the args in the cmd line. \
example:\
```node app --schoolname "schoolname"```\

**Endpoints**\
The API hat 6 endpoints at the moment.\
1. /login/login\
   headers:\
      username: The username of the user\
      password: The password of the user
2. /messages/messages\
   headers:\
      token: The token u get from the login endpoint\
3. /messages/message\
   headers:\
      token: The token u get from the login endpoint\
      id: The id of the message u want to get
4. /timetable/timetable\
   headers:\
      studentid: The studentid of the student u want to get the timetable from\
      cookies: The cookies u get from the login endpoint
5. /homework/homework\
   headers:\
      studentid: The studentid of the student u want to get the homework from\
      cookies: The cookies u get from the login endpoint\
      enddate: The deadline of all of ur homework u want to get
6. /abcences/abcences\
   headers:\
      studentid: The studentid of the student u want to get the abcences from\
      cookies: The cookies u get from the login endpoint\
      startdate: The startdate of the abcences u want to get\
      enddate: The enddate of the abcences u want to get\
      status: The status of the abcences u want to get. like excused and not excused
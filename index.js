const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const backManager = require('./backend/server-js/back-manager');
const frontManager = require('./backend/server-js/front-manager');
const santitze = require('./backend/server-js/sanitizor');
const { sanitize } = require('./backend/server-js/sanitizor');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.all("/*", function(req, res, next){
    res.header('Content-Type', 'text/html');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
const port = 3000;


app.get('/data', (req, res)=>{
    
    let x = backManager.getTimetableData()
    let s = ''
    for (let i = 0; i < x.length; i++) {
        s += frontManager.putInTable(x[i]) 
        
    }
    res.json({"data": s})
    res.end()
});
app.get('/scddata', (req, res) =>{
    res.json({"data":frontManager.scdManage(backManager.scdData())})
    res.end()
});

app.post('/whatdoihavethisweek', (request, response) => {

    let name = santitze.sanitize(request.body.value);   
    let holder = frontManager.getWeeklyTable(backManager.getLongSchedules(name))
    
    response.json({"data":(holder)});
    //response.send('fdsa')
    response.end()
})

app.post('/createschedule', (request, response)=>{
    let name = santitze.sanitize(request.body.value)   //input
    let worked = backManager.createSchedule(name)
    if (worked) {
        response.json({"data": '<h1 id="search_box_header">Success<h1>'}); 
    } else {
        response.json({"data": '<h1 id="search_box_header">Error, Schedule already exists or bad input</h1>'});
    }
    response.end();
})

app.post('/addtoschedule', (request, response) =>{
    
    let worked = backManager.saveSchedule(santitze.sanitize(request.body.value1), santitze.sanitize(request.body.value2), santitze.sanitize(request.body.value3));   //input
    console.log("here")
    if (worked) {
        response.json({"data":'<h1 id="search_box_header">Success</h1>'});
    } else {
        response.json({"data":'<h1 id="search_box_header">Could not save to schedule.  Courses do not exist or bad input.</h1>'});

    }

    response.end()
});
app.post('/deleteschedule', (request, response) => {

    let worked = backManager.deleteSchedule(santitze.sanitize(request.body.value));    //input
    if (worked) {
        response.json({"data":'<h1 id="search_box_header">Succcess</h1>'});
    } else {
        response.json({"data":'<h1 id="search_box_header">No schedules to delete under that input</h1>'});
    }

    response.end()
});
app.post('/deleteschedules', (request, response) => {
    let worked = backManager.resetSchedules();
    if (worked) {
        response.json({"data":'<h1 id="search_box_header">Succcess</h1>'});
    } else {
        response.json({"data":'<h1 id="search_box_header">No schedules to delete</h1>'});
    }
    response.end()
});

app.post('/searchcoursecodes', (request, response) => {
    let input = santitze.sanitize(request.body.value)   //input
    results = backManager.courseCodes(input)
    response.json({"data":(frontManager.putArrayInTable(results))}); //add search box
    response.end()
});
app.listen(port);

console.log("Listening on port " + port)
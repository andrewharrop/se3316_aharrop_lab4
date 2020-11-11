const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const backManager = require('./backend/server-js/back-manager');
const frontManager = require('./backend/server-js/front-manager');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.all("/*", function(req, res, next){
    res.header('Content-Type', 'text/html');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


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
    name = request.body  
    console.log(name)

    //let name = sanitize.sanitize(request.body.schedule);   
    //let holder = frontManager.getWeeklyTable(backManager.getLongSchedules(name))
    
    //response.json({"data":frontManager.genericForm(frontManager.timeTableGeneratorSearch() +  holder)});
    response.json({"data":"fdsafdsafdsa"})
    response.end()
})
app.listen(3000);

console.log("Listening on port 3000")
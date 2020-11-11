const http = require('http');
const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');;


app.get('/data', (request, response)=>{
    response.send('works')
});

app.listen(3000);

console.log("Listening on port 3000")
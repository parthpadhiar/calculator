const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true})); //allows us to post nestedobject

app.get('/hello', (req, res) => {
    res.send("Hello world");
})

app.get('/', (req, res) => {
    res.sendFile((__dirname+'/index.html'))
})

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Summation is "+ result);
})

app.listen(3000, () => {
    console.log("Connected to port");
})

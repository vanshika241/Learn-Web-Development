console.log("Create HTTP Server");

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
//middleware
app.use(bodyParser.json())
app.post('/conversations',function(req,res){
    // res.send('<b> Write Something</b>')
    console.log("Routing request" , req.body);
    res.json({
    name :"Lavi",
    do : "coding ",
})

})
app.get('/', function(req, res) { // this run in backend logic
//   res.send('CodeVibes!')

res.send("<b> CodeVibes</b>")
})

app.listen(port)
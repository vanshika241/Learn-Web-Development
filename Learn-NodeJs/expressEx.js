console.log("Create HTTP Server");
const express = require('express');
const app = express();

function calculateSum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
       ans += i;
    }
    return ans;
}
app.get('/',function(req,res){
    const n = req.query.n; // give number of times visit
    const ans = calculateSum(n);
    res.send(ans.toString()); // send 
})

app.listen(3000) // decide address of link
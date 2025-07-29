
const fs = require('fs');

console.log("Start readfile");
fs.readFile("AdvNotes.txt","utf-8",(err,data)=>{
    console.log("Inside readfile dunction");
    console.log(data);
});
console.log("Outside readfile");

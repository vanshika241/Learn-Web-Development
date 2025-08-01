console.log("Craete a kidney hospital room");

const express = require('express');
const app = express()

var users = [
    {
        name : "John",
        kidneys : [{
            healthy : false
        }]
    }

]
app.use(express.json())
app.get('/',function(req,res){
   // return how many kidneys and how many are healthy

   const johnkidneys = users[0].kidneys
   const numberOfKidneys = johnkidneys.length
   let numberHealthyKidneys = 0;
   for(let i=0;i<numberOfKidneys;i++){
     if (johnkidneys[i].healthy === true) {
        numberHealthyKidneys++;
     }
   }
   const numberUnhealthyKidneys = numberOfKidneys - numberHealthyKidneys;
   res.json({
    numberOfKidneys,
    numberHealthyKidneys,
    numberUnhealthyKidneys
   })


})

app.post('/',function(req,res){
    //user can add kidneys 
    //user send data in the body 
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push(
        {
            healthy : isHealthy
        }
    )
    res.json({
        msg : "DONE"
    })
})

app.put('/',function(req,res){
   for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
   }
   res.json({})
})

app.delete('/',function(req,res){
    const newKidneys = [];
    if(edgeCase()){
     for(let i=0;i<users[0].kidneys.length;i++){
       if( users[0].kidneys[i].healthy === true){
          newKidneys.push({
            healthy:true
          })
       }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : "DONE"
    })
    }
    else{
        res.status(411).json({
            msg : "You have no bad kidneys"
        })
    }
    
})

function edgeCase(){
    let atleastOneUnHealth = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnHealth = true;
        }
    }
    return atleastOneUnHealth;
}

app.listen(3000)


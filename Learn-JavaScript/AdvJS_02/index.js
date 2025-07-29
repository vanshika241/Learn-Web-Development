
//Callbacks 
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofInput(a,b,callbackFunc){
    let cal1 = callbackFunc(a);
    let cal2 = callbackFunc(b);
    return cal1+cal2;
}

console.log(sumofInput(2,3,square));
console.log(sumofInput(2,3,cube));

//Asynchronous Function
setTimeout(()=>{
    console.log("Hello CodeVibes");
},2000)
console.log("Hii There");

//reading file

//Promises
//Without promise - uses callback
function mySetTimeOut(fn, duration){
    setTimeout(fn,duration);
}

mySetTimeOut(function(){
    console.log("Hi there");
},1000)

//with promise
function myPromiseSetTimeOut(duration){
    let p = new Promise(function(resolve){
       setTimeout(resolve,duration)
    })
    return p;
}

const ans = myPromiseSetTimeOut(3000);
ans.then(function(){
    console.log("I am Promise");
})

function speakPromise(){
    let p = new Promise(function(resolve){
        resolve("Hello I am checking resolve working")
    })
    return p;
}

const pr = speakPromise();
console.log(pr);
pr.then(function(msg){
    console.log(msg);
});
//Modules section 

import eat from './schedule.js'
import {sleep} from './schedule.js'
import  {code as work} from './schedule.js'
import * as Schedule from './schedule.js'
import User from './userClass.js'
import {posts} from './posts.js'
console.log("Let's start");

//Storage - Web Storage API 
//Not part of DOM - refers to the window API 
//Available to JS via the gloabal variable - window 
//session storage not  remain same as we reload 
//session storage only store data in form of string
//
const myObj = {
    name : "CodeVibes",
    age : 21,
     arr :["Code" ,"Tea"  ,"Create"],
    printName:function(){
        console.log(`My name is ${this.name}`);
    }
}
const arr2 = ["Code" ,"Tea"  ,"Create"]

myObj.printName()
console.log(myObj.name);

// sessionStorage.setItem("myStore1",JSON.stringify(arr2));
// const get = sessionStorage.getItem("myStore1");
// console.log(get);
//myStore1 - Key
localStorage.setItem("myStore1",JSON.stringify(arr2));
const get = localStorage.getItem("myStore1");
 //remove item

//  localStorage.clear() // to clear everything - when more than 1 local data 
//  localStorage.removeItem("myStore1")
const key = localStorage.key(0)
console.log(get);
console.log(localStorage.length);
console.log(key);

localStorage.clear()

//JS Modules
console.log(eat());
console.log(sleep());
console.log(work());
console.log(Schedule.default()); // for all default function name not used it is Schdeule.default() - there is only one default


const me = new User("codeVibes@gmail.com","CodeVibes")
console.log(me);
console.log(me.greeting());

//Higher Order Functions
//forEach 
posts.forEach((post)=>{
    console.log(post);
})

//filter
const filterArray = posts.filter((post)=>{
    return post.userId === 1;
})
console.log(filterArray);

//map
const mapArray = filterArray.map((post) =>{
    return post.id*10;
})
console.log(mapArray);

//reduce
const reduceArray = mapArray.reduce((sum , post)=>{
     return sum + post;
})
console.log(reduceArray);

// const array = [1,2,3,4,5,6,7]
// array.forEach(()=>{
//     console.log("CodeVibes");
// })


//Callbacks 
//  function firstfunction(parameters , callback){
//     callback()
//  }

function calcValue(a,b,operation){
    operation(a,b);
}

function sum(a,b){
    console.log("Sum is ",a+b);
}

function minus(a,b){
    console.log("Difference is ",a-b);
}

function multiply(a,b){
    console.log("Multiplication is ",a*b);
}

function divide(a,b){
    console.log("Division  is ",a/b);
}


calcValue(4,8,sum)
calcValue(4,8,minus)
calcValue(8,4,multiply)
calcValue(9,2,divide)

//Callback Hell
function first(para, callback) {
    console.log("First function:", para);
    callback();
}

function second(para, callback) {
    console.log("Second function:", para);
    callback();
}

function third(para, callback) {
    console.log("Third function:", para);
    callback();
}

// Callback Hell Example
first("Step 1", function () {
    second("Step 2", function () {
        third("Step 3", function () {
            console.log("All steps completed.");
        });
    });
});


//Asynchronous Code - Which is not run immediately 

console.log(1);
setTimeout(()=>{
    console.log(2);
},0)
console.log(3);


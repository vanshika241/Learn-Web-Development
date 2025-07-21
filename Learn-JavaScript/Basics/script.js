
console.log("Hii , Let's Learn JavaScript");
console.log("Don't forget to enjoy");

//Strings 
let sub = "Mathematics" 
console.log(sub);
console.log(sub.length);
console.log(sub.charAt(3));
console.log(sub.indexOf('ma'));
console.log(sub.lastIndexOf('a'));
console.log(sub.slice(0,4));
console.log(sub.toUpperCase());
console.log(sub.toLowerCase());
console.log(sub.includes("max"));
console.log(sub.split("m"));

//Number 
let num = 56;
let strNum = "45.787";
let random = "23abc"
console.log(num);
console.log(typeof num);
console.log(num == "56" );
console.log(num === "56");
console.log( typeof Number(strNum));
console.log(Number(random));
console.log(Number(true));
console.log(Number.parseInt(strNum));
console.log(Number.parseFloat(num));
console.log(Number.parseInt(random));
console.log(56.789.toFixed(2));
console.log(Number.isInteger(num));

// Math Properties
console.log(Math.PI);
console.log(Math.trunc(7.89)); // 7
console.log(Math.round(7.89)); // 8
console.log(Math.floor(7.89)); // 7
console.log(Math.ceil(7.89));//8
console.log(Math.pow(5,5)); // 3125
console.log(Math.min(3,6,4,8)); // 3
console.log(Math.max(3,6,4,8)); //8
console.log(Math.random());// gives number range from 0 to 1 0<n<1
//for particular range - Math.random()*maxrange + min- its floor - bcz integer - not ceil becase range is exclusive(10+1 == 11)
console.log(Math.floor(Math.random()*10+1));

// practice 
//Code Challenge #1 - Write JavaScript Code That Will Return a Random Letter From Your Name.
let username = "CodeVibes";
let len = username.length;
let randomNum = Math.floor(Math.random()*len); // not add + 1 bcz string start with 0
console.log(username.charAt(randomNum));

//If Statements
let order = "Veg Burger"
let customerBanned = true;
if(customerBanned){
    console.log(`No ${order} for you.`);
}
else if(order){
    console.log(`Here is your  ${order}`);
}
else{
    console.log(`Your order ${order} is not available , you can order some another.`);
}

//Code Challenge #2 - Write JavaScript Code That Will Return a result for Rock Paper Sccissors.
let playerOne = "paper"
let playerTwo = "scissors"
    if(playerOne === "rock"){
        if(playerTwo === "paper"){
            console.log("PlayerTwo wins");
        }
        else{
            console.log("PlayerOne wins");
        }
    }
    else if (playerOne === "scissors") {
        if(playerTwo === "rock"){
             console.log("PlayerTwo wins");
        }
        else{
            console.log("PlayerOne wins");
        }
    }
    else if(playerOne === "paper"){
        if(playerTwo === "scissors"){
             console.log("PlayerTwo wins");
        }
        else{
            console.log("PlayerOne wins");
        }
    }

//switch statements
let day = Math.floor(Math.random()*7 +1);
switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default:
      console.log("Invalid day number");
}

//Ternary Operator
let soup = "Tomato Soup"
let customerInValid = false;

let response = customerInValid ? "You are not allowed":soup
? "Your soup is ready":"Sorry ,soup is not available rn."

console.log(response);


//Taking input 
// alert("Do you want to proceeed ? Click ok")
// let res = confirm("Ok === True\nCancel === False")
// console.log(res);

// let uname = prompt("Enter your name")
// if(uname){
//     console.log(uname);
// }
// else{
//     console.log("You didn't enter your name");
// }<


//Loops
//while loops
// let number = 0;
// while(number<20){
//     console.log(number);
//     number++;
// }
// //do while
// let cnt = 50;
// do{
//     console.log(cnt);
//     cnt++;
// }while(cnt<=50)
// //for loop
// for(let i=0;i<10;i++){
//     console.log(`Hii ${i}`);
// }
// //break
// let name = "CodeVibes";
// let leng = name.length;
// let itr = 0;
// while(itr<leng){
//     if(itr == 4)break
//     console.log(name.charAt(leng));
//     itr++;
// }

// //continue;
// let j = 0;
// while (true) {
//     if(j == 3)continue;
//     if(j == 5)break;
//     console.log(`Hii from CodeVibes ${j}`);
//     j++;
// }

//Functions
function sum(a,b){ // declaration
    return a+b; //create
}
console.log(sum(6,7)); //calling

function getName(email){
    return email.slice(0,email.indexOf('@'));
}
console.log(getName("codevibes@getEmail.com"));

const formatName = (name)=>{
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName("codeVibes"));

//scope - let/var/const
var num1 = 34;
var num2 = 34; // redecalartion and reassign both can be done

let num6 = 56;
num6 = 90; // redecalartion not  but reassign  can be done

const num3 = 89; //redecalartion and reassign both can't be done 

{
    console.log(num1);
    console.log(num6);
    console.log(num3);
}

{
    var ans = 56;
    let ans2 = 53;
}
console.log(ans);
// console.log(ans2); // it gives error

function getNum(){

    let x  = 78;
    var y = 23;
    const z = 90;
    {
        console.table([x,y,z]);
    }
    {
        const d = 78;
        console.log(d);
    }
}
getNum()
//console.log(x); it gives error 

//Arrays
const arr = []; // zero based indexing
arr[0] = 10; // assign manually 
arr[1] = 12;
console.log(arr); // print arr in console
console.log(arr.length); // arr size
console.log(arr[arr.length-1]); // last element
arr.push(14);//add in last
arr.unshift(8) // add first
arr.pop() // remove from last
arr.shift() // remove from first
console.log(arr);
console.log(arr[0]);
// delete arr[1];  // here el del but indexing not change it put empty their
// console.log(arr[1]);
// console.log(arr);
arr.push(12);
arr.push(14)
console.log(arr);
console.log(arr.slice(0,2)); // 0 se 1 tak
arr.splice(2,2,16);// used to get , remove , replace 
console.log(arr);

console.log(arr.reverse()); // reverse the array
console.log(arr.join().split(",")); // arr to string and then string to array
console.log(arr);
const a = [1,2,3]
const b= [4,5,6]
const c= [7,8,9]
console.log(a.concat(b)); // 1 arrays concat
console.log([...a,...b,...c]); // more than 2 arrays concat

const combine =  [a,b,c] // Multi dimensionaly array - 2d
console.log(combine); 
console.log(combine[0][1]);






//Objects - Key value pair in curly braces

const myObj = {
    name:"CodeVibes",
    currYear:2025,
    hobbies:["Watching Movie","Coding","Sleep"],
    Skills :{
      DSA : "java",
      Webd: "Mern",
    },
    action:function(){
      return `My name is ${this.name} , My hobies are ${this.hobbies} and My skills are ${this.Skills.DSA} and ${this.Skills.Webd}`
    }
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj["currYear"]);
console.log(myObj.hobbies[0]);
console.log(myObj.Skills.DSA);
console.log(myObj.action());

const vehicle = {
    wheels : 4,
    sound : function(){
        return "Vhrooooom";
    }
}
console.log(vehicle);
const truck = Object.create(vehicle)
truck.doors = 4;
truck.seats = 2;
console.log(truck.wheels);

const bike = Object.create(vehicle)
bike.wheels = 2;
bike.sound = function(){
    return "Vhroom";
}
bike.seats = 2;
console.log(bike.wheels);

const myFav = {
    favActor : "Akshay Kumar",
    favFood : "Burger",
    favHobby : "Reading Story books",
    favSub : "Wed development",
    favColor : "grey",
}

console.log(Object.keys(myFav));
console.log(Object.values(myFav));

for(let fav in myFav){
    console.log(`My ${fav} is ${myFav[fav]}`);
}

delete myFav["favColor"]
console.log(myFav);
console.log(Object.hasOwnProperty("favColor"));

//destructuring 
// const { favSub : Study } = myFav;
// console.log(myFav["Study"]);
// console.log(myFav.Study);

function favMovie({favActor}){
    return `My fav movie of ${favActor} is Welcome`
}
console.log(favMovie(myFav));

//Classes
class Student{
    constructor(name , learn){
        this.name = name;
        this.learn = learn;
        this.cgpa = 0.00;
        this.coreSub= [];
    }
     cgpaDisplay(){
        return this.cgpa;
    }
     setCGPA(cg){
        this.cgpa = cg;
    }

    addCore(sub){
        this.coreSub.push(sub);
    }
    getCore(){
     return this.coreSub;
    }
    display(){
        console.log(`Hii , My name is ${this.name} and I am learning ${this.learn} and My CGPA is ${this.cgpa} and Core Subjects are ${this.coreSub}`);
    }
}

const stu1 = new Student("Vanshika","JavaScript");
stu1.setCGPA(8.75);
console.log("My CGPA is ", stu1.cgpaDisplay()
);
stu1.addCore("DBMS")
stu1.addCore("OS");
stu1.display();

//Parent child Classes
class Pizza {
    constructor(PizzaSize) {
        this.size = PizzaSize;
        this.crust = "original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
      this.crust = pizzaCrust;
    }
}

class SpecialPizza extends Pizza{
    constructor(PizzaSize){
        super(PizzaSize);
        this.type = "The Works"
    }
    slice(){
        console.log(`This is your ${this.size}${this.crust} ${this.type}`);
    }
}
const sp = new SpecialPizza("large");
sp.setCrust("medium")
sp.slice()

//factory function - for private variables - can not access outside this function
function pizzaFactory(PizzaSize){
    const crust = "medium"
    const size  = PizzaSize;
    return{
        bake: ()=> console.log(`Baking a ${crust} ${PizzaSize}`)
    }
}

const myPizza = pizzaFactory("large")
myPizza.bake()

class Burger{
    price = 99;
    fries = "yes";
    #type = "";
    #tomato = "yes";
    #cheese;
    constructor(burgerType,tomatoInc,cheeseInc){
        this.#type = burgerType;
        this.#tomato = tomatoInc
        this.#cheese = cheeseInc;
    }
    getPrice(){
        return this.price;
    }
    setFries(friesInc){
        this.fries = friesInc;
    }
    yourOrder(){
        console.log(`Your ${this.#type} Burger with ${this.fries} fries  and ${this.#cheese} Cheese , ${this.#tomato} tomato. And your price is ${this.price}`);
    }

}

const myBurger = new Burger("Veg","No", "No" );
const bhaiyaBurger = new Burger("Veg","No", "Yes" );

myBurger.yourOrder()
bhaiyaBurger.yourOrder()
// console.log(myBurger.tomato); - undefined private variable


//JSON - 
//JavaScript Object Notation
//JSON is a text format that is language independent
//JSON is use to send and recieve data
//Methods of object not passed
// JSON.stringify(obj) (send ) --> JSON.parse(obj)(receive)
const pen = {
    ink : "blue",
    type : ["Pilot","Doll pen","Golden"],
    write: function(){
        console.log(`I am ${this.ink} pen and my type is ${this.type}`);
    }

}
console.log(pen);
console.log(pen.ink);
console.log(pen.type);
console.log(pen.write());

const sendData = JSON.stringify(pen)
console.log(sendData);

const receiveData = JSON.parse(sendData)
console.log(receiveData); // method not send or recieve
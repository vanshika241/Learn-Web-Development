
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let sum =Number ( num1.value )+ Number(num2.value);
    document.getElementById("ans").textContent = sum;
})

let mode = document.getElementById("mode")
let light = true;
mode.addEventListener("click",()=>{
    if(light == true){
        document.querySelector("body").style.backgroundColor = "black"
        light = false;
    }
    else{
        document.querySelector("body").style.backgroundColor = "white"
        light = true;
    }
})



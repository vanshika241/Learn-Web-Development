const initApp =()=>{
    const get = document.querySelector("#intro")
console.log(get);
get.addEventListener("click",(evt)=>{
    console.log(evt.target);
})

let el = document.querySelector("h1")
console.log(el);
el.innerHTML = "Hii CodeVibes"
el.style.color= "red"
el.style.backgroundColor = "black"
el.style.fontSize = "30px"
el.style.lineHeight = "50px"


}
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
});

const body = document.querySelector("body")

const btn = document.querySelector("#change")
console.log(btn);
let light = true;
btn.addEventListener("click",(e)=>{
    if(light == true){
        body.style.backgroundColor = "black"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        body.style.color = "white"
        light = false;
    }
    else{
        body.style.backgroundColor = "white"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        body.style.color = "black"

        light = true;
    }
})


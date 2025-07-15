
let username;
// username = window.prompt("What is uour username?")
console.log("Your name is ",username);

document.getElementById("submit").onclick = function(){
    username = document.getElementById("name").value
    document.getElementById("username").textContent = `Hello ${username}`
}


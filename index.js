function myFunction(){
    var x = document.getElementById("myNav");
    if(x.className === "nav2"){
        x.className += "responsive";
    } else{
        x.className = "nav2"
    }
}

const input = document.querySelector("email")
const button = document.querySelector("button")
const buttonOn = document.querySelector("buttonOn")
const startBtn = document.querySelector("startBtn")
const startBtn2 = document.querySelector("startBtn2")
const startBtn3 = document.querySelector("startBtn3")
const box = document.querySelector("box")
const box2 = document.querySelector("box2")
const box3 = document.querySelector("box3")

button.addEventListener("click",handleClick)
function handleClick() {
    button.style.backgroundColor = "green";
    button.textContent = "success";
    alert("Welcome");
    input.style.backgroundColor = "green";
}
buttonOn.addEventListener("click", handleClickOn);
function handleClickOn(params) {
    buttonOn.textContent = "success";
    alert("You are welcome");
}
input.addEventListener("keydown", checkInput);
function checkInput() {
    button.style.backgroundColor = "green";
    button.textContent = "success";
}

startBtn.addEventListener("mouseover", handleBtn);
function handleBtn() {
    startBtn.style.backgroundColor = "green";
}
startBtn2.addEventListener("mouseover", handleBtn)
function handleBtn() {
    startBtn.style.backgroundColor = "green";
}

startBtn3.addEventListener("mouseover", handleBtn)
function handleBtn() {
    startBtn3.style.backgroundColor = "green";
}
box.addEventListener("mouseover", boxPage);
function boxpage() {
    box.style.height = "60px";
    box.style.width = "60px";
    box.style.backgroundColor = "yellow";
}
box2.addEventListener("mouseover", boxPage2);
function boxpage() {
    box.style.height = "60px";
    box.style.width = "60px";
    box.style.backgroundColor = "yellow";
}
box3.addEventListener("mouseover", boxPage3);
function boxpage() {
    box.style.height = "60px";
    box.style.width = "60px";
    box.style.backgroundColor = "yellow";
}





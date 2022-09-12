var page = document.getElementById("logo")
page.style.color = "red"
page.style.fontSize = "70px",page.style.textAlign = "center"
const form = document.myForm
const counter = document.getElementById("counter")
var initCount = localStorage.getItem("keyCounter")
var count = 0

counter.textContent = (`Click count: ${initCount}`)


function click(){
    count++
    counter.textContent = (`Click count: ${count}`)
    localStorage.setItem("keyCounter", count)
}
document.body.addEventListener("click", click)

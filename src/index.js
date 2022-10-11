let inputSearch = document.querySelector(".input1")
inputSearch.addEventListener("click", (e)=>{
    window.open("./shorts.html");



})

let short2 = document.querySelector(".short2")

short2.addEventListener("click", (e)=>{
    window.open("./shorts.html");



})
let short = document.querySelector(".short")

short.addEventListener("click", (e)=>{
    window.open("./shorts.html");



})
let short3 = document.querySelector(".short3")

short3.addEventListener("click", (e)=>{
    alert("Not found!!!")



})
let short4 = document.querySelector(".short4")

short4.addEventListener("click", (e)=>{
    alert("Not found!!!")



})
let btn5 = document.querySelector(".btn5")

btn5.addEventListener("click", (e)=>{
    window.open("./shorts.html");



})
let btn6 = document.querySelector(".btn6")

btn6.addEventListener("click", (e)=>{
    window.open("./shorts.html");



})









let g = /[^0-9]/gi;
let gg = /[\.]/gi;
let gy = /[\@]/gi;
let yy = /[^a-z\s]/gi
let email = document.querySelector(".email") 
let btnEmail = document.querySelector(".btn22")



















btnEmail.addEventListener("click", (e) => {
    if(gg.test(email.value) == true 
    && yy.test(email.value) == true  && gy.test(email.value) == true && g.test(email.value) == true){
        alert("Sent!!!")
        email.value = ""

}
})
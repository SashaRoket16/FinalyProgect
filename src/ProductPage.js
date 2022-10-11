import stars from "./stars-coments.js"//Код додавання коментів
stars()
import submit from "./submit-coments.js"
submit()
let sItem = localStorage.getItem('product');
let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let n1a = document.querySelector(".n1-a")
let n2a = document.querySelector(".n2-a")
let slider = document.querySelector(".slider")
let slider2 = document.querySelector(".slider2")

let g = /[^0-9]/gi;
let gg = /[\.]/gi;
let gy = /[\@]/gi;
let yy = /[^a-z\s]/gi
let email = document.querySelector(".email") 
let btnEmail = document.querySelector(".btn22")


let lItem =  JSON.parse(sItem)

//ім'я КОРОЧЕ ВСЕ ЗАПОВНЮЮ З БАЗИ ОБЄКТУ ЯКИЙ ПРИСЛАВ С ШОРТА
let nameProduct = document.createElement("div")
nameProduct.classList = "nameProd"
nameProduct.innerHTML = lItem[0].name;
document.querySelector(".home1").append(nameProduct)

let fotoProduct = document.querySelector(".src1")
fotoProduct.src =lItem[0].img;

let nameProductName = document.querySelector(".textjs-1")
nameProductName.innerHTML =lItem[0].name;

let priseProduct = document.querySelector(".textjs-3")
priseProduct.innerHTML =lItem[0].dol;

let colorProduct = document.querySelector(".src2")
colorProduct.src =lItem[0].color;

let titleCreateComents = document.querySelector(".titleCreateComents-2")
titleCreateComents.innerHTML =lItem[0].name;

n2.addEventListener("click", ()=>{
    n1.style.background = "#F1F1F1";
    n1.style.border = "1px solid #A04955"
    n1a.style.color = "#A04955";
    n2.style.background = "#A04955";
    n2a.style.color = "#F1F1F1";
    slider.style.display = "none"
    slider2.style.display = ""
  

})
n1.addEventListener("click", ()=>{
    n2.style.background = "#F1F1F1";
    n2.style.border = "1px solid #A04955"
    n2a.style.color = "#A04955";
    n1.style.background = "#A04955";
    n1a.style.color = "#F1F1F1";
    slider.style.display = ""
    slider2.style.display = "none"

})

btnEmail.addEventListener("click", (e) => {
    if(gg.test(email.value) == true && yy.test(email.value) == true  && gy.test(email.value) == true && g.test(email.value) == true){
        alert("Sent!!!")
        email.value = ""

}
})





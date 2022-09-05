let btn1 = document.querySelector("#imgW");
let rect1 = document.querySelector(".rect32-1")
let btn2 = document.querySelector(".imgW1");
let rect2 = document.querySelector(".rect32-2")
let btn3 = document.querySelector(".imgW3");
let rect3 = document.querySelector(".rect32-3")
let rect321 =  document.querySelector(".rect32--1")
let rect322 =  document.querySelector(".rect32--2")
let rect323 =  document.querySelector(".rect32--3")
let i = true

let  f = true;

let c4 = document.querySelector(".c4")

let ccrel = document.querySelector(".ccrel")
let crel = document.querySelector(".crel")

let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")

let n1a = document.querySelector(".n1-a")
let n2a = document.querySelector(".n2-a")

let rectt = document.querySelector(".rectt")

btn1.addEventListener("click", ()=>{
   
    console.log("knegjn")
    
    if (i == true){
        i = false
        rect321.style.height = "80px";
        btn1.src = "./img/Vector12.png";
        rect1.style.visibility = "hidden";
    }else{
        i = true
        rect321.style.height = "188px";
        btn1.src = "./img/Vector11.png";
        rect1.style.visibility = "visible";
    }
    
    
})
btn2.addEventListener("click", ()=>{
   
    console.log("knegjn")
    
    if (i == true){
        i = false
        rect322.style.height = "80px";
        btn2.src = "./img/Vector12.png";
        rect2.style.visibility = "hidden";
    }else{
        i = true
        rect322.style.height = "188px";
        btn2.src = "./img/Vector11.png";
        rect2.style.visibility = "visible";
    }

})
btn3.addEventListener("click", ()=>{
   
    console.log("knegjn")
    
    if (i == true){
        i = false
        rect323.style.height = "80px";
        btn3.src = "./img/Vector12.png";
        rect3.style.visibility = "hidden";
    }else{
        i = true
        rect323.style.height = "340px";
        btn3.src = "./img/Vector11.png";
        rect3.style.visibility = "visible";
    }  
})
let indexq




        //База даних
towar = [
   
        num = {
            name: "Sportif's Original Short",
            img: "./img/image10.png",
            color: "./img/image15.png",
            dol: "$67.00",
            colore :[ "brown", "gray", "blue", "white"]
        },
        num1 = {
            name: "Sportif's Hatteras Short",
            img: "./img/image12.png",
            color: "./img/image16.png",
            dol: "$54.99",
            colore :["brown", "gray", "blue", "white", "orange"]
        },
        num2 = {
            name: "Sportif's Tidewater Short",
            img: "./img/image13.png",
            color: "./img/image17.png",
            dol: "$54.99",
            colore :["green","brown", "gray", "blue", "white", "orange"]

        },
        num3 = {
            name: "Sportif's Lauderdale Short",
            img: "./img/image 14.png",
            color: "./img/image 18.png",
            dol: "$67.00",
            colore :["brown", "gray", "blue", "white", "orange"]
        },
        num4 = {
            
            name: "Captain's Short",
            img: "./img/image 20.png",
            color: "./img/image 21.png",
            dol: "$67.00",
            colore :["brown", "gray", "blue", "white"]
        },
        num5 = {
            name: "Galapagos Plain Short",
            img: "./img/image 24.png",
            color: "./img/image 25.png",
            dol: "$34.99",
            colore :["brown", "gray", "blue", "white", "orange"]
        },
        num6 = {
            name: "Galapagos Pleated Short",
            img: "./img/image 32.png",
            color: "./img/image 33.png",
            dol: "$34.99",
            colore :["brown", "gray", "blue", "white", "orange"]
        },
        num7 = {
            name: "Sportif's Tidewater Denim Cargo Short",
            img: "./img/image 34.png",
            color: "./img/image 35.png",
            dol: "$69.00",
            colore :[ "gray", "blue"]
        },
        num8 = {
            name: "Marchal's Hatteras Short",
            img: "./img/image 36.png",
            color: "./img/image 37.png",
            dol: "$40.99",
            colore :["green","brown", "gray", "blue", "white", "orange"]
        },
        num9 = {
            name: "Ecoths Ashcroft Short",
            img: "./img/image 44.png",
            color: "./img/image 41.png",
            dol: "$41.99",
            colore :["brown", "gray", "blue", "white", "orange"]
        },
        num10 = {
            name: "Ecoths Gannon Short",
            img: "./img/image 45.png",
            color: "./img/image 38.png",
            dol: "$42.99",
            colore :["gray", "blue"]
        },
       
       
    
];
    
let elm = [];












 let  divv1


for (let index = 0; index <=10; index ++) {
    let b =towar[index].colore
  let a =  b.map(function(item,index1){
    if (item == "green"){
        alert("gfg")
    }
    
  })

    console.log(a)
    divv1 = document.createElement("div")
    divv1.className = "crel";

    divv1.id = `g${index + 1}`
    divv1.innerHTML = `
    <img class="mrel" src="${towar[index].img}" alt="">
    <div class="rrel">${towar[index].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index + 1}`}">As low as <b>${towar[index].dol}</b></a>
    <img class="imgf" src="${towar[index].color}" alt="">
    <div class="divv" id ="${`r${index + 1}`}">
    <input type="button" class="intt" value="ADD TO CART">
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".ccrel").append(divv1)
    
    




 

}

//кнопки в низу 1 2 >
n2.addEventListener("click", ()=>{
    n1.style.background = "#F1F1F1";
    n1.style.border = "1px solid #A04955"
    n1a.style.color = "#A04955";
    n2.style.background = "#A04955";
    n2a.style.color = "#F1F1F1";
    ccrel.style.display = "none"

})
n1.addEventListener("click", ()=>{
    n2.style.background = "#F1F1F1";
    n2.style.border = "1px solid #A04955"
    n2a.style.color = "#A04955";
    n1.style.background = "#A04955";
    n1a.style.color = "#F1F1F1";
    ccrel.style.display = ""

})
let h
c4.addEventListener("click", ()=>{
    if(f == true){
        f=false
        
        .style.display = ""
    c4.style.border = "2px solid #000000"
    if ( h !=1){
        h = 1
        for (let index = 0; index <= elm.length-1; index++) {
    
            let  divv1 = document.createElement("div")
            divv1.className = "crel";
        
            divv1.id = `g${index + 1}`
            
          
            
                
                
                
                
            divv1.innerHTML = `
            <img class="mrel" src="${towar[elm[index]].img}" alt="">
            <div class="rrel">${towar[elm[index]].name}</div>
            <img class="lrel" src="./img/Star 1.png" alt="">
            <img class="lerel" src="./img/Star 1.png" alt="">
            <img class="lurel" src="./img/Star 1.png" alt="">
            <img class="lirel" src="./img/Star 1.png" alt="">
            <img class="larel" src="./img/Star 1.png" alt="">
            <a class = "tex" id ="${`t${index + 1}`}">As low as <b>${towar[elm[index]].dol}</b></a>
            <img class="imgf" src="${towar[elm[index]].color}" alt="">
            <div class="divv" id ="${`r${index + 1}`}">
            <input type="button" class="intt" value="ADD TO CART">
                <img class="imgr" src="./img/Vector1.png" alt="">
                
            </div>
            
            
            
            `
            document.querySelector(".rectt").append(divv1)}
    }

    
    }else{
        f=true
        c4.style.border = "none"
        
        divv1.style.display = "none"
    }
    


})


                
                
                
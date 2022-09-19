//import towar from "./towar.js";
towar= [
   
    {
        name: "Sportif's Original Short",
        img: "./img/image10.png",
        color: "./img/image15.png",
        dol: "$67.00",
        colore :[ "brown", "gray", "blue", "white"],
        size:["30","32","34","36","38","40","42","44","46"],
        bottoms:["Short"]
    },
    {
        name: "Sportif's Hatteras Short",
        img: "./img/image12.png",
        color: "./img/image16.png",
        dol: "$54.99",
        colore :["brown", "gray", "blue", "white", "orange"],
        size:["30","32","34","36","38","40","42","44","46"],
        bottoms:["Short", "Cargo"]
    },
    {
        name: "Sportif's Tidewater Short",
        img: "./img/image13.png",
        color: "./img/image17.png",
        dol: "$54.99",
        colore :["green","brown", "gray", "blue", "white", "orange"],
        size:["40","42","44","46"],
        bottoms:["Short","Plain Front"]

    },
   {
        name: "Sportif's Lauderdale Short",
        img: "./img/image 14.png",
        color: "./img/image 18.png",
        dol: "$67.00",
        colore :["brown", "gray", "blue", "white", "orange"],
        size:["30","32","34","36","38","40","42","44","46"],
        bottoms:["Denim Jean"]

    },
   {
        
        name: "Captain's Short",
        img: "./img/image 20.png",
        color: "./img/image 21.png",
        dol: "$67.00",
        colore :["brown", "gray", "blue", "white"],
        size:["30","32","34","36","38","40","42","44","46"],
        bottoms:["Chino"]
    },
    {
        name: "Galapagos Plain Short",
        img: "./img/image 24.png",
        color: "./img/image 25.png",
        dol: "$34.99",
        colore :["brown","gray","blue","white","orange"],
        size:["30","32","34","36","38","40","42","44","46"],
        bottoms:["Chino"]
    },
     {
        name: "Galapagos Pleated Short",
        img: "./img/image 32.png",
        color: "./img/image 33.png",
        dol: "$34.99",
        colore :["brown", "gray", "blue", "white", "orange"],
        size:["40","42","44","46"],
        bottoms:["Swim"]
    },
    {
        name: "Sportif's Tidewater Denim Cargo Short",
        img: "./img/image 34.png",
        color: "./img/image 35.png",
        dol: "$69.00",
        colore :[ "black", "blue"],
        size:["30","32","34","36","42","44","46"],
        bottoms:["Pleated Front"]
    },
    {
        name: "Marchal's Hatteras Short",
        img: "./img/image 36.png",
        color: "./img/image 37.png",
        dol: "$40.99",
        colore :["green","brown", "gray", "blue", "white", "orange"],
        size:["30","32","40","42","44","46"],
        bottoms:["Pleated Front"]
    },
    {
        name: "Ecoths Ashcroft Short",
        img: "./img/image 44.png",
        color: "./img/image 41.png",
        dol: "$41.99",
        colore :["brown", "gray", "blue", "white", "orange"],
        size:["40","42","44","46"],
        bottoms:["Plain Front",  "Pleated Front"]
    },
    {
        name: "Ecoths Gannon Short",
        img: "./img/image 45.png",
        color: "./img/image 38.png",
        dol: "$42.99",
        colore :["gray", "blue"],
        size:["30","32","38","40","42","44","46"],
        bottoms:["Short","Chino"]
    },
   
   

];



let rectNum = document.querySelector(".rectNam")
let btn1 = document.querySelector("#imgW");
let rect1 = document.querySelector(".rect32-1")
let btn2 = document.querySelector(".imgW1");
let rect2 = document.querySelector(".rect32-2")
let btn3 = document.querySelector(".imgW3");
let rect3 = document.querySelector(".rect32-3")
let rect321 =  document.querySelector(".rect32--1")
let rect322 =  document.querySelector(".rect32--2")
let rect323 =  document.querySelector(".rect32--3")
let rectc1 = document.querySelector(".rect-c1")
let rectt322 = document.querySelector(".rect32-2")
let size = document.querySelector(".rect32-1")
let checkedBox = document.querySelector(".rect32-3")
let botms = document.querySelector(".bottoms")

let i = true

let  f = true;
//кнопки кольорів
let c4 = document.querySelector("#c4-4")
let c1 = document.querySelector("#c1-1")
let c2 = document.querySelector("#c2-2")
let c3 = document.querySelector("#c3-3")
let c5 = document.querySelector("#c5-5")
let c6 = document.querySelector("#c6-6")
let c7 = document.querySelector("#c7-7")
//Кнопки розмірів
let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let a3 = document.querySelector("#a3")
let a4 = document.querySelector("#a4")
let a5 = document.querySelector("#a5")
let a6 = document.querySelector("#a6")
let a7 = document.querySelector("#a7")
let a8 = document.querySelector("#a8")
let a9 = document.querySelector("#a9")
// bottoms кнопки
let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let b4 = document.querySelector("#b4")
let b5 = document.querySelector("#b5")
let b6 = document.querySelector("#b6")
let b7 = document.querySelector("#b7")

let h5 = true
let ccrel = document.querySelector(".ccrel")
let crel = document.querySelector(".crel")
let crel3 = document.querySelector(".crel3")

let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let notFound = document.querySelector(".notFound")
let n1a = document.querySelector(".n1-a")
let n2a = document.querySelector(".n2-a")

let rectt = document.querySelector(".rectt")
let placeHolder2 = document.querySelector(".text1")
let search2 = document.querySelector(".search")
let filterFanP


function deleteItemsP() {
    let deleteElement = search2.querySelectorAll('div');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }



placeHolder2.addEventListener("input", (e) => {
    if(placeHolder2.value != ""){
    
    
    
    filterFanP = towar.filter( (event) => {
        for (let index = 0; index < 11; index++) {
            
            if(event.bottoms[index] == e.target.value){
                return e}
            if(event.name[index] == e.target.value){
                    return e}
            if(event.colore[index] == e.target.value){
                    return e}
            if(event.size[index] == e.target.value){
                    return e}
            if(event.dol[index] == e.target.value){
                            return e
                     
        }
        }})
        
        if(filterFanP !=""){
        h5 = true
        ccrel.style.display = "none"
        rectt.style.display = "none"
        rectc1.style.display = "none"
        rectNum.style.display = "none"
        botms.style.display = "none"
        search2.style.display = ""
        notFound.style.display = "none"
        deleteItemsP()
    
                
                if(h5 == true){
                    console.log("dfg")
                    h5 = false  
                    for (let index1 = 0; index1 <=filterFanP.length-1; index1 ++) {
                        searchDiv = document.createElement("div")
                        searchDiv.className = "crel3";
            
                        searchDiv.id = `g${index1 + 1}`
    
                        searchDiv.innerHTML = `
        <img class="mrel" src="${filterFanP[index1].img}" alt="">
        <div class="rrel">${filterFanP[index1].name}</div>
        <img class="lrel" src="./img/Star 1.png" alt="">
        <img class="lerel" src="./img/Star 1.png" alt="">
        <img class="lurel" src="./img/Star 1.png" alt="">
        <img class="lirel" src="./img/Star 1.png" alt="">
        <img class="larel" src="./img/Star 1.png" alt="">
        <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanP[index1].dol}</b></a>
        <img class="imgf" src="${filterFanP[index1].color}" alt="">
        <div class="divv" id ="${`r${index1 + 1}`}">
        <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
            <img class="imgr" src="./img/Vector1.png" alt="">
            
        </div>
        
        
        
        `
        document.querySelector(".search").append(searchDiv)
        }}}else{
                h5 = true
                
                ccrel.style.display = "none"
                search2.style.display = "none"
                botms.style.display = "none"
                rectt.style.display = "none"
                rectc1.style.display = "none"
                rectNum.style.display = "none"
                notFound.style.display = ""
        
}}else{
    ccrel.style.display = ""
    search2.style.display = "none"
    botms.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    notFound.style.display = "none"



}})

    
    




















function deleteItems() {
    let deleteElement = rectc1.querySelectorAll('div');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }
  function deleteItemsN() {
    let deleteElement = rectNum.querySelectorAll('div');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }
  function deleteItemsB() {
    let deleteElement = botms.querySelectorAll('div');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }




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




let h3 = true
let sizeN
let filterFanN
let filterFanB
let h4 = true
let index1
let colors
let filterFan
let h2 = true
let h1 = true
//Кнопки кольорів
rectt322.addEventListener("click", (e)=>{
    let divv3 = document.createElement("div")
    
    
    if(e.target.className == "c4"){
        
        if(c4.checked){
        colors = "green"
        filterFan = towar.filter( (e) => {
            for (let index = 0; index < 6; index++) {
                
                if(e.colore[index] == colors){
                return e
            }
            }
            })
            ccrel.style.display = "none"
            rectt.style.display = "";
            rectc1.style.display = "none"
        

        if(h1 == true){
            h1 = false  
            for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
   



        let divv2 = document.createElement("div")
            divv2.className = "crel2";
        
            divv2.id = `g${index1 + 1}`

        divv2.innerHTML = `
    <img class="mrel" src="${filterFan[index1].img}" alt="">
    <div class="rrel">${filterFan[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex"  id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
    <img class="imgf" src="${filterFan[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href=""><input type="button" class="intt" value="ADD TO CART"></a> 
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    `
    document.querySelector(".rectt").append(divv2)
    }}}else{
        rectt.style.display = "none" 
        
        ccrel.style.display = ""
        
    }} 
    if(e.target.className == "c1"){
        
        if(c1.checked){
            colors = "black"
            filterFan = towar.filter( (e) => {
                for (let index = 0; index < 6; index++) {
                    
                    if(e.colore[index] == colors){
                    return e
                }
                }
                })
                deleteItems()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = ""
            

            
            if(h2 == true){
                h2 = false  
                for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
                    divv3 = document.createElement("div")
            divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`

        divv3.innerHTML = `
    <img class="mrel" src="${filterFan[index1].img}" alt="">
    <div class="rrel">${filterFan[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
    <img class="imgf" src="${filterFan[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rect-c1").append(divv3)
    
    
    

            
            



                }}}else{
                    h2 = true

                    ccrel.style.display = "";
                    divv3.innerHTML = ""
            rectt.style.display = "none"
            rectc1.style.display = "none"


        
    }}
    if(e.target.className == "c2"){
        
        if(c2.checked){
            colors = "brown"
            filterFan = towar.filter( (e) => {
                for (let index = 0; index < 6; index++) {
                    
                    if(e.colore[index] == colors){
                    return e
                }
                }
                })
            
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = ""
            deleteItems()
            ;
            
            if(h2 == true){
                h2 = false  
                for (index1 = 0; index1 <=filterFan.length-1; index1 ++) {
                    divv3 = document.createElement("div")
                    divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`
                    
            

        divv3.innerHTML = `
    <img class="mrel" src="${filterFan[index1].img}" alt="">
    <div class="rrel">${filterFan[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
    <img class="imgf" src="${filterFan[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART" href = "./ProductPage.html"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rect-c1").append(divv3)
    
    
    

            
            



                }}}else{
                    h2 = true
                    ccrel.style.display = "";
                    divv3.innerHTML = ``
            rectt.style.display = "none"
            rectc1.style.display = "none"




}}
if(e.target.className == "c3"){
        
    if(c3.checked){
        colors = "blue"
        filterFan = towar.filter( (e) => {
            for (let index = 0; index < 6; index++) {
                
                if(e.colore[index] == colors){
                return e
            }
            }
            })
        deleteItems()
        ccrel.style.display = "none"
        rectt.style.display = "none"
        
        rectc1.style.display = ""
        
       
        if(h2 == true){
            h2 = false  
            for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
                divv3 = document.createElement("div")
            divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`
                    
            

            divv3.innerHTML = `
            <img class="mrel" src="${filterFan[index1].img}" alt="">
            <div class="rrel">${filterFan[index1].name}</div>
            <img class="lrel" src="./img/Star 1.png" alt="">
            <img class="lerel" src="./img/Star 1.png" alt="">
            <img class="lurel" src="./img/Star 1.png" alt="">
            <img class="lirel" src="./img/Star 1.png" alt="">
            <img class="larel" src="./img/Star 1.png" alt="">
            <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
            <img class="imgf" src="${filterFan[index1].color}" alt="">
            <div class="divv" id ="${`r${index1 + 1}`}">
            <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART" href = "./ProductPage.html"></a>
                <img class="imgr" src="./img/Vector1.png" alt="">
                
            </div>
            `
            document.querySelector(".rect-c1").append(divv3)




        
        



            }}}else{
                ccrel.style.display = "";
                divv3.innerHTML = ``
                h2 = true;
        rectt.style.display = "none"
        rectc1.style.display = "none"




}}
if(e.target.className == "c5"){
        
    if(c5.checked){
        colors = "gray"
        filterFan = towar.filter( (e) => {
            for (let index = 0; index < 6; index++) {
                
                if(e.colore[index] == colors){
                return e
            }
            }
            })
            deleteItems()
        ccrel.style.display = "none"
        rectt.style.display = "none"
        divv3.innerHTML = '';
        rectc1.style.display = ""
        
       
        if(h2 == true){
            h2 = false  
            for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
            divv3 = document.createElement("div")
            divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`
                    
            

            divv3.innerHTML = `
            <img class="mrel" src="${filterFan[index1].img}" alt="">
            <div class="rrel">${filterFan[index1].name}</div>
            <img class="lrel" src="./img/Star 1.png" alt="">
            <img class="lerel" src="./img/Star 1.png" alt="">
            <img class="lurel" src="./img/Star 1.png" alt="">
            <img class="lirel" src="./img/Star 1.png" alt="">
            <img class="larel" src="./img/Star 1.png" alt="">
            <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
            <img class="imgf" src="${filterFan[index1].color}" alt="">
            <div class="divv" id ="${`r${index1 + 1}`}">
            <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART" href = "./ProductPage.html"></a>
                <img class="imgr" src="./img/Vector1.png" alt="">
                
            </div>
            `
            document.querySelector(".rect-c1").append(divv3)




        
        



            }}}else{
                ccrel.style.display = "";
                divv3.innerHTML = ``;
                h2 = true;
        rectt.style.display = "none"
        rectc1.style.display = "none"




}}
if(e.target.className == "c6"){
        
    if(c6.checked){
        colors = "orange"
        filterFan = towar.filter( (e) => {
            for (let index = 0; index < 6; index++) {
                
                if(e.colore[index] == colors){
                return e
            }
            }
            })
        ccrel.style.display = "none"
        rectt.style.display = "none"
        divv3.innerHTML = '';
        deleteItems()
        rectc1.style.display = ""
        
       
        if(h2 == true){
            h2 = false  
            for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
            divv3 = document.createElement("div")
            divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`
                    
            

            divv3.innerHTML = `
            <img class="mrel" src="${filterFan[index1].img}" alt="">
            <div class="rrel">${filterFan[index1].name}</div>
            <img class="lrel" src="./img/Star 1.png" alt="">
            <img class="lerel" src="./img/Star 1.png" alt="">
            <img class="lurel" src="./img/Star 1.png" alt="">
            <img class="lirel" src="./img/Star 1.png" alt="">
            <img class="larel" src="./img/Star 1.png" alt="">
            <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
            <img class="imgf" src="${filterFan[index1].color}" alt="">
            <div class="divv" id ="${`r${index1 + 1}`}">
            <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART" href = "./ProductPage.html"></a>
                <img class="imgr" src="./img/Vector1.png" alt="">
                
            </div>
            `
            document.querySelector(".rect-c1").append(divv3)




        
        



            }}}else{
                ccrel.style.display = "";
                divv3.innerHTML = ``;
                h2 = true;
        rectt.style.display = "none"
        rectc1.style.display = "none"




}}
if(e.target.className == "c7"){
        
    if(c7.checked){
        colors = "white"
        filterFan = towar.filter( (e) => {
            for (let index = 0; index < 6; index++) {
                
                if(e.colore[index] == colors){
                return e
            }
            }
            })
        ccrel.style.display = "none"
        rectt.style.display = "none"
        divv3.innerHTML = '';
        deleteItems()
        rectc1.style.display = ""
        
       
        if(h2 == true){
            h2 = false  
            for (let index1 = 0; index1 <=filterFan.length-1; index1 ++) {
            divv3 = document.createElement("div")
            divv3.className = "crel3";
        
            divv3.id = `g${index1 + 1}`
                    
            

            divv3.innerHTML = `
            <img class="mrel" src="${filterFan[index1].img}" alt="">
            <div class="rrel">${filterFan[index1].name}</div>
            <img class="lrel" src="./img/Star 1.png" alt="">
            <img class="lerel" src="./img/Star 1.png" alt="">
            <img class="lurel" src="./img/Star 1.png" alt="">
            <img class="lirel" src="./img/Star 1.png" alt="">
            <img class="larel" src="./img/Star 1.png" alt="">
            <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFan[index1].dol}</b></a>
            <img class="imgf" src="${filterFan[index1].color}" alt="">
            <div class="divv" id ="${`r${index1 + 1}`}">
            <a href="./ProductPage.html"><input type="button" class="intt" href = "./ProductPage.html" value="ADD TO CART"></a>
                <img class="imgr" src="./img/Vector1.png" alt="">
                
            </div>
            `
            document.querySelector(".rect-c1").append(divv3)




        
        



            }}}else{
                ccrel.style.display = "";
                divv3.innerHTML = ``;
                h2 = true;
        rectt.style.display = "none"
        rectc1.style.display = "none"




}}

})
size.addEventListener("click", (e) =>{
    let numDiv = document.createElement("div")
    console.log(e.target.id)
    if(e.target.id == "a1"){
    if (a1.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "30"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = ""
    deleteItemsN()

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}
if(e.target.id == "a2"){
    if (a2.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "32"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a3"){
    if (a3.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "34"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a4"){
    if (a4.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "36"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a5"){
    if (a5.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "38"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a6"){
    if (a6.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "40"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a7"){
    if (a7.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "42"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a8"){
    if (a8.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "44"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "a9"){
    if (a9.checked){
        
    filterFanN = towar.filter( (e) => {
        for (let index = 0; index < 8; index++) {
            
            if(e.size[index] == "46"){
                return e
                 
        }
        }
        })
    
    

            
            deleteItemsN()
            ccrel.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = ""
            

            
            if(h3 == true){
                h3 = false  
                for (let index1 = 0; index1 <=filterFanN.length-1; index1 ++) {
                    numDiv = document.createElement("div")
                    numDiv.className = "crel3";
        
                    numDiv.id = `g${index1 + 1}`

                    numDiv.innerHTML = `
    <img class="mrel" src="${filterFanN[index1].img}" alt="">
    <div class="rrel">${filterFanN[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanN[index1].dol}</b></a>
    <img class="imgf" src="${filterFanN[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".rectNam").append(numDiv)
    }}}else{
            h3 = true
            
            ccrel.style.display = ""

            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
})
checkedBox.addEventListener("click", (e) =>{
    let botDiv = document.createElement("div")
    
    if(e.target.id == "b1"){
    if (b1.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Short"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b2"){
    if (b2.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Cargo"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b3"){
    if (b3.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Plain Front"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b4"){
    if (b4.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Denim Jean"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b5"){
    if (b5.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Chino"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b6"){
    if (b6.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Swim"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
if(e.target.id == "b7"){
    if (b7.checked){
        
    filterFanB = towar.filter( (e) => {
        for (let index = 0; index < 6; index++) {
            
            if(e.bottoms[index] == "Pleated Front"){
                return e
                 
        }
        }
        })
    
    

            
           

    ccrel.style.display = "none"
    rectt.style.display = "none"
    rectc1.style.display = "none"
    rectNum.style.display = "none"
    botms.style.display = ""
    deleteItemsB()

            
            if(h4 == true){
                h4 = false  
                for (let index1 = 0; index1 <=filterFanB.length-1; index1 ++) {
                    botDiv = document.createElement("div")
                    botDiv.className = "crel3";
        
                    botDiv.id = `g${index1 + 1}`

                    botDiv.innerHTML = `
    <img class="mrel" src="${filterFanB[index1].img}" alt="">
    <div class="rrel">${filterFanB[index1].name}</div>
    <img class="lrel" src="./img/Star 1.png" alt="">
    <img class="lerel" src="./img/Star 1.png" alt="">
    <img class="lurel" src="./img/Star 1.png" alt="">
    <img class="lirel" src="./img/Star 1.png" alt="">
    <img class="larel" src="./img/Star 1.png" alt="">
    <a class = "tex" id ="${`t${index1 + 1}`}">As low as <b>${filterFanB[index1].dol}</b></a>
    <img class="imgf" src="${filterFanB[index1].color}" alt="">
    <div class="divv" id ="${`r${index1 + 1}`}">
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART"></a>
        <img class="imgr" src="./img/Vector1.png" alt="">
        
    </div>
    
    
    
    `
    document.querySelector(".bottoms").append(botDiv)
    }}}else{
            h4 = true
            
            ccrel.style.display = ""
            botms.style.display = "none"
            rectt.style.display = "none"
            rectc1.style.display = "none"
            rectNum.style.display = "none"
    

}}
})




//Відрисовка елементів при завантажені сторінки.
 let  divv1


for (let index = 0; index <=10; index ++) {
   


    notFound.style.display = "none"
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
    <a href="./ProductPage.html"><input type="button" class="intt" value="ADD TO CART" href = "./ProductPage.html"></a>
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
    }
    
   
})


                
                
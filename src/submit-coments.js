let InputName = document.querySelector(".InputName")
let InputSumary = document.querySelector(".InputSumary")
let InputRevie = document.querySelector(".InputRevie")
let BtnSub =  document.querySelector(".submit")

let starOv1 = document.querySelector("#ov1")
let starOv2 = document.querySelector("#ov2")
let starOv3 = document.querySelector("#ov3")
let starOv4 = document.querySelector("#ov4")
let starOv5 = document.querySelector("#ov5")
let starco1 = document.querySelector("#co1")
let starco2 = document.querySelector("#co2")
let starco3 = document.querySelector("#co3")
let starco4 = document.querySelector("#co4")
let starco5 = document.querySelector("#co5")
let starq1 = document.querySelector("#q1")
let starq2 = document.querySelector("#q2")
let starq3 = document.querySelector("#q3")
let starq4 = document.querySelector("#q4")
let starq5 = document.querySelector("#q5")
let starf1 = document.querySelector("#fit1")
let starf2 = document.querySelector("#fit2")
let starf3 = document.querySelector("#fit3")
let starf4 = document.querySelector("#fit4")
let starf5 = document.querySelector("#fit5")

let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let n1a = document.querySelector(".n1-a")
let n2a = document.querySelector(".n2-a")



class Submit{
    constructor (name, summary, review,Ov1,Ov2,Ov3,Ov4,Ov5,co1,co2,co3,co4,co5,q1,q2,q3,q4,q5,f1,f2,f3,f4,f5) {
        this.name = name;
        this.summary = summary;
        this.review = review;
        this.Ov1 = Ov1;
        this.Ov2 = Ov2;
        this.Ov3 = Ov3;
        this.Ov4 = Ov4;
        this.Ov5 = Ov5;
        this.co1 = co1;
        this.co2 = co2;
        this.co3 = co3;
        this.co4 = co4;
        this.co5 = co5;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.f1 = f1;
        this.f2 = f2;
        this.f3 = f3;
        this.f4 = f4;
        this.f5 = f5;
        
   
    
    }}
function submit() {
    
let subbmit = [];




BtnSub.addEventListener("click", (e) => {
   
    
    
    
    
    if(InputName.value != "" && InputSumary.value != "" && InputRevie.value != "" ){ 
        subbmit.splice(0,1)
        subbmit.push( new Submit(
    InputName.value,
    InputSumary.value,
    InputRevie.value,
    starOv1.src ,
 starOv2.src ,
 starOv3.src ,
 starOv4.src ,
 starOv5.src ,
 starco1.src, 
 starco2.src,
 starco3.src,
 starco4.src,
 starco5.src,
 starq1.src,
 starq2.src,
 starq3.src,
 starq4.src,
 starq5.src ,
 starf1.src, 
 starf2.src, 
 starf3.src,
 starf4.src,
 starf5.src, 
   )      
   )
   let slider = document.querySelector(".slider")
let slider2 = document.querySelector(".slider2")

   InputName.value   = "";
   InputSumary.value = "";
   InputRevie.value = ""
   starOv1.src = "./img/Star4.png"
   starOv2.src  = "./img/Star4.png"
   starOv3.src  = "./img/Star4.png"
   starOv4.src  = "./img/Star4.png"
   starOv5.src  = "./img/Star4.png"
   starco1.src = "./img/Star4.png"
   starco2.src = "./img/Star4.png"
   starco3.src = "./img/Star4.png"
   starco4.src = "./img/Star4.png"
   starco5.src = "./img/Star4.png"
   starq1.src = "./img/Star4.png"
   starq2.src = "./img/Star4.png"
   starq3.src = "./img/Star4.png"
   starq4.src = "./img/Star4.png"
   starq5.src  = "./img/Star4.png"
   starf1.src = "./img/Star4.png"
   starf2.src = "./img/Star4.png"
   starf3.src = "./img/Star4.png"
   starf4.src = "./img/Star4.png"
   starf5.src = "./img/Star4.png"
   n1.style.background = "#F1F1F1";
    n1.style.border = "1px solid #A04955"
    n1a.style.color = "#A04955";
    n2.style.background = "#A04955";
    n2a.style.color = "#F1F1F1";
 

  slider.style.display = "none" 


  let com =  document.createElement("div")

  com.classList = "CreateComents"
  com.innerHTML = `

  <div class="c-text1">${subbmit[0].review  + " " + subbmit[0].name + "-" + subbmit[0].summary}</div>
  <div class="d-text1-1">Comfort</div>
                <div class="d-stars1">
                    <img width="17px" height="16px" src="${subbmit[0].Ov1}" alt="">
                    <img width="17px" height="16px" src="${subbmit[0].Ov2}" alt="">
                    <img width="17px" height="16px" src="${subbmit[0].Ov3}" alt="">
                    <img width="17px" height="16px" src="${subbmit[0].Ov4}" alt="">
                    <img width="17px" height="16px" src="${subbmit[0].Ov5}" alt="">
                </div>
                <div class="d-text1-2">Fit</div>
                <div class="d-stars2">
                <img width="17px" height="16px" src="${subbmit[0].co1}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].co2}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].co3}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].co4}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].co5}" alt="">
                </div>
                <div class="d-text1-3">Overall</div>
                <div class="d-stars3">
                <img width="17px" height="16px" src="${subbmit[0].q1}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].q2}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].q3}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].q4}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].q5}" alt="">
                </div>
                <div class="d-text1-4">Quality</div>
                <div class="d-stars4">
                <img width="17px" height="16px" src="${subbmit[0].f1}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].f2}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].f3}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].f4}" alt="">
                <img width="17px" height="16px" src="${subbmit[0].f5}" alt="">
                </div>
               
  `
  document.querySelector(".slider2").append(com)


}else{
    alert("please fill in all fields")
   }
   








})



















}










export default submit;
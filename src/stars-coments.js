let starOv1 = document.querySelector("#ov1")
let starOv2 = document.querySelector("#ov2")
let starOv3 = document.querySelector("#ov3")
let starOv4 = document.querySelector("#ov4")
let starOv5 = document.querySelector("#ov5")
 let a = false
function stars() {
    document.querySelector(".OVERALL-stars").addEventListener("click", (e)=>{
    
    if(e.target.id == "ov1"){
        if(a == false){
        e.target.src = "./img/Star6.png"
        starOv2.src = "./img/Star4.png"
        starOv3.src = "./img/Star4.png"
        starOv4.src = "./img/Star4.png"
        starOv5.src = "./img/Star4.png"
        
        a = true
        
    }
    else{
        a = false
        e.target.src = "./img/Star4.png"
    }}
    if(e.target.id == "ov2"){
        if(a == false){
        starOv1.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        
        starOv3.src = "./img/Star4.png"
        starOv4.src = "./img/Star4.png"
        starOv5.src = "./img/Star4.png"
        
        a = true
        
    }
    else{
        a = false
        e.target.src = "./img/Star4.png"
        starOv1.src = "./img/Star4.png"

    }}
    if(e.target.id == "ov3"){
        if(a == false){
        starOv2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starOv1.src = "./img/Star6.png"
        starOv4.src = "./img/Star4.png"
        starOv5.src = "./img/Star4.png"
        
        a = true
        
    }
    else{
        a = false
        starOv2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starOv1.src = "./img/Star4.png"

    }}
    if(e.target.id == "ov4"){
        if(a == false){
        starOv2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starOv1.src = "./img/Star6.png"
        starOv3.src = "./img/Star6.png"
        starOv5.src = "./img/Star4.png"
        
        a = true
        
    }
    else{
        a = false
        starOv3.src = "./img/Star4.png"
        starOv2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starOv1.src = "./img/Star4.png"

    }}
    if(e.target.id == "ov5"){
        if(a == false){
        starOv2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starOv1.src = "./img/Star6.png"
        starOv3.src = "./img/Star6.png"
        starOv4.src = "./img/Star6.png"
        
        a = true
        
    }
    else{
        a = false
        starOv4.src = "./img/Star4.png" 
        starOv3.src = "./img/Star4.png"
        starOv2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starOv1.src = "./img/Star4.png"

    }}
})
let starco1 = document.querySelector("#co1")
let starco2 = document.querySelector("#co2")
let starco3 = document.querySelector("#co3")
let starco4 = document.querySelector("#co4")
let starco5 = document.querySelector("#co5")
let b = false
document.querySelector(".COMFORT-stars").addEventListener("click", (e)=>{
    
    if(e.target.id == "co1"){
        if(b == false){
        e.target.src = "./img/Star6.png"
        starco2.src = "./img/Star4.png"
        starco3.src = "./img/Star4.png"
        starco4.src = "./img/Star4.png"
        starco5.src = "./img/Star4.png"
        
        b = true
        
    }
    else{
        b = false
        e.target.src = "./img/Star4.png"
    }}
    if(e.target.id == "co2"){
        if(b == false){
        starco1.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        
        starco3.src = "./img/Star4.png"
        starco4.src = "./img/Star4.png"
        starco5.src = "./img/Star4.png"
        
        b = true
        
    }
    else{
        b = false
        e.target.src = "./img/Star4.png"
        starco1.src = "./img/Star4.png"

    }}
    if(e.target.id == "co3"){
        if(b == false){
        starco2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starco1.src = "./img/Star6.png"
        starco4.src = "./img/Star4.png"
        starco5.src = "./img/Star4.png"
        
        b = true
        
    }
    else{
        b = false
        starco2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starco1.src = "./img/Star4.png"

    }}
    if(e.target.id == "co4"){
        if(b == false){
        starco2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starco1.src = "./img/Star6.png"
        starco3.src = "./img/Star6.png"
        starco5.src = "./img/Star4.png"
        
        b = true
        
    }
    else{
        b = false
        starco3.src = "./img/Star4.png"
        starco2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starco1.src = "./img/Star4.png"

    }}
    if(e.target.id == "co5"){
        if(b == false){
        starco2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starco1.src = "./img/Star6.png"
        starco3.src = "./img/Star6.png"
        starco4.src = "./img/Star6.png"
        
        b = true
        
    }
    else{
        b = false
        starco4.src = "./img/Star4.png" 
        starco3.src = "./img/Star4.png"
        starco2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starco1.src = "./img/Star4.png"

    }}
})
let starq1 = document.querySelector("#q1")
let starq2 = document.querySelector("#q2")
let starq3 = document.querySelector("#q3")
let starq4 = document.querySelector("#q4")
let starq5 = document.querySelector("#q5")
let c = false
document.querySelector(".QUALITY-stars").addEventListener("click", (e)=>{
    
    if(e.target.id == "q1"){
        if(c == false){
        e.target.src = "./img/Star6.png"
        starq2.src = "./img/Star4.png"
        starq3.src = "./img/Star4.png"
        starq4.src = "./img/Star4.png"
        starq5.src = "./img/Star4.png"
        
        c = true
        
    }
    else{
        c = false
        e.target.src = "./img/Star4.png"
    }}
    if(e.target.id == "q2"){
        if(c == false){
        starq1.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        
        starq3.src = "./img/Star4.png"
        starq4.src = "./img/Star4.png"
        starq5.src = "./img/Star4.png"
        
        c = true
        
    }
    else{
        c = false
        e.target.src = "./img/Star4.png"
        starq1.src = "./img/Star4.png"

    }}
    if(e.target.id == "q3"){
        if(c == false){
        starq2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starq1.src = "./img/Star6.png"
        starq4.src = "./img/Star4.png"
        starq5.src = "./img/Star4.png"
        
        c = true
        
    }
    else{
        c = false
        starq2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starq1.src = "./img/Star4.png"

    }}
    if(e.target.id == "q4"){
        if(c == false){
        starq2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starq1.src = "./img/Star6.png"
        starq3.src = "./img/Star6.png"
        starq5.src = "./img/Star4.png"
        
        c = true
        
    }
    else{
        c = false
        starq3.src = "./img/Star4.png"
        starq2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starq1.src = "./img/Star4.png"

    }}
    if(e.target.id == "q5"){
        if(c == false){
        starq2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starq1.src = "./img/Star6.png"
        starq3.src = "./img/Star6.png"
        starq4.src = "./img/Star6.png"
        
        c = true
        
    }
    else{
        c = false
        starq4.src = "./img/Star4.png" 
        starq3.src = "./img/Star4.png"
        starq2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starq1.src = "./img/Star4.png"

    }}
})
let starf1 = document.querySelector("#fit1")
let starf2 = document.querySelector("#fit2")
let starf3 = document.querySelector("#fit3")
let starf4 = document.querySelector("#fit4")
let starf5 = document.querySelector("#fit5")
let d = false
document.querySelector(".FIT-stars").addEventListener("click", (e)=>{
    
    if(e.target.id == "fit1"){
        if(d == false){
        e.target.src = "./img/Star6.png"
        starf2.src = "./img/Star4.png"
        starf3.src = "./img/Star4.png"
        starf4.src = "./img/Star4.png"
        starf5.src = "./img/Star4.png"
        
        d = true
        
    }
    else{
        d = false
        e.target.src = "./img/Star4.png"
    }}
    if(e.target.id == "fit2"){
        if(d == false){
        starf1.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        
        starf3.src = "./img/Star4.png"
        starf4.src = "./img/Star4.png"
        starf5.src = "./img/Star4.png"
        
        d = true
        
    }
    else{
        d = false
        e.target.src = "./img/Star4.png"
        starf1.src = "./img/Star4.png"

    }}
    if(e.target.id == "fit3"){
        if(d == false){
        starf2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starf1.src = "./img/Star6.png"
        starf4.src = "./img/Star4.png"
        starf5.src = "./img/Star4.png"
        
        d = true
        
    }
    else{
        d = false
        starf2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starf1.src = "./img/Star4.png"

    }}
    if(e.target.id == "fit4"){
        if(d == false){
        starf2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starf1.src = "./img/Star6.png"
        starf3.src = "./img/Star6.png"
        starf5.src = "./img/Star4.png"
        
        d = true
        
    }
    else{
        d = false
        starf3.src = "./img/Star4.png"
        starf2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starf1.src = "./img/Star4.png"

    }}
    if(e.target.id == "fit5"){
        if(d == false){
        starf2.src = "./img/Star6.png"
        e.target.src = "./img/Star6.png"
        starf1.src = "./img/Star6.png"
        starf3.src = "./img/Star6.png"
        starf4.src = "./img/Star6.png"
        
        d = true
        
    }
    else{
        d = false
        starf4.src = "./img/Star4.png" 
        starf3.src = "./img/Star4.png"
        starf2.src = "./img/Star4.png"
        e.target.src = "./img/Star4.png"
        starf1.src = "./img/Star4.png"

    }}
})
}
export default stars;
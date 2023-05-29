
const cards1 = document.querySelector(".cards1-sec")
const cards2 = document.querySelector(".cards2-sec")
const clients2 = document.querySelector(".card-clients2")
const clients1 = document.querySelector(".card-clients1")

const carrossel = document.querySelector(".carrossel")
const carrossel2 = document.querySelector(".carrossel2")
const icones = document.querySelectorAll(".icon")
const icones2 = document.querySelectorAll(".icon2")
const firstImg = document.querySelectorAll("img")[0]

let startPassar = false, prevPageX , prevScrollLeft
let firstImgWidth = firstImg.clientWidth + 14

icones.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        carrossel.scrollLeft += btn.id === "left" ? -firstImgWidth : firstImgWidth
    })
})


const passar = (e)=>{
    if(!startPassar) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carrossel.scrollLeft = prevScrollLeft - positionDiff
}
const passar2 = (e)=>{
    startPassar = true
    prevPageX = e.pageX
    prevScrollLeft = carrossel.scrollLeft
}
const passar3 = ()=>{
    startPassar = false
}

function cardsOn(){
    cards1.classList.toggle("cards1-off")
    cards2.classList.toggle("cards2-on")
}
let time = setInterval(cardsOn , 5000)

setTimeout(time , 60000)


function clientOn(){
    clients1.classList.toggle("client-off")
    clients2.classList.toggle("client-on")
}
let client = setInterval(clientOn , 3000)

setTimeout(client , 60000)


carrossel.addEventListener("mousedown", passar2)
carrossel.addEventListener("mousemove", passar)
carrossel.addEventListener("mouseup", passar3)

window.sr = ScrollReveal({ reset: true })
sr.reveal('.reveal' , {duration: 1000})
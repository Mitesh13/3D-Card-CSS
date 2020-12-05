const card = document.querySelector('.card')
const cardHeader = document.querySelector('.card-header')
const cardBody = document.querySelector('.card-body')
const border = document.querySelector('.border')
const btn = document.querySelector('.btn')

const body = document.querySelector("body")
card.addEventListener("mousemove",(e)=>{
    card.style.transition = "none";
    card.style.transform = `rotateY(${((window.innerHeight-e.pageX)/7)*(-1)}deg) rotateX(${(window.innerWidth/4-e.pageY)/7}deg)`;
    // console.log(e.pageX/2/20,e.pageY/2/20);
})

card.addEventListener("mouseleave",(e)=>{
    console.log("called");
    card.style.transition = ".7s";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // console.log(e.pageX/2/20,e.pageY/2/20);
})
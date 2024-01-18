const burger = document.querySelector('.burger')
const menuBack = document.querySelector('.menu-back')
const menu = document.querySelector('.mobile-menu')
const toTop = document.querySelector('.to-top')

burger.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})

menuBack.addEventListener('click', ()=> {
    menu.classList.remove('active')
})

const counterParent = document.querySelector('.counter')
const counter = document.querySelector('.counter span')
const input = document.querySelector('.form .top input')

input.addEventListener('focus', ()=>{
    counterParent.classList.add('active')
})

input.addEventListener('blur', ()=>{
    counterParent.classList.remove('active')
})

input.addEventListener('input', ()=>{
    counter.innerText = input.value.length
})

input.addEventListener('keypress', (e)=>{
    if(input.value.length >= 50){
        e.preventDefault();
    }
})


// Totop
window.addEventListener('scroll', ()=>{
    const winHeight = window.pageYOffset
    if(winHeight > 670){
        toTop.style.transform = 'scale(1)'
    } else {
        toTop.style.transform = 'scale(0)'
    }
})


toTop.addEventListener('click', (e)=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
})
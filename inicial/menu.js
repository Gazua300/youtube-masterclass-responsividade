var shwo = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', ()=>{
    menuSection.classList.toggle('on')
})
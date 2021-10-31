const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
menuIcon.addEventListener("click", function(){
    document.body.classList.toggle('lock')
    menuIcon.classList.toggle('active')
    menuBody.classList.toggle('active')
})
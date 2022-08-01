const menuIcon= document.getElementsByClassName('bi-list')[0]
const closeIcon = document.getElementsByClassName('bi-x-lg')[0]
const menu = document.getElementsByClassName('menu')[0]

menuIcon.addEventListener('click', ()=>{
menu.style.display = 'flex'
menuIcon.style.display = 'none'
closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', ()=>{
    menu.style.display = 'none'
   menuIcon.style.display = 'block'
    closeIcon.style.display = 'none'

})
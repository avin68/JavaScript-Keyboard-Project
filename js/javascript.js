
window.addEventListener('keydown' ,(event)=>{
    document.getElementById(event.key).classList.add('pressed')
})

window.addEventListener('keyup' ,(event)=>{
    document.getElementById(event.key).classList.remove('pressed')
})


const body = document.querySelector('body')
const indicator = document.querySelector(".indicator")
indicator.onclick = function(){
    indicator.classList.toggle('active')
    body.classList.toggle('active')
}
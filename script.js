let decrease = document.getElementById('decrease');
let h1 = document.getElementById('counter');
let increase = document.getElementById('increase');
let reset = document.getElementById('reset')

decrease.addEventListener('click', () => {
    h1.innerHTML = Number(h1.innerHTML) - 1 ;
})

increase.addEventListener('click', () => {
    h1.innerHTML = Number(h1.innerHTML) + 1 ;
})

reset.addEventListener('click' , () => {
    h1.innerHTML = 0
})
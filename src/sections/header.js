let hamburgerButton = document.getElementById('button');
console.log(hamburgerButton);
console.log('hello');
document.addEventListener('DOMContentLoaded',() =>{
    console.log('hello');
})
hamburgerButton.addEventListener('click', () => {
    let menu = document.querySelector('#menu-bar')
    console.log(menu);
        menu.classList.toggle('hidden')
})
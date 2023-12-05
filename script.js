let bar = document.getElementById('bar')
let sideBar = document.getElementsByClassName('navBar')[0];
let close  = document.querySelector('#cross')
bar.addEventListener("click",()=>{
    sideBar.classList.add('active');
})
close.addEventListener("click",()=>{
    sideBar.classList.remove('active');
})

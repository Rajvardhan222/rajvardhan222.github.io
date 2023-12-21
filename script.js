let nav = document.querySelector('.nav-bar')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let bar = document.querySelector('.bar')
let moon = document.querySelector('.moon1')
let myname = document.querySelector('.logoname')

let closeservice1 = document.querySelector('.close1')
let closeservice2 = document.querySelector('.close2')
let closeservice3 = document.querySelector('.close3')
window.addEventListener("scroll",()=>{
    if(scrollY > 0){
        nav.classList.remove('navNotScrolled');
        nav.classList.add('navScrolled');
        myname.classList.remove('font-white');
        myname.classList.add('font-black');
        nav.classList.add('boxShadow')
        bar.classList.add('bar-black')
        bar.classList.remove('bar')
        moon.classList.add('moonBlack')
        moon.classList.remove('moon')
        sun.classList.add('sunBlack')
        sun.classList.remove('sun')

    }
    else{
        sun.style.color = 'white'
        sun.classList.remove('sunBlack')
        sun.classList.add('sun')
        moon.classList.remove('moonBlack')
        moon.classList.add('moon')

        bar.classList.remove('bar-black')
        bar.classList.add('bar')

        nav.classList.remove('navScrolled');
        nav.classList.add('navNotScrolled');
        
        myname.classList.remove('font-black');
        nav.classList.remove('boxShadow')
        myname.classList.add('font-white')
    }
})
let knowmore1 = document.querySelector('.knowmore1')
let knowmore2 = document.querySelector('.knowmore2')
let knowmore3 = document.querySelector('.knowmore3')
btn1.addEventListener('click',()=>{
    if(knowmore1.style.display == 'none'){
    knowmore1.style.display = 'block';
    }
})
closeservice1.addEventListener('click',()=>{
    if(knowmore1.style.display == 'block'){
        knowmore1.style.display = 'none';
        }
})

btn2.addEventListener('click',()=>{
    if(knowmore2.style.display == 'none'){
    knowmore2.style.display = 'block';
    }
})
closeservice2.addEventListener('click',()=>{
    if(knowmore2.style.display == 'block'){
        knowmore2.style.display = 'none';
        }
})
btn3.addEventListener('click',()=>{
    if(knowmore3.style.display == 'none'){
    knowmore3.style.display = 'block';
    }
})
closeservice3.addEventListener('click',()=>{
    if(knowmore3.style.display == 'block'){
        knowmore3.style.display = 'none';
        }
})

// mobile nav closing
let closenav = document.querySelector('.close-nav')
let mobileNav = document.querySelector('.nav-mobile')
closenav.addEventListener('click',()=>{
    mobileNav.style.transform = "translateY(-200%)"; 
    // mobileNav.style.display = "none"
})
bar.addEventListener('click',()=>{
    // mobileNav.style.display = "block"
    // mobileNav.style.top = '0px'
    mobileNav.style.transform = "translateY(0%)"; 
})
let sun = document.querySelector('.sun')
moon.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--white','black')
    document.documentElement.style.setProperty('--black','white')
    moon.style.display = "none"
    sun.style.display = "inline"
})
sun.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--white','white')
    document.documentElement.style.setProperty('--black','black')
    moon.style.display = "inline"
    sun.style.display = "none"
})
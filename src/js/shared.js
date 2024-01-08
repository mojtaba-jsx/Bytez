//! Element Variables
const mobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenu = document.querySelector('.mobile-menu');


//! Logic For Show And Hide Mobile Menu
let flag = false;
mobileMenuBtn.addEventListener('click',()=>{
    if(!flag){
        mobileMenu.style.display = 'block'
        flag=true;
    }else{
        mobileMenu.style.display = 'none'
        flag=false;

    }
})
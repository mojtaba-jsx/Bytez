//! Element Variables
const mobileMenuBtn = document.querySelector('.mobile-menu__btn');

const mobileMenu = document.querySelector('.mobile-menu');


//! Logic For Show And Hide Mobile Menu
let flag1 = false;
mobileMenuBtn.addEventListener('click',()=>{
    if(!flag1){
        mobileMenu.style.display = 'block'
        flag1=true;
    }else{
        mobileMenu.style.display = 'none'
        flag1=false;

    }
})


const searchIconsUserSvg = document.querySelector('.search-icons__user-svg');
const signinSignup = document.querySelector('.signin-signup')
let flag2 = false
searchIconsUserSvg.addEventListener('click',()=>{
    if(!flag2){
        signinSignup.style.visibility = 'visible';
        flag2 = true;
    }else{
        signinSignup.style.visibility = 'hidden';
        flag2 = false;
    }

})




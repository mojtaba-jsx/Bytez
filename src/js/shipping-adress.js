//* Elements
let shippingAddress = document.querySelector('.shipping-address');
let addressModal = document.querySelector('.address-modal');
let shippingAddressBtn = document.querySelector('.shipping-address-btn');
let addressModalFormBtn = document.querySelector('.address-modal__form-btn')

//* Logic For Show  And Hide add Address Section
shippingAddressBtn.addEventListener('click',()=>{
    shippingAddress.style.display= 'none';
    addressModal.style.display = 'flex'
})
addressModalFormBtn.addEventListener('click',()=>{
    shippingAddress.style.display= 'block';
    addressModal.style.display = 'none'
})
let shop_btn = document.getElementById('shopping');
let side_menu = document.getElementsByClassName('header-side-menu')[0]; 
let page_cover = document.getElementsByClassName('nav-page-cover')[0]; 
let menu_close = document.getElementsByClassName('side-menu-close')[0]; 
shop_btn.addEventListener('click',()=>{
    side_menu.classList.add('header-side-menu-active');
    page_cover.classList.add('nav-page-cover-active');
    
});
page_cover.addEventListener('click',()=>{
    side_menu.classList.remove('header-side-menu-active');
    page_cover.classList.remove('nav-page-cover-active');
    
});
menu_close.addEventListener('click',()=>{
    side_menu.classList.remove('header-side-menu-active');
    page_cover.classList.remove('nav-page-cover-active');
    
});
window.onscroll = function(){
    scrollFunction();
};
let upBtn = document.getElementById('upBtn');
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        upBtn.style.bottom = '20px';
    }
    else{
        upBtn.style.bottom = '-10%';
    }
}


let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('menuList');

menuIcon.addEventListener('click', toggle);
let visibility = false;
function toggle(){
    // console.log("opened");
    if(visibility == false){
        menuIcon.setAttribute('src',  'images/cross_icon-icons.com_72347.svg');
        menu.style.left = "0";
        visibility = true;
        document.body.style.overflow = "hidden"
    }
    else{
        menuIcon.setAttribute('src',  'images/menu_icon-icons.com_72311.svg');
        menu.style.left = "-100%";
        visibility = false;
        document.body.style.overflow = "visible"
    }
}


// Code for what to do when the vertical menu bar navigation links are clicked
let menuLinks = document.getElementsByClassName('menuLinks');
for(let link of menuLinks){
    link.addEventListener('click', function close(){
        visibility = true;
        toggle();
    })
}

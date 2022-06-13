window.onscroll = function(){
    scrollFunction();
};
let upBtn = document.getElementById('upBtn');
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        upBtn.style.display = "block";
    }
    else{
        upBtn.style.display = "none";
    }
}


let menuIcon = document.getElementById('menu-icon');
let crossIcon = document.getElementById('cross-icon');
let menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', toggle);
crossIcon.addEventListener('click', toggle);
let visibility = false;
function toggle(){
    // console.log("clicked");
    if(visibility == false){

        crossIcon.style.display = "block";
        menuIcon.style.display = "none";
        menuList.style.visibility = "visible";
        visibility = true;
        document.body.style.overflow = "hidden"
    }
    else{
        crossIcon.style.display = "none";
        menuIcon.style.display = "block";
        menuList.style.visibility = "hidden";
        visibility = false;
        document.body.style.overflow = "visible"
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})

let menuLinks = document.getElementsByClassName('menuLinks');
for(let link of menuLinks){
    link.addEventListener('click', function close(){
        menuList.style.visibility = "hidden";
        visibility = false;       
        
        document.body.style.overflow = "visible"
    })
}

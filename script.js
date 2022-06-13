
let menuIcon = document.getElementById('menu-icon');
let menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', toggle);
let visibility = false;
function toggle(){
    // console.log("clicked");
    if(visibility == false){
        menuList.style.visibility = "visible";
        visibility = true;
    }
    else{
        menuList.style.visibility = "hidden";
        visibility = false;
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
    })
}
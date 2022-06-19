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
let verticalmenuList = document.getElementById('verticalmenuList');

menuIcon.addEventListener('click', toggle);
crossIcon.addEventListener('click', toggle);
let visibility = false;
function toggle(){
    // console.log("opened");
    if(visibility == false){

        crossIcon.style.display = "block";
        menuIcon.style.display = "none";
        verticalmenuList.style.visibility = "visible";
        visibility = true;
        document.body.style.overflow = "hidden"
    }
    else{
        // console.log("closed");
        crossIcon.style.display = "none";
        menuIcon.style.display = "block";
        verticalmenuList.style.visibility = "hidden";
        visibility = false;
        document.body.style.overflow = "visible"
    }
}


// Code for what to do when the vertical menu bar navigation links are clicked
let verticalmenuLinks = document.getElementsByClassName('verticalmenuLinks');
for(let link of verticalmenuLinks){
    link.addEventListener('click', function close(){
        crossIcon.style.display = "none";
        menuIcon.style.display = "block";
        verticalmenuList.style.visibility = "hidden";
        visibility = false;       
        
        document.body.style.overflow = "visible"
    })
}


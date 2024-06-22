
document.addEventListener('DOMContentLoaded',()=>{
    const menuHamburger = document.getElementById("menuHamburger");
    const navHamburger = document.getElementById("navHamburger");

    let isShowMenu = false

    menuHamburger.addEventListener('click', () =>{
        if (isShowMenu){
            menuHamburger.style.rotate = "360deg";
            navHamburger.style.display = "none";
            isShowMenu = false; 
        }else{
            menuHamburger.style.rotate = "180deg";
            navHamburger.style.display = "flex";
            isShowMenu = true;
        }
    })

})
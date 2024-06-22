
document.addEventListener('DOMContentLoaded',()=>{
    // alert('AS')
    
    const buttonHamburger = document.getElementById('buttonHamburger');
    const hamburgerMenu = document.getElementById('hamburgerMenu')
    const hamburgerText =  buttonHamburger.firstElementChild;
    let showHamburger = false;

   buttonHamburger.addEventListener('click',()=>{
    console.log(showHamburger)
    if(showHamburger){
        buttonHamburger.classList.remove('hamburger');
        buttonHamburger.classList.add('closeHamburger');
        hamburgerText.textContent = 'X';
        hamburgerMenu.style.display = 'flex'
        showHamburger = false
    }else{
        buttonHamburger.classList.remove('closeHamburger');
        buttonHamburger.classList.add('hamburger');
        hamburgerText.textContent = '-';
        hamburgerMenu.style.display = 'none'
        showHamburger = true;
    }

   })
    if(showHamburger){
        buttonHamburger.classList.remove('hamburger');
        buttonHamburger.classList.add('closeHamburger');
        hamburgerText.textContent = 'X';
        hamburgerMenu.style.display = 'flex'
        showHamburger = false
    }else{
        buttonHamburger.classList.remove('closeHamburger');
        buttonHamburger.classList.add('hamburger');
        hamburgerText.textContent = '-';
        showHamburger = true;
    }
})
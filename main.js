function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
  window.addEventListener("scroll", reveal);
  
function initApp () {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const closeBtn = document.getElementById('close-button')
    const mobileMenu = document.getElementById('mobile-menu')

    function toggleMenu() {
        mobileMenu.classList.toggle('shown')
        mobileMenu.classList.toggle('hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    closeBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
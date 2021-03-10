function mobileMenuButton() {
  let logo = document.querySelector(".brand")

  logo.onclick = function(e){
    e.preventDefault()
    const mediaQuery = window.matchMedia('(max-width: 720px)')
 
    if (mediaQuery.matches) {
      let menu = document.querySelector(".menu")

      document.querySelector(".menu").classList.toggle("mobile-menu")
      document.querySelector(".menu-links").classList.toggle("hidden");
    }
  }
}

function mobileMenuResize() {
  listen = setInterval(function(){
    const mediaQuery = window.matchMedia('(max-width: 720px)')
    if (mediaQuery.matches && !document.querySelector(".menu").classList.contains("mobile-menu")) {
      document.querySelector(".menu-links").classList.add("hidden");
    } else if(!mediaQuery.matches && document.querySelector(".menu-links").classList.contains("hidden")){
      document.querySelector(".menu-links").classList.remove("hidden");
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", function(event) {
  mobileMenuButton()
  mobileMenuResize()
});

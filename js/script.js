$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
  items: 1,
  animateOut: 'fadeOut',
  autoplay: true,
  autoplayHoverPause:true,
  smartSpeed: 250,
  loop: true,
  nav:true,
  navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
 });

 // Custom code here
 let menu = document.querySelector(".main_menu");

 function handleFixedMenu() {
  if (window.scrollY >= 100) {
      menu.classList.add("fixed");
  } else {
      menu.classList.remove("fixed");
  }
}

document.addEventListener("scroll", handleFixedMenu)
 

});
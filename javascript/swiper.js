var swiper = new Swiper (".slider", {
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper (".carousel", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  clickable: true,
  loop:true,
});

function loader (){
  document.querySelector ('.loader-container').classList.add('fade-out');
}

function fadeOut (){
  setInterval (loader, 3000);
}

window.onload = fadeOut;
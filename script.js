const bar=document.getElementById('bar');
const close=document.getElementById('close');
const navbar=document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  })
}

if(close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
}





const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    allowSlideNext: true,
    allowSlidePrev: true,
    navigation: {
      prevEl:".swiper-button-prev",
      nextEl: ".swiper-button-next",
      
    },
    thumbs: {
      swiper: swiper,
    },
});


$(document).ready(function(){
  $('.rv-testimonial-slider-container').owlCarousel({
    loop:true,
    margin:80,
    nav:true,
    dots: false,
    items: 2,
    center: true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],   
  })

  // teem section
  $('.rv_teem_area').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 3,
    dots: false,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],   
})
  
});


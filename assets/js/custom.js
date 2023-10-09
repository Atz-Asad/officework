
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

//  home-1 WORK SECTION
var swiper = new Swiper(".rv_work_content_main", {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".rv_work_area", {
  spaceBetween: 10,
  allowSlideNext: true,
  allowSlidePrev: true,
  loop:true,
  navigation: {
    prevEl:".swiper-button-prev",
    nextEl: ".swiper-button-next",
    
  },
  thumbs: {
    swiper: swiper,
  },
});
  
//  home 4 banner section
var swiper = new Swiper(".rv_4_banner_slider_bottom_area", {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".rv_4_banner_slider", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'custom', // Use custom pagination rendering
    renderCustom: function (swiper, current, total) {
      // Add a "0" prefix if the current page number is less than 10
      var pageNumber = current < 9 ? '0' + (current + 1) : (current + 1);
      return pageNumber; // Display the formatted page number
    },
  },
  navigation: {
    nextEl: ".rv_4_banner_slider_next",
  },
  thumbs: {
    swiper: swiper,
  },
});

// home-4 progess start
var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
// window.onload = function(){
	
// }
var max = -219.99078369140625;
forEach(document.querySelectorAll('.progress'), function (index, value) {
percent = value.getAttribute('data-progress');
  value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
  // value.querySelector('.value').innerHTML = percent + '';
});
// home-4 progess end
});


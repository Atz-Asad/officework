
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
  
// home4 banner section
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
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      // Calculate the current page number with a "0" prefix
      var pageNumber = (current).toString().padStart(2, '0');
      return pageNumber;
    },
  },
  navigation: {
    nextEl: ".rv_4_banner_slider_next",
  },
  thumbs: {
    swiper: swiper,
  },
});


// end home 4 bannersection



// Define the value you want to animate to
var valueToAnimate = 6.8;
// Scale the value to be between 0 and 1
var scaledValue = valueToAnimate / 10;
// Create a ProgressBar instance
var bar = new ProgressBar.Circle('.progress-one', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFC107',
  trailColor: '#191923',
  trailWidth: 5,
  easing: 'easeOut',
  svgStyle: { width: '100%', height: '100%' },
  text: {
    value: '0',
    style: {
      color: '#8c8c8e',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '16px'
    },
  },
  step: (state, bar) => {
    // Set the progress bar text to the original value (scaledValue * 10)
    bar.setText((valueToAnimate).toFixed(1));
  }
});
// Animate the progress bar to the scaled value
bar.animate(scaledValue);

var valueToAnimate = 6.8;
// Scale the value to be between 0 and 1
var scaledValue = valueToAnimate / 10;
// Create a ProgressBar instance
var bar = new ProgressBar.Circle('.progress-two', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFC107',
  trailColor: '#191923',
  trailWidth: 5,
  easing: 'easeOut',
  svgStyle: { width: '100%', height: '100%' },
  text: {
    value: '0',
    style: {
      color: '#8c8c8e',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '16px'
    },
  },
  step: (state, bar) => {
    // Set the progress bar text to the original value (scaledValue * 10)
    bar.setText((valueToAnimate).toFixed(1));
  }
});
// Animate the progress bar to the scaled value
bar.animate(scaledValue);

var valueToAnimate = 6.8;
// Scale the value to be between 0 and 1
var scaledValue = valueToAnimate / 10;
// Create a ProgressBar instance
var bar = new ProgressBar.Circle('.progress-three', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFC107',
  trailColor: '#191923',
  trailWidth: 5,
  easing: 'easeOut',
  svgStyle: { width: '100%', height: '100%' },
  text: {
    value: '0',
    style: {
      color: '#8c8c8e',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '16px'
    },
  },
  step: (state, bar) => {
    // Set the progress bar text to the original value (scaledValue * 10)
    bar.setText((valueToAnimate).toFixed(1));
  }
});
// Animate the progress bar to the scaled value
bar.animate(scaledValue);









});


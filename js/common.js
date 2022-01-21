const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		
		clickable: true,
	},
	 autoplay: {
   delay: 2000,
 },
	 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
   
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
   
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
	
})


const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
burger.addEventListener('click', function(){
	menu.classList.toggle('mobile-menu');
	
})
window.onload = function() {
        baguetteBox.run('.baguetteBoxOne');
        baguetteBox.run('.baguetteBoxTwo');
        baguetteBox.run('.baguetteBoxThree', {
            animation: 'fadeIn',
            noScrollbars: true
        });
        baguetteBox.run('.baguetteBoxFour', {
            buttons: false
        });
        baguetteBox.run('.baguetteBoxFive', {
            captions: function(element) {
                return element.getElementsByTagName('img')[0].alt;
            }
        });

        if (typeof oldIE === 'undefined' && Object.keys) {
            hljs.initHighlighting();
        }

        var year = document.getElementById('year');
        year.innerText = new Date().getFullYear();
    };

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
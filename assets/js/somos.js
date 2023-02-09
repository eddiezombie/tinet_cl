$(document).ready(function () {

  let pilares1 = 1;
  let pilares2 = 1;
  let stage = 1;

  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
    
  function enableScroll() {
    $('body').removeClass('stop-scrolling');
  }

  $(window).scroll(function() {
     if($('#section-service-1.section-lock').length){
      var hT = $('#section-service-1').offset().top,
          hH = $('#section-service-1').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop() + 20;
      if (wS > (hT+hH-wH)){
          if(stage){
            --stage;
            $('body').addClass('stop-scrolling');
            setTimeout(enableScroll, 1600);
          }
          $('#section-service-1').addClass('active');
          $('.somos-banner-line').addClass('box-animation');
      }
     }

     if($('#pilares-info1').length && pilares1){
      var hT = $('#pilares-info1').offset().top,
          hH = $('#pilares-info1').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop() - 150;
      if (wS > (hT+hH-wH)){
        console.log('info1 disabled');
        --pilares1;
        $('#pilares-circle2').addClass('active');
        $('body').addClass('stop-scrolling');
        setTimeout(enableScroll, 900);
      }
     }

     if($('#pilares-info2').length && pilares2){
      var hT = $('#pilares-info2').offset().top,
          hH = $('#pilares-info2').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop() - 150;
      if (wS > (hT+hH-wH)){
        console.log('info2');
        --pilares2;
        $('#pilares-circle3').addClass('active');
        $('body').addClass('stop-scrolling');
        setTimeout(enableScroll, 900);
      }
     }

  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-reveal");
      }
    }
  }

  $('#section-service-1').addClass("active-reveal");

  window.addEventListener("scroll", reveal);

  function animate_numbers(id) {
    var count = 0;
    var classToAnimate = ".animate-numbers";
    var offsetToScrollThrough = 500;
    var animationDuration = 7000;
    var animationEasing = "easeOutExpo";

    $(window).scroll(function() {
      var oTop = $(id).offset().top - window.innerHeight + offsetToScrollThrough;
      if (count == 0 && $(window).scrollTop() > oTop) {
        $(id + " " + classToAnimate).each(function() {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text()
              },
              {
                duration: animationDuration,
                easing: animationEasing,
                step: function(now) {
                  $(this).text(Math.ceil(now));
                }
              }
            );
        });
        count = 1;
      }
    });
  }

  if($('.mySwiperEquipment').length > 0){
    function initSwipersEquipment() {
      var swiperFour = new Swiper(".mySwiperEquipment", {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          modifier: 2,
          slideShadows: false,
        },
        breakpoints: {
          1200: {
            coverflowEffect: {
              stretch: 10,
              depth: 150,
            },
          },
          645: {
            coverflowEffect: {
              stretch: 85,
              depth: 150,
            },
          },
          320: {
            coverflowEffect: false,
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },

        navigation: {
          prevEl: ".mySwiperEquipment-left-page",
          nextEl: ".mySwiperEquipment-right-page",
        },

      },
      );
    }
    initSwipersEquipment(); 
  }

  if($('.somos-slider-thumbs').length > 0){
   function initSwipersPrueba() {
     var galleryThumbs = new Swiper('.somos-slider-thumbs', {
       watchSlidesVisibility: true,
       watchSlidesProgress: true,
       centerInsufficientSlides: true,
       slideToClickedSlide: true,
       allowTouchMove: false,
       breakpoints: {
         1000: {
           slidesPerView: 8,
         },
         768: {
           slidesPerView: 6,
         },
         320: {
           slidesPerView: 3,
         }
       },
     });
     var galleryTop = new Swiper('.somos-slider-top', {
       spaceBetween: 30,
       allowTouchMove: false,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       thumbs: {
         swiper: galleryThumbs,
       },
     });
   }
   initSwipersPrueba(); 
  }

  if($('.mySwiperS2').length > 0){
    function initSwipersAll2 () {
      var swiper = new Swiper(".mySwiperS2", {
          slidesPerView: 1,
          spaceBetween: 11,
          grid: {
            rows: 1
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            prevEl: ".mySwiperS2-left-page",
            nextEl: ".mySwiperS2-right-pag",
          },
          breakpoints: {
            1095: {
              slidesPerView: 2,
              spaceBetween: 24,
              grid: {
                rows: 2
              }
            },
            601:{
              slidesPerView: 2,
              spaceBetween: 11,
              grid: {
                rows: 1
              }
            }
        },
        });
    }
    initSwipersAll2();
  }

  if($('#service-somos').length > 0){
    animate_numbers("#service-somos");
  }

  $('.somos-slick').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 645,
      settings:{
        arrows: true,
        slidesToShow: 2,
        centerMode: true
      }
    }]
  });

  $('.logros-slider').slick({
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1072,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
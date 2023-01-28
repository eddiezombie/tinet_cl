$(document).ready(function () {

  let pilares1 = 1;
  let pilares2 = 1;
  let stage = 1;

  if($( window ).width() <= 800){
    $('.revolution__sidebar--active').removeClass('revolution__sidebar--active');
  }
  $(window).resize(function(){
    if($( window ).width() <= 800){
      $('.revolution__sidebar--active').removeClass('revolution__sidebar--active');
    }
  });

  $('#proyecto').click(function(event){
    event.preventDefault();
    $('.projects__card').toggleClass('projects__card--disabled');
  });

  $('.projects__arrow').click(function(){
    $('.projects__card').toggleClass('projects__card--disabled');
  });

  $('.projects__overlay').click(function(){
    $('.projects__overlay').removeClass('projects__overlay--active');
    $('.projects__sidebar').removeClass('projects__sidebar--active');
  });

  $('.projects__card').click(function(){
    let self = $(this);
    if($( window ).width() > 800 && self.hasClass('projects__card--disabled')){
      $('.projects__card').toggleClass('projects__card--disabled');
      $('.projects__sidebar').removeClass('projects__sidebar--active');
    }
  });

  $('.projects__card__show').click(function(){
    let self = $(this);
    let card = self.parents('.projects__card');
    let data = "#" + self.attr('data-project');
    if(!(card.hasClass('projects__card--disabled') && $( window ).width() > 800)){
      $('.projects__overlay').addClass('projects__overlay--active');
      $('.projects__sidebar').removeClass('projects__sidebar--active');
      $(data).addClass('projects__sidebar--active');
    }
  });

  $('.projects__sidebar__close').click(function(event){
    $(this).parent().removeClass('projects__sidebar--active');
    $('.projects__overlay').removeClass('projects__overlay--active');
    event.preventDefault();
  });

  // $('.projects__slider').slick({
  //   mobileFirst: true, 
  //   responsive: [
  //     {
  //       breakpoint: 200,
  //       settings: {
  //         dots: true,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: "unslick"
  //     }
  //   ]
  // });

  slick_slider();
  $(window).resize(slick_slider);

  function slick_slider() {
    var wrapper = $('.projects__slider')
    if ($(".projects .slick-initialized").length) {
      wrapper.slick('unslick');
    }
    wrapper.slick({
      mobileFirst: true, 
      responsive: [
        {
          breakpoint: 200,
          settings: {
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 800,
          settings: "unslick"
        }
      ]
    });
  }

  $('.methodology__circleitem').click(function(){
    $(this).toggleClass('active');
    $('.methodology__circleitem__plus').slideToggle(1);
    $('.methodology__circleitem__minus').slideToggle(1);
  });

  $('.methodology__bubble__show').click(function(event){
    let self = $(this);
    event.preventDefault();
    $('.methodology__bubble').toggleClass('disabled');
    self.parents('.methodology__bubble').removeClass('disabled');
    self.toggleClass('active');
    self.next().stop().slideToggle();
  });

  $('.revolution__td').click(function(){
    let self = $(this);
    let tab = "#" + self.attr('data-tab');
    $('.revolution__sidebar').removeClass('revolution__sidebar--active');
    $('.revolution__td').removeClass('revolution__td--active');
    self.addClass('revolution__td--active');
    $(tab).addClass('revolution__sidebar--active');
    $('.revolution__axis').removeClass('revolution__axis1');
    $('.revolution__axis').removeClass('revolution__axis2');
    $('.revolution__axis').removeClass('revolution__axis3');
    $('.revolution__axis').removeClass('revolution__axis4');
    
    if(tab == "#revsidebar1"){
      $('.revolution__axis').addClass('revolution__axis1');
    }
    if(tab == "#revsidebar2"){
      $('.revolution__axis').addClass('revolution__axis2');
    }
    if(tab == "#revsidebar3"){
      $('.revolution__axis').addClass('revolution__axis3');
    }
    if(tab == "#revsidebar4"){
      $('.revolution__axis').addClass('revolution__axis4');
    }
  });

  $('.revolution__sidebar__close').click(function(event){
    $(this).parent().removeClass('revolution__sidebar--active');
    event.preventDefault();
  });

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
      } else {
        //reveals[i].classList.remove("active-reveal");
      }
    }
  }

  $('#section-service-1').addClass("active-reveal");

  window.addEventListener("scroll", reveal);

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

  if($('.mySwiperS3').length > 0){
    function initSwipersAll () {
      var swiper = new Swiper(".mySwiperS3", {
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
            prevEl: ".mySwiperS3-left-page",
            nextEl: ".mySwiperS3-right-pag",
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
      // console.log('window was resized', screen.width);
    }
    initSwipersAll();
  }

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

  if($('#service-somos').length > 0){
    animate_numbers("#service-somos");
  }
  if($('#section-service-4').length > 0){
    animate_numbers("#section-service-4");
  }

  if($('.mySwiperSomos').length > 0){
    function initSwipersSomos() {
      var swiperTwo = new Swiper(".mySwiperSomos", {
        slidesPerView: 1,
        spaceBetween: 11,

        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          prevEl: ".mySwiperS3-left-page",
          nextEl: ".mySwiperS3-right-pag",
        },
        breakpoints: {
          1095: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 32,
          }
        },
      },
      );
      // console.log('window was resized', screen.width);
    }
    initSwipersSomos();
  }

  if($('.mySwiperPhoto').length > 0){
    function initSwipersPhoto() {
      var swiperTrhee = new Swiper(".mySwiperPhoto", {
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
          prevEl: ".mySwiperS3-left-page",
          nextEl: ".mySwiperS3-right-pag",
        },
        breakpoints: {
          1280: {
            slidesPerView: 3,
            spaceBetween: 28,
            grid: {
              rows: 2
            }
          },
          601: {
            slidesPerView: 3,
            spaceBetween: 11,
            grid: {
              rows: 1
            }
          }
        },
      },
      );
      // console.log('window was resized', screen.width);
    }
    initSwipersPhoto(); 
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
      // console.log('window was resized', screen.width);
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
     // console.log('window was resized', screen.width);
   }
   initSwipersPrueba(); 
  }

  $('.somos-banner-animation').click(function () {
    $(this).addClass('active');
  });

	$(".content-circle").click(function() {
		if (!$(this).hasClass("active")) {
			$(".content-circle").removeClass("active");
			$(this).addClass("active");

			$(".pesta-page").removeClass('pesta-page-flex');
      $(".pesta-page").addClass('pesta-page-none');
			if ($(this).hasClass("design")) {
				$(".header-exp").addClass("design", 500).removeClass("research", 500).removeClass("consulting", 500).removeClass("extra", 500);
				$(".pesta-page.design").removeClass('pesta-page-none');
        $(".pesta-page.design").addClass('pesta-page-flex');
			} else if ($(this).hasClass("research")) {
				$(".header-exp").addClass("research", 500).removeClass("design", 500).removeClass("consulting", 500).removeClass("extra", 500);
				$(".pesta-page.research").removeClass('pesta-page-none');
        $(".pesta-page.research").addClass('pesta-page-flex');
			} else if ($(this).hasClass("consulting")) {
				$(".header-exp").addClass("consulting", 500).removeClass("design", 500).removeClass("research", 500).removeClass("extra", 500);
				$(".pesta-page.consulting").removeClass('pesta-page-none');
        $(".pesta-page.consulting").addClass('pesta-page-flex');
			} else if ($(this).hasClass("extra")) {
        $(".header-exp").addClass("extra", 500).removeClass("design", 500).removeClass("research", 500).removeClass("consulting", 500);
        $(".pesta-page.extra").removeClass('pesta-page-none');
        $(".pesta-page.extra").addClass('pesta-page-flex');
      }

		}
	});

  if($('#section-service-6').length > 0){
    let svgheight = $("#svgwrapper").height();
    let element_position = $("#section-service-6").offset().top;
    $(window).resize(function () {
      svgheight = $("#svgwrapper").height();
      element_position = $("#section-service-6").offset().top;
    });

    $(window).on("scroll", function () {
      var winposition = window.pageYOffset + 100;
      var divposition = element_position;
      var divposition1 = element_position + (1 * svgheight) / 5;
      var divposition2 = element_position + (2 * svgheight) / 5;
      var divposition3 = element_position + (3 * svgheight) / 5;
      var divposition4 = element_position + (3 * svgheight) / 5;
      if (winposition > divposition) {
        //do stuff
        if ($("#process-easy-1").hasClass("haslabel")) {
          $("#process-easy-1 .infoblob-label").fadeIn(1);
        }
        $("#process-easy-1 .infoblob").fadeIn(500);
        if (winposition > divposition1) {
          if ($("#process-easy-2").hasClass("haslabel")) {
            $("#process-easy-2 .infoblob-label").fadeIn(1);
          }
          $("#process-easy-2 .infoblob").fadeIn(500);
        } 
        if (winposition > divposition2) {
          if ($("#process-easy-3").hasClass("haslabel")) {
            $("#process-easy-3 .infoblob-label--alt").fadeIn(1);
          }
          $("#process-easy-3 .infoblob-label--alt").fadeIn(1);
          $("#process-easy-3 .infoblob").fadeIn(500);
        } 
        if (winposition > divposition3) {
          if ($("#process-easy-4").hasClass("haslabel")) {
            $("#process-easy-4 .infoblob-label").fadeIn(1);
          }
          $("#process-easy-4 .infoblob").fadeIn(500);
        } 
        if (winposition > divposition4) {
          $("#process-easy-5 .infoblob").fadeIn(500);
        }
      } 
    });
  }
  $(window).resize(function () {
    svgrize();
    var tween = new TimelineMax()
      .add(
        TweenMax.to($svgscroll, 1, {
          strokeDashoffset: 0,
          ease: Linear.easeNone,
        })
      )
      .add(
        TweenMax.to("#svgroad-back path", 1, { stroke: "#891265", ease: Linear.easeNone }),
        0
      );
    var scene = new ScrollMagic.Scene({
      triggerElement: "#svgtrigger",
      duration: 900,
      tweenChanges: true,
    })
      .setTween(tween).addTo(controller);
  });
  $('.proccess-layer').click(function(){
    $('.infoblob__show').removeClass('active');
    $('.proccess-layer').removeClass('active');
    $(".infoblob-wrapper").removeClass("disabled");
    $(".infoblob-wrapper").removeClass("disabled-2");
    $(".infoblob-wrapper").removeClass("disabled-3");
    $(".infoblob-wrapper").removeClass("disabled-32");
    $(".infoblob-wrapper").removeClass("disabled-4");
    $('.infoblob__hidden').stop().slideUp();
  });
  $("#process-easy-1 .infoblob__show").click(function (event) {
    let self = $(this);
    self.toggleClass("active");
    self = self.parents(".infoblob-wrapper");
    $('.proccess-layer').toggleClass('active');
    $(".infoblob-wrapper").toggleClass("disabled");
    $(".infoblob-wrapper").addClass("transition");
    self.removeClass("disabled");
    self.find(".infoblob__hidden:first").stop().slideToggle();
    event.preventDefault();
	var widthScreen = $(window).width();
	var svg1Back = document.getElementById("svgroad-back");
	let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);
	svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 2709px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-200,0,-200,200
	  l 0, 100
	"></path>`;
  });
  $("#process-easy-2 .infoblob__show").click(function (event) {
    let self = $(this);
    self.toggleClass("active");
    self = self.parents(".infoblob-wrapper");
    $('.proccess-layer').toggleClass('active')
    $(".infoblob-wrapper").toggleClass("disabled-2");
    $(".infoblob-wrapper").addClass("transition");
    self.removeClass("disabled-2");
    self.find(".infoblob__hidden:first").stop().slideToggle();
    event.preventDefault();
	var widthScreen = $(window).width();
	var svg1Back = document.getElementById("svgroad-back");
	let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);
	svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 2216px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-200,0,-200,200
	  l 0, 100
	"></path>`;
  });
  $("#process-easy-3 .infoblob__show").click(function (event) {
    let self = $(this);
    self.toggleClass("active");
    self = self.parents(".infoblob-wrapper");
    $('.proccess-layer').toggleClass('active')
    $(".infoblob-wrapper").toggleClass("disabled-3");

    $(".infoblob-wrapper").addClass("transition");
    self.removeClass("disabled-3");
    self.find(".infoblob__hidden:first").stop().slideToggle();
  //   $("#process-easy-3 .infoblob-label--alt").css("display", "none");
  //   setTimeout( ( )=>{
		// 	$("#process-easy-3 .infoblob-label--alt").fadeIn(1);
		// },400)
	// if(self.hasClass( "disabled-32" )){
	// 	setTimeout( ( )=>{
	// 		self.toggleClass("disabled-32");
	// 	},400)
	// }else{
	// 	self.toggleClass("disabled-32");
	// }
	var widthScreen = $(window).width();
	var svg1Back = document.getElementById("svgroad-back");
	let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);
	svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 1238px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-200,0,-200,200
	  l 0, 100
	"></path>`;
    event.preventDefault();
  });
  $("#process-easy-4 .infoblob__show").click(function (event) {
    let self = $(this);
    self.toggleClass("active");
    self = self.parents(".infoblob-wrapper");
    $('.proccess-layer').toggleClass('active')
    $(".infoblob-wrapper").toggleClass("disabled-4");
    $(".infoblob-wrapper").addClass("transition");
    self.removeClass("disabled-4");
    self.find(".infoblob__hidden:first").stop().slideToggle();
	// if(self.hasClass( "disabled-32" )){
	// 	setTimeout( ( )=>{
	// 		self.toggleClass("disabled-32");
	// 	},400)
	// }else{
	// 	self.toggleClass("disabled-32");
	// }
	var widthScreen = $(window).width();
	var svg1Back = document.getElementById("svgroad-back");
	let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);
	svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 745px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-200,0,-200,200
	  l 0, 100
	"></path>`;
    event.preventDefault();
  });

  function svgrize() {
    var widthScreen = $(window).width();
    var svg1 = document.getElementById("svgroad");
    var svg1Back = document.getElementById("svgroad-back");
	let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);

    svg1.innerHTML = `<path class="svg-lg" fill="none"
		d="M 0,120.0 l ${widthScreenSvg},0
		c 0,0,200,0,200,200
		c 0,0,0,200,-200,200
		l -810,0
		c 0,0,-165,0,-165,200
		l 0, 100
	  "></path>`;
    svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 2009.22px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-165,0,-165,200
	  l 0, 100
	"></path>`;
  }
  svgrize();
  function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dashoffset", lineLength);
  }

  var $svgscroll = $("path#svgscroll");

  pathPrepare($svgscroll);

  var controller = new ScrollMagic.Controller();

  var tween = new TimelineMax()
    .add(
      TweenMax.to($svgscroll, 1, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.to("#svgroad-back path", 1, { stroke: "#891265", ease: Linear.easeNone }),
      0
    );

  var scene = new ScrollMagic.Scene({
    triggerElement: "#svgtrigger",
    duration: 900,
    tweenChanges: true,
  })
    .setTween(tween).addTo(controller);
	//.addIndicators()

});

//funciones 9 gestion de proyectos


$(document).ready(function(){
  $(window).click(function() {
  $('.trg-c').each(function(){
    $(this).removeClass('inactivo')
    $(this).find('p').addClass('hidden')
    $(this).find('.vmas').removeClass('hidden')
    $(this).find('.vmnos').addClass('hidden')
    $(this).removeClass('h-[550px]').addClass('h-[240px]')
    $(this).removeClass("activo")
  })
});
$('.trg-c').click(function(e){
  e.stopPropagation()
})
$('.trg-c a.vmas').click(function(e){
  $('.trg-c').each(function(){
    $(this).removeClass('inactivo')
    $(this).find('p').addClass('hidden')
    $(this).find('.vmas').removeClass('hidden')
    $(this).find('.vmnos').addClass('hidden')
    $(this).removeClass('h-[550px]').addClass('h-[240px]')
    $(this).removeClass("activo")
  })
  let sefl = $(this);
  $(this).parent().addClass("activo")
  $(this).parent().removeClass("inactivo")
  $('.trg-c a').not(this).parent().addClass("inactivo")
  $(this).parent().removeClass("inactivo")
  $(this).parent().find('p').removeClass('hidden')
  $(this).parent().find('.vmas').addClass('hidden')
  $(this).parent().find('.vmnos').removeClass('hidden')
  $(this).parent().removeClass('h-[240px]').addClass('h-[550px]')
  if( !$(this).parent().hasClass('activo') ){
    $('trg-c a.vmas').not(this).parent().removeClass('activo')
  }
    e.stopPropagation();
})
$('.trg-c a.vmnos').click(function(){
  $('.trg-c').removeClass('inactivo')
  $(this).remove("activo")
  $(this).parent().find('p').addClass('hidden')
  $(this).parent().find('.vmas').removeClass('hidden')
  $(this).parent().find('.vmnos').addClass('hidden')
  $(this).parent().removeClass('h-[550px]').addClass('h-[240px]')
})
$('.br1').click(function(){
  var widthScreend = $(window).width();
  var svg1Backd = document.getElementById("svgroad-backdd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2709px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
$('.br2').click(function(){
  var widthScreend = $(window).width();
  var svg1Backd = document.getElementById("svgroad-backdd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2346px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
$('.br3').click(function(){
  var widthScreend = $(window).width();
  var svg1Backd = document.getElementById("svgroad-backdd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 1958px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
function svgrized() {
  var widthScreen = $(window).width();
  var svg1 = document.getElementById("svgroadd");
  var svg1Back = document.getElementById("svgroad-backdd");
  let widthScreenSvg = (widthScreen < 1400) ? (widthScreen - 320)  : (widthScreen - (widthScreen - 800) / 2);

  svg1.innerHTML = `<path class="svg-lg" fill="none"
  d="M 0,120.0 l ${widthScreen},0
  "></path>`;
  svg1Back.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2009.22px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreen},0
  "></path>`;
} 
svgrized();
function pathPrepared($el) {
  var tresmil = 3000
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dashoffset", tresmil);
}

var $svgscrolld = $("path#svgscrolld");

pathPrepared($svgscrolld);

var controllerd = new ScrollMagic.Controller();

var tweend = new TimelineMax()
  .add(
    TweenMax.to($svgscrolld, 1, {
      strokeDashoffset: 0,
      ease: Linear.easeNone,
    })
  )
  .add(
    TweenMax.to("#svgroad-backd path", 1, { stroke: "#891265", ease: Linear.easeNone }),
    0
  );

  var scened = new ScrollMagic.Scene({
    triggerElement: "#svgtriggerd",
    duration: 900,
    tweenChanges: true,
  })
  .setTween(tweend).addTo(controllerd);
})
$(document).ready(function () {

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

  $(window).scroll(function() {
     if($('#section-service-1').length){
      var hT = $('#section-service-1').offset().top,
          hH = $('#section-service-1').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop() + 10;
      if (wS > (hT+hH-wH)){
          console.log('H1 on the view!');
          $('#section-service-1').addClass('active');
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

  function initSwipersLogros() {
    var swiper = new Swiper(".mySwiperLogros", {
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
          slidesPerView: 4,
          spaceBetween: 32,
          grid: {
            rows: 1
          }
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 24,
          grid: {
            rows: 1
          }
        }
      },
    },
    );
    // console.log('window was resized', screen.width);
  }
  initSwipersLogros();
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
        prevEl: ".mySwiperS3-left-page",
        nextEl: ".mySwiperS3-right-pag",
      },

    },
    );
    // console.log('window was resized', screen.width);
  }
  initSwipersEquipment();
  function initSwipersPrueba() {
    var galleryThumbs = new Swiper('.somos-slider-thumbs', {
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centerInsufficientSlides: true,
      slideToClickedSlide: true,
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
		c 0,0,-200,0,-200,200
		l 0, 100
	  "></path>`;
    svg1Back.innerHTML = `<path class="svg-lg" id="svgscroll" style="stroke-dasharray: 3009.22px; stroke-dashoffset: 2009.22px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvg},0
	  c 0,0,200,0,200,200
	  c 0,0,0,200,-200,200
	  l -810,0
	  c 0,0,-200,0,-200,200
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
  var svg1Backd = document.getElementById("svgroad-backd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2709px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
$('.br2').click(function(){
  var widthScreend = $(window).width();
  var svg1Backd = document.getElementById("svgroad-backd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2346px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
$('.br3').click(function(){
  var widthScreend = $(window).width();
  var svg1Backd = document.getElementById("svgroad-backd");
  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 1958px; stroke: #891265;" fill="none"
  d="M 0,120.0 l ${widthScreenSvgd},0
  "></path>`;
});
function svgrized() {
  var widthScreen = $(window).width();
  var svg1 = document.getElementById("svgroadd");
  var svg1Back = document.getElementById("svgroad-backd");
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
  //var lineLength = $el[0].getTotalLength();
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
TweenMax.to("#svgroad-back path", 1, { stroke: "#891265", ease: Linear.easeNone }),
0
);

var scened = new ScrollMagic.Scene({
triggerElement: "#svgtrigger",
duration: 900,
tweenChanges: true,
})
.setTween(tweend).addTo(controllerd);
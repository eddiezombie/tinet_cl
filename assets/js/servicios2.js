$(document).ready(function () {

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

	$('.cbuss').slick({
	  slidesToShow: 1,
	  arrows: true,
	  centerMode: false,
	  centerPadding: '60px',
	  slidesToScroll: 1,
	  variableWidth: false,
	  infinite:false,
	  prevArrow: "<div class='page left bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-60px] left-[216px]'><i class='icon-arrow-left-page'></i></div>",
	  nextArrow: "<div class='page right bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-60px] left-[280px]'><i class='icon-arrow-right-page'></i></div>",
	})

	$('.cbuss').on('afterChange', function(event, slick, currentSlide) {
	  if (slick.$slides.length-1 == currentSlide) {
	    $('.cbuss__bg').hide();
	  }else{
	    $('.cbuss__bg').show();
	  }
	})

	$('.cvideo').slick({
	  slidesToShow: 1,
	  arrows: false,
	  centerMode: false,
	  slidesToScroll: 1,
	  variableWidth: false,
	  dots: true
	})

	$('.cbuss').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var suma = currentSlide + 1;
	  $('.dspnum .numbu').text(suma)

	});

	$('.video').parent().click(function () {
	  if( $(this).children(".video").get(0).paused ){
	      $(this).children(".video").get(0).play();
	      $(this).children(".playBtn").fadeOut();
	  }else{
	      $(this).children(".video").get(0).pause();
	      $(this).children(".playBtn").fadeIn();
	  }
	});


	$('.expectations-slider').slick({
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 1095,
	      settings: {
	        adaptiveHeight: true
	      }
	    }
	  ]
	});

	if($('.expectations-slider')){
	  $('.expectations-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	    let current = currentSlide + 1;
	    $('#pagination-number').text("0" + current);
	  });
	}

	var gliders = document.querySelectorAll("[id^=swiper-our-cap-lista]");

	gliders.forEach((glide) => {
	  if (glide.id.includes("lista-4")) {
	    var glider = document.querySelector(`#${glide.id}.swiper-glider`);

	    new Glider(glider, {
	      type: "carousel",
	      draggable: false,
	      slidesToShow: 1,
	      rewind: true,
	      arrows: {
	        prev: `.${glide.id}-left-page`,
	        next: `.${glide.id}-right-page`,
	      },
	      Breakpoints:{
	        450: { perView: 1 }
	      }
	    });
	  } else {
	    var glider = document.querySelector(`#${glide.id}.swiper-glider`);

	    new Glider(glider, {
	      type: "carousel",
	      draggable: false,
	      slidesToShow: 1.5,
	      slidesToScroll: 1,
	      rewind: true,
	      arrows: {
	        prev: `.${glide.id}-left-page`,
	        next: `.${glide.id}-right-page`,
	      },
	    });
	  }
	});

	var indexourCap1 = 1;
	var indexourCap2 = 1;
	var indexourCap3 = 1;
	var indexourCap4 = 1;

	var paginations = document.querySelectorAll("[id^=swiper-our-cap-page]");

	paginations.forEach((page) => {
	  page.innerHTML = "0" + 1;
	});

	function changePage1() {
	  let da = document.querySelectorAll(
	    "#swiper-our-cap-lista-1 .swiper-our-cap-lista-item"
	  );
	  let property = Object.getOwnPropertyNames(da);
	  property.forEach((x) => {
	    console.log(x, da[x].classList.contains("active"), da[x]);
	    if (da[x].classList.contains("active")) {
	      if (Number(x) + 2 > da.length) {
	        indexourCap1 = 1;
	      } else {
	        indexourCap1 = Number(x) + 2;
	      }
	    }
	  });
	  document.getElementById("swiper-our-cap-page-1").innerHTML =
	    "0" + indexourCap1;
	}
	function changePage2() {
	  let da2 = document.querySelectorAll(
	    "#swiper-our-cap-lista-2 .swiper-our-cap-lista-item"
	  );
	  let property2 = Object.getOwnPropertyNames(da2);
	  property2.forEach((x2) => {
	    console.log(x2, da2[x2].classList.contains("active"), da2[x2]);
	    if (da2[x2].classList.contains("active")) {
	      if (Number(x2) + 2 > da2.length) {
	        indexourCap2 = 1;
	      } else {
	        indexourCap2 = Number(x2) + 2;
	      }
	    }
	  });
	  document.getElementById("swiper-our-cap-page-2").innerHTML =
	    "0" + indexourCap2;
	}
	function changePage3() {
	  let da = document.querySelectorAll(
	    "#swiper-our-cap-lista-3 .swiper-our-cap-lista-item"
	  );
	  let property = Object.getOwnPropertyNames(da);
	  property.forEach((x) => {
	    console.log(x, da[x].classList.contains("active"), da[x]);
	    if (da[x].classList.contains("active")) {
	      if (Number(x) + 2 > da.length) {
	        indexourCap3 = 1;
	      } else {
	        indexourCap3 = Number(x) + 2;
	      }
	    }
	  });
	  document.getElementById("swiper-our-cap-page-3").innerHTML =
	    "0" + indexourCap3;
	}

	$('.case-study-swiper').click(function(){
	  let self = $(this);
	  let da = document.querySelectorAll(
	    "#swiper-our-cap-lista-4 .swiper-lista-item"
	  );
	  let property = Object.getOwnPropertyNames(da);
	  property.forEach((x) => {
	    if (da[x].classList.contains("active")) {
	      indexourCap4 = Number(x) + 1;
	      if(self.hasClass('swipe-left')){
	        --indexourCap4;
	        if(indexourCap4 < 1) indexourCap4 = 3;
	      }else{
	        ++indexourCap4;
	        if(indexourCap4 > 3) indexourCap4 = 1;
	      }
	    }
	  });
	  document.getElementById("swiper-our-cap-page-4").innerHTML = "0" + indexourCap4;
	});

	var gliders = document.querySelectorAll("[id^=swiper-our-cap-lista]");

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

	if($('#section-service-4').length > 0){
	  animate_numbers("#section-service-4");
	}

	$('.slide-circle-one').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var suma = currentSlide + 1;
	  $(".index-uno .index-slide").text(suma);
	});
	$('.slide-circle-two').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var suma = currentSlide + 1;
	  $(".index-dos .index-slide").text(suma);
	});
	$('.slide-circle-three').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var suma = currentSlide + 1;
	  $(".index-tres .index-slide").text(suma);
	});
	$('.slide-somos').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var suma = currentSlide + 1;
	  $(".index-uno .index-slide").text(suma);
	});

	$(".slide-circle-one").slick({
	  arrows: true,
	  centerMode: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  variableWidth: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	})
	$(".slide-circle-two").slick({
	    arrows: true,
	    centerMode: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    variableWidth: true,
	    infinite: true,
	    responsive: [
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	})
	$(".slide-circle-three").slick({
	  arrows: true,
	  centerMode: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  variableWidth: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	})

	$(".content-circle").on("click",function() {
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


	  $(window).on("click",function() {
	  $('.trg-c').each(function(){
	    $(this).removeClass('inactivo')
	    $(this).find('p').addClass('hidden')
	    $(this).find('.vmas').removeClass('hidden')
	    $(this).find('.vmnos').addClass('hidden')
	    $(this).removeClass('h-[550px]').addClass('h-[240px]')
	    $(this).removeClass("activo")
	  })
	});
	$('.trg-c').on("click",function(e){
	  e.stopPropagation()
	})
	$('.trg-c a.vmas').on("click",function(e){
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
	$('.trg-c a.vmnos').on("click",function(){
	  $('.trg-c').removeClass('inactivo')
	  $(this).remove("activo")
	  $(this).parent().find('p').addClass('hidden')
	  $(this).parent().find('.vmas').removeClass('hidden')
	  $(this).parent().find('.vmnos').addClass('hidden')
	  $(this).parent().removeClass('h-[550px]').addClass('h-[240px]')
	})

	$('.br1').on("click",function(){
	  var widthScreend = $(window).width();
	  var svg1Backd = document.getElementById("svgroad-backdd");
	  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
	  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2709px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvgd},0
	  "></path>`;
	});
	$('.br2').on("click",function(){
	  var widthScreend = $(window).width();
	  var svg1Backd = document.getElementById("svgroad-backdd");
	  let widthScreenSvgd = (widthScreend < 1400) ? (widthScreend - 320)  : (widthScreend - (widthScreend - 800) / 2);
	  svg1Backd.innerHTML = `<path class="svg-lg" id="svgscrolld" style="stroke-dasharray: 3000px; stroke-dashoffset: 2346px; stroke: #891265;" fill="none"
	  d="M 0,120.0 l ${widthScreenSvgd},0
	  "></path>`;
	});
	$('.br3').on("click",function(){
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







});



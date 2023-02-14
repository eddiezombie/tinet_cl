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
	  if(slick.$slider[0].classList.contains('cvideo')) return;
	  var suma = currentSlide + 1;
	  $('.dspnum .numbu').text(suma);
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

	  $('.proccess-layer').on("click",function(){
	    $('.infoblob__show').removeClass('active');
	    $('.proccess-layer').removeClass('active');
	    $(".infoblob-wrapper").removeClass("disabled");
	    $(".infoblob-wrapper").removeClass("disabled-2");
	    $(".infoblob-wrapper").removeClass("disabled-3");
	    $(".infoblob-wrapper").removeClass("disabled-32");
	    $(".infoblob-wrapper").removeClass("disabled-4");
	    $('.infoblob__hidden').stop().slideUp();
	  });

	  $("#process-easy-1 .infoblob__show").on("click",function (event) {
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

	  $("#process-easy-2 .infoblob__show").on("click",function (event) {
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

	  $("#process-easy-3 .infoblob__show").on("click",function (event) {
	    let self = $(this);
	    self.toggleClass("active");
	    self = self.parents(".infoblob-wrapper");
	    $('.proccess-layer').toggleClass('active')
	    $(".infoblob-wrapper").toggleClass("disabled-3");

	    $(".infoblob-wrapper").addClass("transition");
	    self.removeClass("disabled-3");
	    self.find(".infoblob__hidden:first").stop().slideToggle();

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

	  $("#process-easy-4 .infoblob__show").on("click",function (event) {
	    let self = $(this);
	    self.toggleClass("active");
	    self = self.parents(".infoblob-wrapper");
	    $('.proccess-layer').toggleClass('active')
	    $(".infoblob-wrapper").toggleClass("disabled-4");
	    $(".infoblob-wrapper").addClass("transition");
	    self.removeClass("disabled-4");
	    self.find(".infoblob__hidden:first").stop().slideToggle();

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






});




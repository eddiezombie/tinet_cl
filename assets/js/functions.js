$(document).ready(function () {

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
    console.log('window was resized', screen.width);
  }
  initSwipersAll();

  function animate_numbers(id) {
    var count = 0;
    var classToAnimate = ".animate-numbers";
    var offsetToScrollThrough = 500;
    var animationDuration = 9000;
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

  animate_numbers("#section-service-4");
  
	$(".content-circle").click(function() {
		if (!$(this).hasClass("active")) {
			$(".content-circle").removeClass("active")
			$(this).addClass("active")

			$(".pesta-page").hide();
			if ($(this).hasClass("design")) {
				$(".header-exp").addClass("design", 500).removeClass("research", 500).removeClass("consulting", 500);
				$(".pesta-page.design").show();
			} else if ($(this).hasClass("research")) {
				$(".header-exp").addClass("research", 500).removeClass("design", 500).removeClass("consulting", 500);
				$(".pesta-page.research").show();
			} else if ($(this).hasClass("consulting")) {
				$(".header-exp").addClass("consulting", 500).removeClass("design", 500).removeClass("research", 500);
				$(".pesta-page.consulting").show();
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
    if (winposition > divposition) {
      //do stuff
      // console.log("Show Blob1");
      if ($("#process-easy-1").hasClass("haslabel")) {
        $("#process-easy-1 .infoblob-label").fadeIn(1);
      }
      $("#process-easy-1 .infoblob").fadeIn(500);
      if (winposition > divposition1) {
        // console.log("Show Blob2");
        if ($("#process-easy-2").hasClass("haslabel")) {
          $("#process-easy-2 .infoblob-label").fadeIn(1);
        }
        $("#process-easy-2 .infoblob").fadeIn(500);
      } else {
        // console.log("Hide Blob2");
      }
      if (winposition > divposition2) {
        // console.log("Show Blob3");
        if ($("#process-easy-3").hasClass("haslabel")) {
          $("#process-easy-3 .infoblob-label--alt").fadeIn(1);
        }
        $("#process-easy-3 .infoblob-label--alt").fadeIn(1);
        $("#process-easy-3 .infoblob").fadeIn(500);
      } else {
        // console.log("Hide Blob3");
      }
      if (winposition > divposition3) {
        // console.log("Show Blob4");
        if ($("#process-easy-4").hasClass("haslabel")) {
          $("#process-easy-4 .infoblob-label").fadeIn(1);
        }
        $("#process-easy-4 .infoblob").fadeIn(500);
      } else {
        // console.log("Hide Blob4");
      }
    } else {
      // console.log("Hide Blob1");
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
    // $(".infoblob-wrapper").toggleClass("disabled-4");
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

(function() {
    var dt = document.querySelector(".destroy");
    var et = document.querySelector(".entr");
    setTimeout(() => {
        dt.remove();
        et.classList.add("active");
    }, 2500);
})();
$('.slide-circle').on('init', function(event, slick, currentSlide, nextSlide){
    // $(".slide-circle .slick-active").next().addClass("scale-75 mt-[150px]");
    // $(".slide-circle .slick-active").prev().addClass("scale-75 mt-[150px]");
    // $(".slide-circle .slick-active").next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
    // $(".slide-circle .slick-active").prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
    // $(".slide-circle .slick-active").next().next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
    // $(".slide-circle .slick-active").prev().prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
});
// $('.slide-circle').on('swipe', function(event, slick, currentSlide, nextSlide){
//     $(".slide-circle .slick-slide").removeClass("scale-75 mt-[150px] scale-[.45] ml-[-200px] mr-[-200px] mt-[390px]");
//     $(".slide-circle .slick-active").next().addClass("scale-75 mt-[150px]");
//     $(".slide-circle .slick-active").prev().addClass("scale-75 mt-[150px]");
//     $(".slide-circle .slick-active").next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
//     $(".slide-circle .slick-active").prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
//     $(".slide-circle .slick-active").next().next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
//     $(".slide-circle .slick-active").prev().prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
// });
$('.slide-circle').on('afterChange', function(event, slick, currentSlide, nextSlide){
    // $(".slide-circle .slick-slide").removeClass("scale-75 mt-[150px] scale-[.45] ml-[-200px] mr-[-200px] mt-[390px]");
    // $(".slide-circle .slick-active").next().addClass("scale-75 mt-[150px]");
    // $(".slide-circle .slick-active").prev().addClass("scale-75 mt-[150px]");
    // $(".slide-circle .slick-active").next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
    // $(".slide-circle .slick-active").prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
    // $(".slide-circle .slick-active").next().next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
    // $(".slide-circle .slick-active").prev().prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
  });
// $('.slide-circle').on('click', '.slick-slide', function(){
//     $(".slide-circle .slick-slide").removeClass("scale-75 mt-[150px] scale-[.45] ml-[-200px] mr-[-200px] mt-[390px]");
//     $(".slide-circle .slick-active").next().addClass("scale-75 mt-[150px]");
//     $(".slide-circle .slick-active").prev().addClass("scale-75 mt-[150px]");
//     $(".slide-circle .slick-active").next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
//     $(".slide-circle .slick-active").prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
//     $(".slide-circle .slick-active").next().next().next().addClass("scale-[.45] mt-[390px] ml-[-200px]");
//     $(".slide-circle .slick-active").prev().prev().prev().addClass("scale-[.45] mt-[390px] mr-[-200px]");
//     $('.slide-circle').slick('slickGoTo', $(this).attr('index'))
// })
$('.slide-circle').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  focusOnSelect: true,
  draggable: false
});
//1
$('.slider-v-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav'
});
$('.slider-v-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-v-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    }
  ]
});
//2
$('.slider-v-for-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-2'
});
$('.slider-v-nav-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-v-for-2',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    }
  ]
});
//3
$('.slider-v-for-3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-3'
});
$('.slider-v-nav-3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-v-for-3',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    }
  ]
});
//4
$('.slider-v-for-4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-4'
});
$('.slider-v-nav-4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-v-for-4',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    }
  ]
});
$('.casoss').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  //focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
})
var $vt = $("ul.vid-btn-tabs li"),
clickVT = false;

$vt.click(function () {
  if (clickVT) {
    return;
  }
  if (!$(this).hasClass("active")) {
    var tn = $(this).index();
    var nc = tn + 1;
    $("ul.vid-btn-tabs > li.active").removeClass("active");
    $(this).addClass("active");
    $("ul.cvn > li.active").fadeOut(300, function () {
      $(this).removeClass("active");
      $("ul.cvn > li:nth-child(" + nc + ")")
        .addClass("active")
        .fadeIn(300);
    });
  }

  clickVT = true;
  setTimeout(function () {
    clickVT = false;
  }, 500);
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
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-reveal");
      } else {
        reveals[i].classList.remove("active-reveal");
      }
    }
  }
  window.addEventListener("scroll", reveal);
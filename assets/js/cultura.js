$(document).ready(function () {

  let cultura = 1;

  function enableScroll() {
    $('body').removeClass('stop-scrolling');
  }

  function nuestracultura() {
    let dt = document.querySelector(".destroy");
    dt.remove();
    let et = document.querySelector(".entr");
    et.classList.add("active");
    enableScroll();
  }

  $(window).scroll(function() {
     if($('#cultura-lock').length ){
      var hT = $('#cultura-lock').offset().top,
          hH = $('#cultura-lock').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > 20){
          if(cultura){
            --cultura;
            $('body').addClass('stop-scrolling');
            $("#cultura-stage1").addClass('fade-out-top');
            $("#cultura-stage2").addClass('fade-out-bottom');
            setTimeout(nuestracultura, 1410);
          }
      }
     }
  });

const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

$('.carousel__item').on("click", function (event) {
  var newActive = $(this)[0]
  var isItem = newActive.closest(".carousel__item");

  if (!isItem || newActive.classList.contains("carousel__item_active")) {
    return;
  }

  update(newActive);
})

const update = function (newActive) {
  const newActivePos = parseInt(newActive.dataset.pos);

  const current = elems.find((elem) => parseInt(elem.dataset.pos) == 0);
  const prev = elems.find((elem) => parseInt(elem.dataset.pos) == -1);
  const next = elems.find((elem) => parseInt(elem.dataset.pos) == 1);
  const first = elems.find((elem) => parseInt(elem.dataset.pos) == -2);
  const last = elems.find((elem) => parseInt(elem.dataset.pos) == 2);
  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = parseInt(item.dataset.pos)

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

});

$('.cultura-slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
(function() {
    var dt = document.querySelector(".destroy");
    var et = document.querySelector(".entr");
    $('.seeMoreB').click(function(){
      $('.bx-b').each(function(){
        $(this).toggleClass("activo")
      })
    })
})();
$('.vid-btn-tabs').click(function(){
  setTimeout(() => {
    $('.slider-v-for-2').slick('resize');
    $('.slider-v-for-2').slick('reinit');
    $('.slider-v-for-3').slick('resize');
    $('.slider-v-for-3').slick('reinit');
    $('.slider-v-for-4').slick('resize');
    $('.slider-v-for-4').slick('reinit');
  }, 400);
})
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
$('.slider-v-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav'
});
$('.slider-v-nav').slick({
  slidesToShow: 1,
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
$('.slider-v-for-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-2'
});
$('.slider-v-nav-2').slick({
  slidesToShow: 1,
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
$('.slider-v-for-3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-3'
});
$('.slider-v-nav-3').slick({
  slidesToShow: 1,
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

$('.slider-v-for-4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-v-nav-4'
});
$('.slider-v-nav-4').slick({
  slidesToShow: 1,
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
  variableWidth: true,
  prevArrow: "<div class='page left bg-[#003A5C] flex flex-col cursor-pointer items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-75px] right-[50%] mr-[15px]'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right bg-[#003A5C] flex flex-col cursor-pointer items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-75px] left-[50%] ml-[15px]'><i class='icon-arrow-right-page'></i></div>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
})
$('.slideBe').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: "<div class='page left bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-75px] right-[50%] mr-[15px]'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-75px] left-[50%] ml-[15px]'><i class='icon-arrow-right-page'></i></div>",

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
    $("ul.cvn > li.active").removeClass('opacity0');
    $("ul.cvn > li.active").removeClass('opacity1');
    $("ul.cvn > li.active").removeClass('active');
    var newtab = $("ul.cvn > li:nth-child(" + nc + ")");
    newtab.addClass("active");
    newtab.addClass("opacity0");
    setTimeout(() => {
      newtab.addClass("opacity1");
    }, 440)

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
      }
    }
  }
  window.addEventListener("scroll", reveal);
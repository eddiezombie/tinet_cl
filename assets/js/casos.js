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

$(".contenedor-slider").slick({
  arrows: true,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  infinite: false,
  prevArrow: "<div class='page left'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right'><i class='icon-arrow-right-page'></i></div>",
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

$('.solucion-slide').slick({
  arrows: true,
  centerMode: false,
  slidesToShow: 1,
  variableWidth: true,
  infinite: true,
  prevArrow: "<div class='page left'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right'><i class='icon-arrow-right-page'></i></div>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});

$('.cg-slider').slick({
  slidesToShow: 4,
  arrows: true,
  variableWidth: true,
  infinite: true,
  prevArrow: "<div class='page left'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right'><i class='icon-arrow-right-page'></i></div>",
  responsive: [
    {
      breakpoint: 768,
      settings:{
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 460,
      settings:{
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
})

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

$('.case-study-swiper').on("click",function(){
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


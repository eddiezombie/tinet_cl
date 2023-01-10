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

$('.casos-relacionados').slick({
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
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
$('.tab-cifras').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true
            }
        }
    ]
})
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
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
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

$('.cbuss').slick({
  slidesToShow: 1,
  arrows: true,
  centerMode: false,
  slidesToScroll: 1,
  variableWidth: false,
  infinite:false,
  prevArrow: "<div class='page left bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-60px] left-[216px]'><i class='icon-arrow-left-page'></i></div>",
  nextArrow: "<div class='page right bg-[#003A5C] flex flex-col items-center justify-center text-[#ffffff] w-[40px] h-[40px] rounded-full absolute bottom-[-60px] left-[280px]'><i class='icon-arrow-right-page'></i></div>",
})
$('.cvideo').slick({
  slidesToShow: 1,
  arrows: false,
  centerMode: false,
  slidesToScroll: 1,
  variableWidth: false,
  dots: true
})
// var reproductor = videojs('fm-video', {
//   fluid: true,
//   aspectRatio: '9:16'
// });
$('.cbuss').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var suma = currentSlide + 1;
  console.log(suma);
  $('.dspnum .numbu').text(suma)
  //$(".index-uno .index-slide").text(suma);
});
//video carousel
$('.video').parent().click(function () {
  if( $(this).children(".video").get(0).paused ){
      $(this).children(".video").get(0).play();
      $(this).children(".playBtn").fadeOut();
  }else{
      $(this).children(".video").get(0).pause();
      $(this).children(".playBtn").fadeIn();
  }
});
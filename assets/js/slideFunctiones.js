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
    slidesToShow: 3,
    arrows: true,
    variableWidth: true,
    infinite: false,
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
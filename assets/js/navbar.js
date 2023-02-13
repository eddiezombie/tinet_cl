$(".tr-ul li a").on("click",function(){
    $(".tr-ul li a").not(this).next('.menu-desplegable').fadeOut("fast");
    $(this).next('.menu-desplegable').fadeToggle("fast");
    $(this).toggleClass('btn-nav__active');
})
$(window).on("click",function() {
    $('.menu-desplegable').fadeOut("fast");
    $(".select-lang").fadeOut("fast");
});
$('.header-content').on("click",function(event){
    event.stopPropagation();
});


var $tabsm = $("ul.ul-stm li"),
clickDisabledm = false;

$tabsm.on("click",function () {
  if (clickDisabledm) {
    return;
  }
  if (!$(this).hasClass("active")) {
    var tabNumm = $(this).index();
    var nthChildm = tabNumm + 1;
    $("ul.ul-stm li.active").removeClass("active");
    $(this).addClass("active");
    $("ul.content-ul-stm li.active").fadeOut(300, function () {
      $(this).removeClass("active");
      $("ul.content-ul-stm li:nth-child(" + nthChildm + ")")
        .addClass("active")
        .fadeIn(300);
    });
  }

  clickDisabledm = true;
  setTimeout(function () {
    clickDisabledm = false;
  }, 500);
});

$(".es-btn").on("click", function(e){
  $(".select-lang").fadeToggle("fast");
  e.stopPropagation();
})
$(".select-lang a").on("click",function(e){
  if( !$(this).hasClass("active")  ){
    $(this).addClass("active")
    $(".select-lang a").not(this).removeClass("active")
  }
  e.stopPropagation();
})

$(".responsive-burger").on("click", function(){
  $(this).toggleClass("active");
  $(".left-navbar").toggleClass("active");
  $(".screen-block").toggleClass("active");
})

$(".trg-servicios").on("click", function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rServicios").fadeIn("fast")
  });
})
$(".trg-industria").on("click", function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rIndustria").fadeIn("fast")
  });
})
$(".trg-talento").on("click", function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rTalento").fadeIn("fast")
  });
})
$(".trg-idioma").on("click", function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rIdioma").fadeIn("fast")
  });
})
$(".returnM").on("click", function(){
  $(this).parent().fadeOut("fast", function(){
    $(".first-ul").fadeIn("fast")
  })
})
$(".nb").on("click", function(){
  if( $(this).hasClass("active") ){
    $(this).removeClass("active")
  }
  $(".nb").not(this).removeClass("active");
  $(".nb").next(".cont-innerMS").not(this).hide();
  $(this).addClass("active");
  $(this).next(".cont-innerMS").show();
})
$(".tr-ul li a").click(function(){
    $(".tr-ul li a").not(this).next('.menu-desplegable').fadeOut("fast");
    $(this).next('.menu-desplegable').fadeToggle("fast");
    $(this).toggleClass('btn-nav__active');
})
$(window).click(function() {
    $('.menu-desplegable').fadeOut("fast");
    $(".select-lang").fadeOut("fast");
});
$('.header-content').click(function(event){
    event.stopPropagation();
});


var $tabsm = $("ul.ul-stm li"),
clickDisabledm = false;

$tabsm.click(function () {
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

$(".es-btn").click(function(e){
  $(".select-lang").fadeToggle("fast");
  console.log('sd');
  e.stopPropagation();
})
$(".select-lang a").click(function(e){
  if( !$(this).hasClass("active")  ){
    $(this).addClass("active")
    $(".select-lang a").not(this).removeClass("active")
  }
  e.stopPropagation();
})

$(".responsive-burger").click(function(){
  $(this).toggleClass("active");
  $(".left-navbar").toggleClass("active");
  $(".screen-block").toggleClass("active");
})

$(".trg-servicios").click(function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rServicios").fadeIn("fast")
  });
})
$(".trg-industria").click(function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rIndustria").fadeIn("fast")
  });
})
$(".trg-talento").click(function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rTalento").fadeIn("fast")
  });
})
$(".trg-idioma").click(function(){
  $(".first-ul").fadeOut("fast", function(){
    $(".rIdioma").fadeIn("fast")
  });
})
$(".returnM").click(function(){
  $(this).parent().fadeOut("fast", function(){
    $(".first-ul").fadeIn("fast")
  })
})
$(".nb").click(function(){
  if( $(this).hasClass("active") ){
    $(this).removeClass("active")
  }
  $(".nb").not(this).removeClass("active");
  $(".nb").next(".cont-innerMS").not(this).hide();
  $(this).addClass("active");
  $(this).next(".cont-innerMS").show();
})
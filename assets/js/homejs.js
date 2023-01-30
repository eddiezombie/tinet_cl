$('.swipevideo').click(function(){
    $(this).removeClass('inittextorv').addClass('inittexto')
    $('.swpImg').removeClass('inittextorv').addClass('inittexto')
    $('.video-home').removeClass('initSlideVideorv').addClass('initSlideVideo')
    $('.line1').removeClass('initlinerv').addClass('initline')
    $('.line2').removeClass('initline2rv').addClass('initline2')
    $('.line3').removeClass('initline3rv').addClass('initline3')
    $('.line4').removeClass('initline4rv').addClass('initline4')
    $('.tituloPa').removeClass('inittextorv').addClass('inittexto')
    $('.animated2').removeClass('inittexto2rv').addClass('inittexto2')
    $('.animated3').removeClass('inittexto2rv').addClass('inittexto2')
    $('.video-home').children('video').get(0).play()
    $('.backbtn').removeClass('backbtntrgrv').addClass('backbtntrg')
})
$('.resswiper').click(function(){
    $('.resswiper').addClass('inittexto')
    $('.video-home').children('video').get(0).play()
})
//reverse
$('.backbtn').click(function(){
    $('.swipevideo').removeClass('inittexto').addClass('inittextorv')
    $('.swpImg').removeClass('inittexto').addClass('inittextorv')
    $('.video-home').removeClass('initSlideVideo').addClass('initSlideVideorv')
    $('.line1').removeClass('initline').addClass('initlinerv')
    $('.line2').removeClass('initline2').addClass('initline2rv')
    $('.line3').removeClass('initline3').addClass('initline3rv')
    $('.line4').removeClass('initline4').addClass('initline4rv')
    $('.tituloPa').removeClass('inittexto').addClass('inittextorv')
    $('.animated2').removeClass('inittexto2').addClass('inittexto2rv')
    $('.animated3').removeClass('inittexto2').addClass('inittexto2rv')
    $('.video-home').children('video')[0].pause();
    $('.backbtn').removeClass('backbtntrg').addClass('backbtntrgrv')
})

$('.playVideo').click(function(){
    $('.video-way').addClass('active')
    $('.video-way').children('video').get(0).play()
})

$('.playVideo2').click(function(){
    $('.video-way2').addClass('active')
    $('.video-way2').children('video').get(0).play()
})

$('.playVideo3').click(function(){
    $('.video-way3').addClass('active')
    $('.video-way3').children('video').get(0).play()
})

$('.playVideo4').click(function(){
    $('.video-way4').addClass('active')
    $('.video-way4').children('video').get(0).play()
})

$('.tab-button-video').click(function(){
    $('.video-way').children('video')[0].load();
    $('.video-way2').children('video')[0].load();
    $('.video-way3').children('video')[0].load();
    $('.video-way4').children('video')[0].load();
})
$(function () {
  var controller = new ScrollMagic.Controller();

  // movimiento paneles
  var tween1 = new TimelineMax()
    .to("#slideContainer", 1, { x: "-25%" })
    .to("#slideContainer", 1, { x: "-50%" })

  // s 1
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: 0,
    duration: "100%"
  })
    .setPin("#pinContainer")
    .setTween(tween1)
    .addTo(controller);

  // build a 1
  var tween2 = new TimelineMax().add([
    TweenMax.fromTo(
      "#sectionOne .linea1",
      1,
      {
        scale: 0.5,
        right: "230px"
      },
      {
        scale: 1,
        right: "1000px"
      }
    ),
    TweenMax.fromTo(
      "#sectionOne .linea2",
      1,
      {
        opacity: 0,
        right: "-405px"
      },
      {
        opacity: 1,
        right: "1000px"
      }
    ),
    TweenMax.fromTo(
      "#sectionOne .linea3",
      1,
      {
        opacity: 0,
        right: "-812px"
      },
      {
        opacity: 1,
        right: "1000px"
      }
    )
  ]);

  // build a 2
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    duration: "200%",
    offset: "200%" 
  })
    .setTween(tween2)
    .addTo(controller); 

});

  window.onscroll = function (e) {  
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 240 && window.pageYOffset <= 300 ){
    var vid = document.getElementById("vidHome")
    vid.play(); 
  }
  if(window.pageYOffset >= 1300 ){
    $('.header-content.dark').removeClass('bg-afterScrollrv').addClass('bg-afterScroll')
  }else{
    $('.header-content.dark').removeClass('bg-afterScroll').addClass('bg-afterScrollrv')
  }
} 
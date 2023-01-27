$(function () {
    var controller = new ScrollMagic.Controller(); // 1. create a scroll container
  
    // tween 1: define movement of panels
    var tween1 = new TimelineMax()
      .to("#slideContainer", 1, { x: "-25%" })
      .to("#slideContainer", 1, { x: "-50%" })
  
    // scene 1: create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: 0,
      duration: "100%"
    })
      .setPin("#pinContainer")
      .setTween(tween1)
      .addTo(controller);
  
    // build tween for animations on sectionTwo
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
  
    // build scene for tween2
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      duration: "200%",
      offset: "200%" // durations and offsets are based on the timing of your panels built on tween1
    })
      .setTween(tween2)
      .addTo(controller); //add this scene to the same scroll container
  
  });

window.onscroll = function (e) {  
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 240 && window.pageYOffset <= 300 ){
    var vid = document.getElementById("vidHome")
    vid.play(); 
  }
  if(window.pageYOffset >= 850 && window.pageYOffset <= 900 ){
    console.log('trigger header');
    $('.header-content.dark').removeClass('animHeaderRever').addClass('animHeader')
  }
} 
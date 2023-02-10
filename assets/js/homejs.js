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

  var tween1 = new TimelineMax()
    .to("#slideContainer", 1, { x: "-25%" })
    .to("#slideContainer", 1, { x: "-50%" })

  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: 0,
    duration: "100%"
  })
    .setPin("#pinContainer")
    .setTween(tween1)
    .addTo(controller);

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

  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    duration: "200%",
    offset: "200%" 
  })
    .setTween(tween2)
    .addTo(controller); 

});

  window.onscroll = function (e) {  
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

const tabs = document.querySelector(".tab");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const tabs2 = document.querySelector(".tab2");
const tabButton2 = document.querySelectorAll(".tab-button2");
const contents2 = document.querySelectorAll(".content2");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active"); 
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

tabs2.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton2.forEach((btn) => {
      btn.classList.remove("active2");
    });
    e.target.classList.add("active2");

    contents2.forEach((content) => {
      content.classList.remove("active2");
    });
    const element = document.getElementById(id);
    element.classList.add("active2");
  }
};

$(document).ready(function () {
  $('#proyecto').click(function(event){
    event.preventDefault();
    $('.projects__card').toggleClass('projects__card--disabled');
  });

  $('.projects__arrow').click(function(){
    $('.projects__card').toggleClass('projects__card--disabled');
  });

  $('.projects__overlay').click(function(){
    $('.projects__overlay').removeClass('projects__overlay--active');
    $('.projects__sidebar').removeClass('projects__sidebar--active');
  });

  $('.projects__card').click(function(){
    let self = $(this);
    if($( window ).width() > 800 && self.hasClass('projects__card--disabled')){
      $('.projects__card').toggleClass('projects__card--disabled');
      $('.projects__sidebar').removeClass('projects__sidebar--active');
    }
  });

  $('.projects__card__show').click(function(){
    let self = $(this);
    let card = self.parents('.projects__card');
    let data = "#" + self.attr('data-project');
    if(!(card.hasClass('projects__card--disabled') && $( window ).width() > 800)){
      $('.projects__overlay').addClass('projects__overlay--active');
      $('.projects__sidebar').removeClass('projects__sidebar--active');
      $(data).addClass('projects__sidebar--active');
    }
  });

  $('.projects__sidebar__close').click(function(event){
    $(this).parent().removeClass('projects__sidebar--active');
    $('.projects__overlay').removeClass('projects__overlay--active');
    event.preventDefault();
  });

  slick_slider();
  $(window).resize(slick_slider);

  function slick_slider() {
    var wrapper = $('.projects__slider')
    if ($(".projects .slick-initialized").length) {
      wrapper.slick('unslick');
    }
    wrapper.slick({
      mobileFirst: true, 
      responsive: [
        {
          breakpoint: 200,
          settings: {
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 800,
          settings: "unslick"
        }
      ]
    });
  }

  $('.revolution__td').click(function(){
    let self = $(this);
    let tab = "#" + self.attr('data-tab');
    $('.revolution__sidebar').removeClass('revolution__sidebar--active');
    $('.revolution__td').removeClass('revolution__td--active');
    self.addClass('revolution__td--active');
    $(tab).addClass('revolution__sidebar--active');
    $('.revolution__axis').removeClass('revolution__axis1');
    $('.revolution__axis').removeClass('revolution__axis2');
    $('.revolution__axis').removeClass('revolution__axis3');
    $('.revolution__axis').removeClass('revolution__axis4');
    
    if(tab == "#revsidebar1"){
      $('.revolution__axis').addClass('revolution__axis1');
    }
    if(tab == "#revsidebar2"){
      $('.revolution__axis').addClass('revolution__axis2');
    }
    if(tab == "#revsidebar3"){
      $('.revolution__axis').addClass('revolution__axis3');
    }
    if(tab == "#revsidebar4"){
      $('.revolution__axis').addClass('revolution__axis4');
    }
  });

  $('.revolution__sidebar__close').click(function(event){
    $(this).parent().removeClass('revolution__sidebar--active');
    event.preventDefault();
  });

  
});
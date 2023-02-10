var $tabs = $("ul.btn-t-iss li"),
  clickDisabled = false;

$tabs.click(function () {
  if (clickDisabled) {
    return;
  }
  if (!$(this).hasClass("active")) {
    var tabNum = $(this).index();
    var nthChild = tabNum + 1;
    $("ul.btn-t-iss > li.active").removeClass("active");
    $(this).addClass("active");
    $("ul.ctn-t-iss > li.active").fadeOut(300, function () {
      $(this).removeClass("active");
      $("ul.ctn-t-iss > li:nth-child(" + nthChild + ")")
        .addClass("active")
        .fadeIn(300);
    });
  }

  clickDisabled = true;
  setTimeout(function () {
    clickDisabled = false;
  }, 500);
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

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
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

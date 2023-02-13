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

$(document).ready(function () {
  function clickcaja(e) {
    var lista = $(this).find("ul"),
      triangulo = $(this).find("span:last-child");
    e.preventDefault();
    //lista.is(":hidden") ? $(this).find("ul").show() : $(this).find("ul").hide();
    $(this).find("ul").toggle();
    if (lista.is(":hidden")) {
      triangulo.removeClass("triangulosup").addClass("trianguloinf");
    }
    else {
      triangulo.removeClass("trianguloinf").addClass("triangulosup");
    }
  }
  function clickli(e) {
    var texto = $(this).find("p.texto").text(),
      seleccionado = $(this).parent().prev(),
      lista = $(this).closest("ul"),
      triangulo = $(this).parent().next();
    e.preventDefault();
    e.stopPropagation();
    seleccionado.text(texto);
    lista.hide();
    triangulo.removeClass("triangulosup").addClass("trianguloinf");
  }
  $(".cajaselect").click(clickcaja);
  $(".cajaselect").on("click", "li", clickli);
});
$('#portfolio').slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2
})

var portfolio = $("#portfolio");

$("#portfolio__arrow--left").on("click", function(event) {
    portfolio.slick("slickPrev");
})

$("#portfolio__arrow--right").on("click", function(event) {
    portfolio.slick("slickNext");
})
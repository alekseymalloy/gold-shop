$(document).ready(function () {
  $('select').niceSelect();

  $(".slider-template").slick({
    dots: true,
    slidesToShow: 3,
    prevArrow:"<div class='prevArrow'><img src='img/icon-left.png'></div>",
    nextArrow:"<div class='nextArrow'><img src='img/icon-right.png'></div>",
  })
});




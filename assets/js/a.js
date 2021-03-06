// (function ($, root, undefined) {
$(function () {
  $(".lazy").Lazy({
    effect: "fadeIn",
    effectTime: 500,
  });

  var profile_owl = $(".nfts-item__slider");
  profile_owl.owlCarousel({
    nav: true,
    dots: true,
    singleItem: true,
    navText: [
      "<img src='assets/images/prev.png'> Previous",
      "Next <img src='assets/images/next.png'>",
    ],
    lazyLoad: true,
    autoplay: 300,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 1,
    // slideBy: 5,
    loop: true,
    margin: 10,
  });

  var nfts_item_mobile = $(".nfts-item__js--mobile");
  nfts_item_mobile.owlCarousel({
    nav: true,
    dots: true,
    singleItem: true,
    navText: [
      "<img src='assets/images/prev.png'> Previous",
      "Next <img src='assets/images/next.png'>",
    ],
    lazyLoad: true,
    autoplay: 300,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 2,
    slideBy: 2,
    loop: true,
    margin: 10,
  });





  var gameplay__js = $(".gameplay__js");
  gameplay__js.owlCarousel({
    nav: true,
    dots: true,
    singleItem: true,
    navText: [
      "<img src='assets/images/prev.png'> Previous",
      "Next <img src='assets/images/next.png'>",
    ],
    lazyLoad: true,
    autoplay: 300,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 1,
    loop: true,
    margin: 0,
  });



  var advisor__js = $(".advisor__js");
  advisor__js.owlCarousel({
    dots: false,
    lazyLoad: true,
    autoplay: 0,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 3,
    loop: true,
    margin: 10,
  });

  var member__js = $(".member__js");
  member__js.owlCarousel({
    nav: false,
    dots: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    lazyLoad: true,
    autoplay: 100,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 1,
    loop: true,
    margin: 10,
    responsive: {
      // 480 : {
      //     items: 2,
      //     margin: 20,
      // },
      768: {
        items: 3,
        margin: 50,
      },
    },
  });

  $(".more_social_btn").click(function () {
    $(".icon_more").toggleClass("active");
  });

  $(".button-menu").click(function () {
    $("body").toggleClass("menu__js");
  });

  $('.video-wrapper').mouseenter( function(e) {
    $('.video-wrapper').addClass('hover');
  }).mouseleave( function(e) {
    $('.video-wrapper').removeClass('hover');
  }).click( function(e) {
    $('.video-wrapper').removeClass('hover');
  });

});
// })(jQuery, this);

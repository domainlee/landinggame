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



  var gem_item_js = $(".gem_item_js");
  gem_item_js.owlCarousel({
    nav: false,
    dots: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i> Previous",
      "Next <i class='fa fa-angle-right'></i>",
    ],
    lazyLoad: false,
    autoplay: 300,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 1,
    loop: true,
    margin: 0,
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

  var team__js = $(".team__js");
  team__js.owlCarousel({
    nav: true,
    dots: false,
    singleItem: true,
    navText: [
      "<img src='assets/images/prev.png'>",
      "<img src='assets/images/next.png'>",
    ],
    lazyLoad: true,
    autoplay: 300,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 2,
    loop: true,
    margin: 5,
    // responsive: {
    //   0: {
    //     items: 2
    //   },
    //   600: {
    //     items: 4
    //   },
    //   1000: {
    //     items: 4
    //   }
    // },
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
});
// })(jQuery, this);

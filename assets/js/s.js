$(function () {
  // variables
  var $header_top = $(".header");
  // var $nav = $("nav");

  // toggle menu
  // $header_top.find("a").on("click", function () {
  //   $(this).parent().toggleClass("open-menu");
  // });

  var $isAnimatedGamePlay = $(".gameplay .is-animated");
  var $isAnimatedGem = $(".gem-item .is-animated");
  var $isAnimatedRoadmap = $(".roadmap .is-animated");
  var $isAnimatedPartner = $(".partner .is-animated");
  var $isAnimatedTokenomics = $(".tokenomics .is-animated");

  // fullpage customization
  $("#fullpage").fullpage({
    verticalCentered: true,
    // sectionsColor: ["#B8AE9C", "#348899", "#F2AE72", "#5C832F", "#B8B89F"],
    sectionSelector: ".scroll_section",
    // slideSelector: ".horizontal-scrolling",
    navigation: true,
    // slidesNavigation: true,
    controlArrows: false,
    anchors: [
      "home",
      "trailer",
      "gameplay",
      "nfts",
      "gem",
      "roadmap",
      "team",
      "tokenomics",
      "partner",
      "footer",
    ],
    menu: "#menu",

    afterLoad: function (anchorLink, index) {},

    onLeave: function (index, nextIndex, direction) {
      console.log(index);
      console.log(nextIndex);
      console.log(direction);
      if (index == 5) {
        $("#fp-nav").show();
      }
      if (direction == "up") {
        $header_top.addClass("upscroll");
        $header_top.removeClass("downscroll");
      }
      if (direction == "down") {
        $header_top.removeClass("upscroll");
        $header_top.addClass("downscroll");
        $header_top.removeClass("header-transparent");
      }
      if (nextIndex == 1) {
        $header_top.addClass("header-transparent");
      }

      if ((index == 2 && nextIndex == 3) || (index == 4 && nextIndex == 3)) {
        $isAnimatedGamePlay.addClass("animated fadeInUp");
      } else {
        $isAnimatedGamePlay.removeClass("animated fadeInUp");
      }

      if ((index == 4 && nextIndex == 5) || (index == 6 && nextIndex == 5)) {
        $isAnimatedGem.addClass("animated fadeInUp");
        $isAnimatedGem.eq(0).css("animation-delay", ".2s");
        $isAnimatedGem.eq(1).css("animation-delay", ".4s");
        $isAnimatedGem.eq(2).css("animation-delay", ".6s");
        $isAnimatedGem.eq(3).css("animation-delay", ".8s");
        $isAnimatedGem.eq(4).css("animation-delay", "1s");
      } else {
        $isAnimatedGem.removeClass("animated fadeInUp");
      }

      if ((index == 5 && nextIndex == 6) || (index == 7 && nextIndex == 6)) {
        $isAnimatedRoadmap.addClass("animated fadeIn");
        $isAnimatedRoadmap.eq(0).css("animation-delay", ".3s");
        $isAnimatedRoadmap.eq(1).css("animation-delay", ".6s");
        $isAnimatedRoadmap.eq(2).css("animation-delay", ".9s");
        $isAnimatedRoadmap.eq(3).css("animation-delay", "1.2s");
        $isAnimatedRoadmap.eq(4).css("animation-delay", "1.5s");
        $isAnimatedRoadmap.eq(5).css("animation-delay", "1.8s");
      } else {
        $isAnimatedRoadmap.removeClass("animated fadeIn");
      }

      if ((index == 7 && nextIndex == 8) || (index == 9 && nextIndex == 8)) {
        $isAnimatedTokenomics.addClass("animated fadeIn");
        $isAnimatedTokenomics.eq(0).css("animation-delay", ".2s");
        $isAnimatedTokenomics.eq(1).css("animation-delay", ".4s");
        $isAnimatedTokenomics.eq(2).css("animation-delay", ".6s");
        $isAnimatedTokenomics.eq(3).css("animation-delay", ".8s");
        $isAnimatedTokenomics.eq(4).css("animation-delay", "1s");
        $isAnimatedTokenomics.eq(5).css("animation-delay", "1.2s");
        $isAnimatedTokenomics.eq(6).css("animation-delay", "1.4s");
        $isAnimatedTokenomics.eq(7).css("animation-delay", "1.6s");
        $isAnimatedTokenomics.eq(8).css("animation-delay", "1.8s");
        $isAnimatedTokenomics.eq(9).css("animation-delay", "2s");
        $isAnimatedTokenomics.eq(10).css("animation-delay", "2.2s");
        $isAnimatedTokenomics.eq(11).css("animation-delay", "2.4s");
      } else {
        $isAnimatedTokenomics.removeClass("animated fadeIn");
      }
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {},
  });
});

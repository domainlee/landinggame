$(function () {
  // variables
  var $header_top = $(".header");
  // var $nav = $("nav");

  // toggle menu
  // $header_top.find("a").on("click", function () {
  //   $(this).parent().toggleClass("open-menu");
  // });

  var $isAnimatedGamePlay = $(".gameplay .is-animated");
  var $isAnimatedRoadmap = $(".roadmap .is-animated");
  var $isAnimatedPartner = $(".partner .is-animated");

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
      "team",
      "roadmap",
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

      if ((index == 1 && nextIndex == 2) || (index == 3 && nextIndex == 2)) {
        $isAnimatedGamePlay.addClass("animated fadeInUpBig");
      } else {
        $isAnimatedGamePlay.removeClass("animated fadeInUpBig");
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

      if ((index == 6 && nextIndex == 7) || (index == 7 && nextIndex == 6)) {
        $isAnimatedPartner.addClass("animated fadeIn");
        $isAnimatedPartner.eq(0).css("animation-delay", ".3s");
        $isAnimatedPartner.eq(1).css("animation-delay", ".6s");
      } else {
        $isAnimatedPartner.removeClass("animated fadeIn");
      }
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {},
  });
});

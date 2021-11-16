$(function () {
  // variables
  var $header_top = $(".header");
  // var $nav = $("nav");

  // toggle menu
  // $header_top.find("a").on("click", function () {
  //   $(this).parent().toggleClass("open-menu");
  // });

  // fullpage customization
  $("#fullpage").fullpage({
    // sectionsColor: ["#B8AE9C", "#348899", "#F2AE72", "#5C832F", "#B8B89F"],
    sectionSelector: ".scroll_section",
    // slideSelector: ".horizontal-scrolling",
    navigation: true,
    // slidesNavigation: true,
    controlArrows: false,
    anchors: ["home", "gameplay", "nfts", "gem", "team", "roadmap", "partner","footer"],
    menu: "#menu",

    afterLoad: function (anchorLink, index) {
    },

    onLeave: function (index, nextIndex, direction) {
      console.log(index);
      console.log(nextIndex);
      console.log(direction);
      if (index == 5) {
        $("#fp-nav").show();
      }
      if(direction == 'up') {
        $header_top.addClass('upscroll');
        $header_top.removeClass('downscroll');
      }
      if(direction == 'down') {
        $header_top.removeClass('upscroll');
        $header_top.addClass('downscroll');
        $header_top.removeClass('header-transparent');
      }
      if(nextIndex == 1) {
        $header_top.addClass('header-transparent');
      }

    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    },
  });
});

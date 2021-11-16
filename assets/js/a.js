// (function ($, root, undefined) {
$(function () {
  $(".lazy").Lazy({
    effect: "fadeIn",
    effectTime: 500,
  });

  // var sync1 = $(".owl-carousel__js");
  // var sync2 = $(".owl-carousel__js--two");
  // var syncedSecondary = true;
  //
  // sync1.owlCarousel({
  //     nav : false,
  //     dots: true,
  //     singleItem : true,
  //     navText: [
  //         "<i class='angle-left'></i>",
  //         "<i class='angle-right'></i>"
  //     ],
  //     lazyLoad: true,
  //     autoplay : 100,
  //     autoplaySpeed: 400,
  //     animateIn: 'fadeIn',
  //     animateOut: 'fadeOut',
  //     slideSpeed: 100,
  //     items: 1,
  //     loop: true,
  //     touchDrag: false,
  //     mouseDrag: false
  // }).on('changed.owl.carousel', syncPosition);
  //
  // sync2
  //     .on('initialized.owl.carousel', function() {
  //         sync2.find(".owl-item").eq(0).addClass("current");
  //     })
  //     .owlCarousel({
  //         nav : false,
  //         dots: false,
  //         singleItem : true,
  //         navText: [
  //             "<i class='angle-left'></i>",
  //             "<i class='angle-right'></i>"
  //         ],
  //         lazyLoad: true,
  //         autoplay : 100,
  //         autoplaySpeed: 400,
  //         animateIn: 'fadeIn',
  //         animateOut: 'fadeOut',
  //         slideSpeed: 100,
  //         items: 1,
  //         loop: true,
  //         touchDrag: false,
  //         mouseDrag: false
  //     }).on('changed.owl.carousel', syncPosition2);
  //
  // function syncPosition(el) {
  //     var count = el.item.count - 1;
  //     var current = Math.round(el.item.index - (el.item.count / 2) - .5);
  //     if (current < 0) {
  //         current = count;
  //     }
  //     if (current > count) {
  //         current = 0;
  //     }
  //     sync2
  //         .find(".owl-item")
  //         .removeClass("current")
  //         .eq(current)
  //         .addClass("current");
  //     var onscreen = sync2.find('.owl-item.active').length - 1;
  //     var start = sync2.find('.owl-item.active').first().index();
  //     var end = sync2.find('.owl-item.active').last().index();
  //     if (current > end) {
  //         sync2.data('owl.carousel').to(current, 100, true);
  //     }
  //     if (current < start) {
  //         sync2.data('owl.carousel').to(current - onscreen, 100, true);
  //     }
  // }
  // function syncPosition2(el) {
  //     if (syncedSecondary) {
  //         var number = el.item.index;
  //         sync1.data('owl.carousel').to(number, 100, true);
  //     }
  // }
  // sync2.on("click", ".owl-item", function(e) {
  //     e.preventDefault();
  //     var number = $(this).index();
  //     sync1.data('owl.carousel').to(number, 300, true);
  // });
  //
  // sync1.each(function(index) {
  //     $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='owl-controls'></div>");
  // });

  var profile_owl = $(".nfts-item__slider");
  profile_owl.owlCarousel({
    nav: true,
    dots: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i> Previous",
      "Next <i class='fa fa-angle-right'></i>",
    ],
    lazyLoad: true,
    autoplay: 100,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 4,
    loop: true,
    margin: 10,
  });

  var gameplay__js = $(".gameplay__js");
  gameplay__js.owlCarousel({
    nav: true,
    dots: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i> Previous",
      "Next <i class='fa fa-angle-right'></i>",
    ],
    lazyLoad: true,
    autoplay: 100,
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
    dots: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i> Previous",
      "Next <i class='fa fa-angle-right'></i>",
    ],
    lazyLoad: true,
    autoplay: 100,
    autoplaySpeed: 400,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slideSpeed: 100,
    items: 4,
    loop: true,
    margin: 15,
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

  $(".button__nav-menu").click(function (e) {
    $("body").toggleClass("navigation-block");
    e.stopPropagation();
  });

  $(document).click(function (e) {
    if (!$(e.target).is(".header__navigation--mobile *")) {
      $("body").removeClass("navigation-block");
    }
  });

  // $('.header__navigation li').each(function(){
  //     var location  = $(this).find('a');
  //     location.click(function(e){
  //         console.log('click');
  //         e.preventDefault();
  //
  //         $('.header__navigation li a').removeClass('active');
  //         $(this).addClass('active');
  //         var scrollTo = $(this).attr('href'); // retrieve the hash using .attr()
  //         if (scrollTo != null && scrollTo != '') {
  //             $('html, body').animate({
  //                 scrollTop: $(scrollTo).offset().top-69
  //             }, 1000);
  //         }
  //     });
  // });

  $(window).trigger("resize each");

  $(".gallery__button").on("click", function () {
    console.log("a");
    $(".imagepreview").attr("src", $(this).attr("data-url"));
    $("#imagemodal").modal("show");
  });

  $("ul.sidebar__category > li > a").click(function () {
    var checkElement = $(this).next();
    $("ul.sidebar__category li").removeClass("active");
    $(this).closest("li").addClass("active");
    if (checkElement.is("ul") && checkElement.is(":visible")) {
      $(this).closest("li").removeClass("active");
      checkElement.slideUp("normal");
    }
    if (checkElement.is("ul") && !checkElement.is(":visible")) {
      $("ul.sidebar__category ul:visible").slideUp("normal");
      checkElement.slideDown("normal");
    }
    if (checkElement.is("ul")) {
      return false;
    } else {
      return true;
    }
  });

  $("ul.checkout__payment--js > li > a").click(function () {
    var checkElement = $(this).next();
    // $('.paymentOption').val($(this).text());
    $(".urlRedirect").val($(this).attr("data-redirect"));

    $("ul.checkout__payment--js li").removeClass("active");
    $(this).closest("li").addClass("active");

    if (checkElement.is("ul") && checkElement.is(":visible")) {
      $(this).closest("li").removeClass("active");
      checkElement.slideUp("normal");
    }
    if (checkElement.is("ul") && !checkElement.is(":visible")) {
      $("ul.checkout__payment--js ul:visible").slideUp("normal");
      checkElement.slideDown("normal");
    }
    if (checkElement.is("ul")) {
      return false;
    } else {
      return true;
    }
  });

  $("ul.header__navigation--mobile > li > a").each(function () {
    var t = $(this);
    var checkElement = t.next();
    if (checkElement.is("ul")) {
      t.after('<span class="more">+</span>');
      t.next().click(function (e) {
        e.preventDefault();
        if (checkElement.is("ul") && checkElement.is(":visible")) {
          checkElement.slideUp("normal");
        }
        if (checkElement.is("ul") && !checkElement.is(":visible")) {
          checkElement.slideDown("normal");
        }
        // checkElement.slideToggle('normal');
        $(this).toggleClass("active");
      });
    }
  });

  // $('ul.header__navigation--mobile > li > a').click(function() {
  //     var checkElement = $(this).next();
  //     $('ul.header__navigation--mobile li').removeClass('active');
  //     $(this).closest('li').addClass('active');
  //     if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
  //         $(this).closest('li').removeClass('active');
  //         checkElement.slideUp('normal');
  //     }
  //     if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
  //         $('ul.header__navigation--mobile ul:visible').slideUp('normal');
  //         checkElement.slideDown('normal');
  //     }
  //     if (checkElement.is('ul')) {
  //         return false;
  //     } else {
  //         return true;
  //     }
  // });

  $(".NavProductOption li a").click(function () {
    var t = $(this);
    $(".NavProductOption li a").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(t.attr("data-tab")).addClass("active");
  });

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("body").addClass("header__js");
    } else {
      $("body").removeClass("header__js");
    }
  });

  $(".backToTop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(".head1__formsearch--input").hide();
  $(".head1__formsearch--button").click(function (e) {
    $(".head1__formsearch--button .fa-search").hide();
    $(".head1__formsearch--input").toggle(800);
    e.stopPropagation();
  });
  $("body").click(function (e) {
    if (
      !$(e.target).is(".head1__formsearch--input, .head1__formsearch--input *")
    ) {
      $(".head1__formsearch--input").hide();
      $(".head1__formsearch--button .fa-search").show();
    }
  });

  $(".nav-mobile__button").click(function () {
    $(".navigation__mobile").addClass("navigation__mobile--open");
  });
  $(".mobile-button__close").click(function () {
    $(".navigation__mobile").removeClass("navigation__mobile--open");
  });

  $(".navigation__mobile ul>li>a").each(function () {
    var t = $(this);
    var checkElement = t.next();
    if (checkElement.is("ul")) {
      t.after('<button class="more">+</button>');
      t.next().click(function (e) {
        e.preventDefault();
        if (checkElement.is("ul") && checkElement.is(":visible")) {
          checkElement.slideUp("normal");
        }
        if (checkElement.is("ul") && !checkElement.is(":visible")) {
          checkElement.slideDown("normal");
        }
        // checkElement.slideToggle('normal');
        $(this).toggleClass("active");
      });
    }
  });

  $(
    ".strategy__one-js li:nth-child(1), .strategy__one-js li:nth-child(2)"
  ).waypoint(
    function () {
      $(
        ".strategy__one-js li:nth-child(1), .strategy__one-js li:nth-child(2)"
      ).addClass("animated fadeInLeft");
    },
    {
      offset: "55%",
    }
  );
  $(
    ".strategy__one-js li:nth-child(3), .strategy__one-js li:nth-child(4)"
  ).waypoint(
    function () {
      $(
        ".strategy__one-js li:nth-child(3), .strategy__one-js li:nth-child(4)"
      ).addClass("animated fadeInRight");
    },
    {
      offset: "55%",
    }
  );
  $(".strategy__one-js li:nth-child(5)").waypoint(
    function () {
      $(".strategy__one-js li:nth-child(5)").addClass("animated fadeInUp");
    },
    {
      offset: "85%",
    }
  );
  $(".strategy__image figure").waypoint(
    function () {
      $(".strategy__image figure").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );

  $(".procedure__heading").waypoint(
    function () {
      $(".procedure__heading").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );

  $(".procedure__list li").waypoint(
    function () {
      $(".procedure__list li").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );
  $(".profilo__headline, .profilo__intro").waypoint(
    function () {
      $(".profilo__headline, .profilo__intro").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );
  $(".profilo__list").waypoint(
    function () {
      $(".profilo__list").addClass("animated fadeInUp");
    },
    {
      offset: "55%",
    }
  );

  $(".member__heading, .member__intro").waypoint(
    function () {
      $(".member__heading, .member__intro").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );
  $(".member__inner").waypoint(
    function () {
      $(".member__inner").addClass("animated fadeInUp");
    },
    {
      offset: "55%",
    }
  );

  $(".form__headline, .form__intro").waypoint(
    function () {
      $(".form__headline, .form__intro").addClass("animated fadeInDown");
    },
    {
      offset: "55%",
    }
  );
  $(".form-contact").waypoint(
    function () {
      $(".form-contact").addClass("animated fadeInUp");
    },
    {
      offset: "55%",
    }
  );

  $(".news__item:nth-child(1)").waypoint(
    function () {
      $(".news__item:nth-child(1)").addClass("animated fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".news__item:nth-child(3)").waypoint(
    function () {
      $(".news__item:nth-child(3)").addClass("animated fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".news__item:nth-child(2)").waypoint(
    function () {
      $(".news__item:nth-child(2)").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".team__image").waypoint(
    function () {
      $(".team__image").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  var imageChange = $(".strategy__image figure");
  $(".strategy__list li").each(function () {
    var t = $(this).find("a");
    t.hover(function () {
      var image = $(this).attr("data-src");
      imageChange.attr(
        "style",
        "background-image: url(" + image + ") !important"
      );
    });
  });

  $("#viewscroll").fullView({
    navbar: "#navbar",
    dots: false,
    // ...
    // Read Docs for more options details

    // Callbacks
    onScrollStart: function (currentView, destinationView, direction) {
      console.log(currentView);
      console.log(destinationView);
      console.log(direction);
      if (direction == "up") {
        $(".header").addClass("upscroll");
        $(".header").removeClass("downscroll");
      }
      if (direction == "down") {
        $(".header").removeClass("upscroll");
        $(".header").addClass("downscroll");
      }
      //  Do Something Usefull
    },
    onScrollEnd: function (currentView) {
      if (currentView.hasClass("nav-transparent")) {
        $(".header").addClass("header-transparent");
      } else {
        $(".header").removeClass("header-transparent");
      }
    },
  });

  // fullpage customization
  $("#fullpage").fullpage({
    sectionSelector: "section",
    slideSelector: ".horizontal-scrolling",
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: [
      "firstSection",
      "secondSection",
      "thirdSection",
      "fourthSection",
      "fifthSection",
    ],
    menu: "#menu",

    afterLoad: function (anchorLink, index) {
      $header_top.css("background", "rgba(0, 47, 77, .3)");
      $nav.css("background", "rgba(0, 47, 77, .25)");
      if (index == 5) {
        $("#fp-nav").hide();
      }
    },

    onLeave: function (index, nextIndex, direction) {
      if (index == 5) {
        $("#fp-nav").show();
      }
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      if (anchorLink == "fifthSection" && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, "up");
        $header_top.css("background", "transparent");
        $nav.css("background", "transparent");
        $(this).css("background", "#374140");
        $(this).find("h2").css("color", "white");
        $(this).find("h3").css("color", "white");
        $(this).find("p").css({
          color: "#DC3522",
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
      if (anchorLink == "fifthSection" && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, "up");
        $header_top.css("background", "rgba(0, 47, 77, .3)");
        $nav.css("background", "rgba(0, 47, 77, .25)");
      }
    },
  });
});
// })(jQuery, this);

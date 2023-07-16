(function ($) {
  "use strict";

  fetch("https://rezawp.com/ip.php")
    .then((res) => res.json())
    .then((res) => {
      fetch(`https://ipinfo.io/${res.ip}/json`)
        .then((res) => res.json())
        .then((resIp) => {
          if (resIp.country === "ID") {
            return location.assign("https://id.rezawp.com");
          }
        });
    });

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINK
  $(".custom-link").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);

var scrollableElement = document.body; //document.getElementById('scrollableElement');
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

let pixel = 0;

$("#new-section-5-button").one("inview", function (event, isInView) {
  if (isInView) {
    disableScroll();
    scrollableElement.addEventListener("wheel", checkScrollDirection);
    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        // scroll up
        // pixel -= 9;
        // console.log("pixel-", pixel);
        // if (pixel < 0) {
        //   pixel = 0;
        // }
        // if (pixel === 0) {
        //   $("#nprogress-bar").val("0");
        //   $(".m-progress").css("height", "0%");
        //   $(".second").removeClass("border-change");
        //   $(".third").removeClass("border-change");
        //   $(".fourth").removeClass("border-change");
        //   $(".five").removeClass("border-change");
        //   $("#first").nextAll().removeClass("process-content-active");
        // }
        // if (pixel === 9) {
        //   $("#nprogress-bar").val("25");
        //   $(".m-progress").css("height", "25%");
        //   $(".third").removeClass("border-change");
        //   $(".fourth").removeClass("border-change");
        //   $(".five").removeClass("border-change");
        //   $(".first").addClass("border-change");
        //   $(".second").addClass("border-change");
        //   $("#second").prevAll().addClass("process-content-active");
        //   $("#second").nextAll().removeClass("process-content-active");
        //   $("#second").addClass("process-content-active");
        // }
        // if (pixel === 18) {
        //   $("#nprogress-bar").val("50");
        //   $(".m-progress").css("height", "50%");
        //   $(".fourth").removeClass("border-change");
        //   $(".five").removeClass("border-change");
        //   $(".first").addClass("border-change");
        //   $(".second").addClass("border-change");
        //   $(".third").addClass("border-change");
        //   $("#third").prevAll().addClass("process-content-active");
        //   $("#third").nextAll().removeClass("process-content-active");
        //   $("#third").addClass("process-content-active");
        // }
        // if (pixel === 27) {
        //   $("#nprogress-bar").val("75");
        //   $(".m-progress").css("height", "75%");
        //   $(".five").removeClass("border-change");
        //   $(".first").addClass("border-change");
        //   $(".second").addClass("border-change");
        //   $(".third").addClass("border-change");
        //   $(".fourth").addClass("border-change");
        //   $("#fourth").prevAll().addClass("process-content-active");
        //   $("#fourth").nextAll().removeClass("process-content-active");
        //   $("#fourth").addClass("process-content-active");
        // }
        // if (pixel === 36) {
        //   $("#nprogress-bar").val("100");
        //   $(".m-progress").css("height", "100%");
        //   $(".first").addClass("border-change");
        //   $(".second").addClass("border-change");
        //   $(".third").addClass("border-change");
        //   $(".fourth").addClass("border-change");
        //   $(".five").addClass("border-change");
        //   $("#five").prevAll().addClass("process-content-active");
        //   $("#five").nextAll().removeClass("process-content-active");
        //   $("#five").addClass("process-content-active");
        // }
      } else {
        // scroll down
        pixel += 9;
        if (pixel === 9) {
          $("#nprogress-bar").val("25");
          $(".m-progress").css("height", "25%");
          $(".third").removeClass("border-change");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $("#second").prevAll().addClass("process-content-active");
          $("#second").nextAll().removeClass("process-content-active");
          $("#second").addClass("process-content-active");
        }
        if (pixel === 18) {
          $("#nprogress-bar").val("50");
          $(".m-progress").css("height", "50%");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $("#third").prevAll().addClass("process-content-active");
          $("#third").nextAll().removeClass("process-content-active");
          $("#third").addClass("process-content-active");
        }
        if (pixel === 27) {
          $("#nprogress-bar").val("75");
          $(".m-progress").css("height", "75%");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $("#fourth").prevAll().addClass("process-content-active");
          $("#fourth").nextAll().removeClass("process-content-active");
          $("#fourth").addClass("process-content-active");
        }
        if (pixel === 36) {
          $("#nprogress-bar").val("100");
          $(".m-progress").css("height", "100%");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $(".five").addClass("border-change");
          $("#five").prevAll().addClass("process-content-active");
          $("#five").nextAll().removeClass("process-content-active");
          $("#five").addClass("process-content-active");
        }
        if (pixel === 45) {
          enableScroll();
        }
      }
    }
  }
});
$(".mobile-third").one("inview", function (event, isInView) {
  let lastScrollTop = 0;
  if (isInView) {
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        pixel++;
        if (pixel === 5) {
          $("#nprogress-bar").val("25");
          $(".m-progress").css("height", "25%");
          $(".third").removeClass("border-change");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $("#second").prevAll().addClass("process-content-active");
          $("#second").nextAll().removeClass("process-content-active");
          $("#second").addClass("process-content-active");
        }
        if (pixel === 20) {
          $("#nprogress-bar").val("50");
          $(".m-progress").css("height", "50%");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $("#third").prevAll().addClass("process-content-active");
          $("#third").nextAll().removeClass("process-content-active");
          $("#third").addClass("process-content-active");
        }
        if (pixel === 35) {
          $("#nprogress-bar").val("75");
          $(".m-progress").css("height", "75%");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $("#fourth").prevAll().addClass("process-content-active");
          $("#fourth").nextAll().removeClass("process-content-active");
          $("#fourth").addClass("process-content-active");
        }
        if (pixel === 45) {
          $("#nprogress-bar").val("100");
          $(".m-progress").css("height", "100%");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $(".five").addClass("border-change");
          $("#five").prevAll().addClass("process-content-active");
          $("#five").nextAll().removeClass("process-content-active");
          $("#five").addClass("process-content-active");
        }
      }
      lastScrollTop = st;
    });
  }
});

$(".first").click(() => {
  $("#nprogress-bar").val("0");
  $(".m-progress").css("height", "0%");
  $(".second").removeClass("border-change");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $("#first").nextAll().removeClass("process-content-active");
});
$(".second").click(() => {
  $("#nprogress-bar").val("25");
  $(".m-progress").css("height", "25%");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $("#second").prevAll().addClass("process-content-active");
  $("#second").nextAll().removeClass("process-content-active");
  $("#second").addClass("process-content-active");
});
$(".third").click(() => {
  $("#nprogress-bar").val("50");
  $(".m-progress").css("height", "50%");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $("#third").prevAll().addClass("process-content-active");
  $("#third").nextAll().removeClass("process-content-active");
  $("#third").addClass("process-content-active");
});
$(".fourth").click(() => {
  $("#nprogress-bar").val("75");
  $(".m-progress").css("height", "75%");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $(".fourth").addClass("border-change");
  $("#fourth").prevAll().addClass("process-content-active");
  $("#fourth").nextAll().removeClass("process-content-active");
  $("#fourth").addClass("process-content-active");
});
$(".five").click(() => {
  $("#nprogress-bar").val("100");
  $(".m-progress").css("height", "100%");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $(".fourth").addClass("border-change");
  $(".five").addClass("border-change");
  $("#five").prevAll().addClass("process-content-active");
  $("#five").nextAll().removeClass("process-content-active");
  $("#five").addClass("process-content-active");
});

// div
$("#first").click(() => {
  $("#nprogress-bar").val("0");
  $(".m-progress").css("height", "0%");
  $(".second").removeClass("border-change");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $("#first").nextAll().removeClass("process-content-active");
});
$("#second").click(() => {
  $("#nprogress-bar").val("25");
  $(".m-progress").css("height", "25%");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $("#second").prevAll().addClass("process-content-active");
  $("#second").nextAll().removeClass("process-content-active");
  $("#second").addClass("process-content-active");
});
$("#third").click(() => {
  $("#nprogress-bar").val("50");
  $(".m-progress").css("height", "50%");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $("#third").prevAll().addClass("process-content-active");
  $("#third").nextAll().removeClass("process-content-active");
  $("#third").addClass("process-content-active");
});
$("#fourth").click(() => {
  $("#nprogress-bar").val("75");
  $(".m-progress").css("height", "75%");
  $(".five").removeClass("border-change");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $(".fourth").addClass("border-change");
  $("#fourth").prevAll().addClass("process-content-active");
  $("#fourth").nextAll().removeClass("process-content-active");
  $("#fourth").addClass("process-content-active");
});
$("#five").click(() => {
  $("#nprogress-bar").val("100");
  $(".m-progress").css("height", "100%");
  $(".first").addClass("border-change");
  $(".second").addClass("border-change");
  $(".third").addClass("border-change");
  $(".fourth").addClass("border-change");
  $(".five").addClass("border-change");
  $("#five").prevAll().addClass("process-content-active");
  $("#five").nextAll().removeClass("process-content-active");
  $("#five").addClass("process-content-active");
});

let ph;
function scLdb() {
  const t = $("#ldb").scrollTop();
  if(t>ph){
    if($('#ldb').hasClass('sc'))return;
    $('#ldb').addClass('sc');
    $("#ldb > .stsc").css("--r", '100%');
  }else{
    $('#ldb').removeClass('sc');
    $("#ldb > .stsc").css("--r", (t / ph * 100)+"%");
  }
}

function scHtml() {
  // Keep the original HTML scrolling effects (for elements outside #hd)
  let t = $(window).scrollTop();
  
  for (let i = 0; i < g_highlight.length; i++) {
    const box = $(g_highlight[i]);
    if (t + $(window).height() - box.offset().top > 70) {
      box.addClass("show");
    } else {
      box.removeClass("show");
    }
  }
  
  for (let i = 0; i < g_percent.length; i++) {
    const box = g_percent[i];
    $(box).css(
      "--scroll",
      `${(( $(window).height() + t - $(box).offset().top ) / ( $(window).height() + $(box).outerHeight() )) * 100}%`
    );
  }
}

function init() {
  // Compute the height of #ldb for the fade effect
  ph = $("#ldb").innerHeight();
  $(":root").css("--ph", `${ph}px`);
}


init();
let g_highlight = $(".highlight");
let g_percent = $(".shine");

$("#ldb").on("scroll", scLdb);

$(window).on("scroll", scHtml);

window.onresize = () => {
  init();
  scLdb();
  scHtml();
};

// Reset scroll position on #ldb
$("#ldb").scrollTop(0);


function tgtheme(b = true) {
  if (b) $("body").addClass("light");
  else $("body").removeClass("light");
}
if (location.search == "?light") {
  tgtheme();
}

$("html")[0].scroll(0, 0);

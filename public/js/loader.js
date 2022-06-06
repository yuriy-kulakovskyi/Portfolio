setTimeout(() => {
  $("#loader-text").css('background-position', '0 100%');
  setTimeout(() => {
    $("#wrapper").css("visibility", "visible");
    $("#loader").css("display", 'none');
    $("body").css("overflow", 'visible');
  }, 1100);
}, 1000);
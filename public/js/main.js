// activate feather icons
feather.replace();

// First typing
let typed = new Typed('.typing', {
  strings: ["Web-developer.", "Web-designer.", "Creator IT Academy student."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

// Click on home page menu button 
$("#header__menu-button").click(() => {
  $("#wrapper__menu").css('top', '0');
  $('#menu__header').css('top', '0');
  $("section").css('display', 'none')
});

// Click on home page cross button 
$("#logo__box").click(() => {
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $('#wrapper__home').css('display', 'flex');
});

// Links hovers
$("#home").mousemove(() => {
  $("#linkVal").text('home');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#home").mouseleave(() => {
  $("#linkVal").text('');
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
  $("#linkVal").css("transform", "translate(-50%,-50%)");
});

$("#about").mousemove(() => {
  $("#linkVal").text('about');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#about").mouseleave(() => {
  $("#linkVal").text('');
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
  $("#linkVal").css("transform", "translate(-50%,-50%)");
});

$("#social-medias").mousemove(() => {
  $("#linkVal").text('social medias');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#social-medias").mouseleave(() => {
  $("#linkVal").text('');
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
  $("#linkVal").css("transform", "translate(-50%,-50%)");
});

$("#projects").mousemove(() => {
  $("#linkVal").text('projects');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#projects").mouseleave(() => {
  $("#linkVal").text('');
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
  $("#linkVal").css("transform", "translate(-50%,-50%)");
});

$("#contact").mousemove(() => {
  $("#linkVal").text('contact');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#contact").mouseleave(() => {
  $("#linkVal").text('');
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
  $("#linkVal").css("transform", "translate(-50%,-50%)");
});


// Links clicks
$("#home").click(() => {
  $("#wrapper__about").css("display", "none");
  $("#wrapper__home").css("display", "flex");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#about").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "flex");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#social-medias").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "none");
  $("#wrapper__social-medias").css("display", "flex");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#projects").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "none");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "flex");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});
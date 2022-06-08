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
  $("#colors-settings").css("display", 'none');
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

$("#social-media").mousemove(() => {
  $("#linkVal").text('social media');
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
  $("#linkVal").css("transform", "");
});

$("#social-media").mouseleave(() => {
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
  $("#wrapper__contact").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');
  $("#colors-settings").css("display", 'none');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#about").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "flex");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper__contact").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');
  $("#colors-settings").css("display", 'flex');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#social-medias").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "none");
  $("#wrapper__social-medias").css("display", "flex");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper__contact").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');
  $("#colors-settings").css("display", 'flex');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#projects").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "none");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "flex");
  $("#wrapper__contact").css("display", "none");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');
  $("#colors-settings").css("display", 'flex');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});

$("#contact").click(() => {
  $("#wrapper__home").css("display", "none");
  $("#wrapper__about").css("display", "none");
  $("#wrapper__social-medias").css("display", "none");
  $("#wrapper__projects").css("display", "none");
  $("#wrapper__contact").css("display", "flex");
  $("#wrapper section").css("animation", 'none');
  $("#wrapper__menu").css('top', '-100vh');
  $('#menu__header').css('top', '-100px');
  $(".overlay").css("display", 'block');
  $("#colors-settings").css("display", 'none');

  setTimeout(() => {
    $("#wrapper section").css("animation", 'expand .8s ease forwards');
  }, 100);

});


// Change color style of page

let sClick = false;
$("#colors-settings").click(() => {
  if (!sClick) {
    sClick = true;
    $('#colors-settings').css('right', '0');
  } else {
    sClick = false;
    $('#colors-settings').css('right', '-150px');
  }
});

$("#selector__red").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#c70039");
});

$("#selector__purple").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#481380");
});

$("#selector__malt").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#00909e");
});

$("#selector__green").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#04A777");
});

$("#selector__blue").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#035aa6");
});

$("#selector__orange").click(() => {
  $("body").get(0).style.setProperty("--contrast-color", "#dd7631");
});


let html_start = new Date('10/4/2020');
let js_start = new Date('12/6/2020');
let jquery_start = new Date('03/14/2021');
let bootstrap_start = new Date('10/10/2020');
let node_start = new Date('7/12/2021');
let sass_start = new Date('8/6/2021');

let today = new Date();

const days = (html_start, today) =>{
  let difference = today.getTime() - html_start.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}


function getFormatedStringFromDays(numberOfDays) {
  var years = Math.floor(numberOfDays / 365);
  var months = Math.floor(numberOfDays % 365 / 30);
  if (years > 1) {
    return years + ' years ' + months + ' months'
  } else if (years === 1) {
    return years + ' year ' + months + ' months'
  } else if (years < 1) {
    return months + ' months'
  }

}

// Skills section text
$(".html-text").text(getFormatedStringFromDays(days(html_start, today)));
$(".js-text").text(getFormatedStringFromDays(days(js_start, today)));
$(".jquery-text").text(getFormatedStringFromDays(days(jquery_start, today)));
$(".bootstrap-text").text(getFormatedStringFromDays(days(bootstrap_start, today)));
$(".node-text").text(getFormatedStringFromDays(days(node_start, today)));
$(".sass-text").text(getFormatedStringFromDays(days(sass_start, today)));




// mouse move/leave on projects images
let pelOneTimeout;
let pelTwoTimeout;

let startEye;
let endEye;

$("#pelio-image").mousemove(() => {
  $("#pelio-image .eye").css('display', 'block');
  $("#pelio-image .closed-eye").css('display', 'none');
  startEye = () => {
    $("#pelio-image .eye").css('display', 'none');
    $("#pelio-image .closed-eye").css('display', 'block');
    pelOneTimeout = setTimeout(() => {
      endEye();
    }, 1000);
  }

   endEye = () => {
    $("#pelio-image .eye").css('display', 'block');
    $("#pelio-image .closed-eye").css('display', 'none');
    pelTwoTimeout = setTimeout(() => {
      startEye();
    }, 1000);
  }
  startEye();
});


$("#pelio-image").mouseleave(() => {
  $("#pelio-image .eye").css('display', 'none');
  $("#pelio-image .closed-eye").css('display', 'none');
  clearTimeout(pelOneTimeout);
  clearTimeout(pelTwoTimeout);
  startEye = () => {  };
  endEye = () => {  };
});


let weatherOneTimeOut;
let weatherTwoTimeOut;

$("#weather-image").mousemove(() => {
  $("#weather-image .eye").css('display', 'block');
  $("#weather-image .closed-eye").css('display', 'none');
  startEye = () => {
    $("#weather-image .eye").css('display', 'none');
    $("#weather-image .closed-eye").css('display', 'block');
    weatherOneTimeout = setTimeout(() => {
      endEye();
    }, 1000);
  }

  endEye = () => {
    $("#weather-image .eye").css('display', 'block');
    $("#weather-image .closed-eye").css('display', 'none');
    weatherTwoTimeout = setTimeout(() => {
      startEye();
    }, 1000);
  }
  startEye();
});

$("#weather-image").mouseleave(() => {
  $("#weather-image .eye").css('display', 'none');
  $("#weather-image .closed-eye").css('display', 'none');
  clearTimeout(weatherOneTimeOut);
  clearTimeout(weatherTwoTimeOut);
  startEye = () => {  };
  endEye = () => {  };
});

let passOneTimeout;
let passTwoTimeout;

$("#password-image").mousemove(() => {
  $("#password-image .eye").css('display', 'block');
  $("#password-image .closed-eye").css('display', 'none');
  startEye = () => {
    $("#password-image .eye").css('display', 'none');
    $("#password-image .closed-eye").css('display', 'block');
    passOneTimeout = setTimeout(() => {
      endEye();
    }, 1000);
  }

  endEye = () => {
    $("#password-image .eye").css('display', 'block');
    $("#password-image .closed-eye").css('display', 'none');
    passTwoTimeout = setTimeout(() => {
      startEye();
    }, 1000);
  }
  startEye();
});

$("#password-image").mouseleave(() => {
  $("#password-image .eye").css('display', 'none');
  $("#password-image .closed-eye").css('display', 'none');
  clearTimeout(passOneTimeout);
  clearTimeout(passTwoTimeout);
  startEye = () => {  };
  endEye = () => {  };
});
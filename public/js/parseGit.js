fetch('https://api.github.com/users/yuriy-kulakovskyi')
.then((response) => {
  return response.json();
})
.then((data) => {
  let nickname = data.login;
  let username = data.name;
  let bio = data.bio;
  let followers = data.followers;
  let following = data.following;
  let photo = data.avatar_url;

  $("#github__image").css("background-image", 'url('+photo+')');
  $("#instagram__image").css("background-image", 'url('+photo+')');
  $(".github__link").attr("href", data.html_url);
  $("#github__username").text(username);
  $("#github__nickname").text(nickname);
  $("#github__bio").text(bio);
  $("#github__followers").text('Followers: ' + followers);
  $("#github__following").text('Following: ' + following);
})

fetch('https://api.github.com/users/yuriy-kulakovskyi/repos')
.then((response) =>  {
  return response.json();
})
.then((data) => {
  $('#pelio__title').text(data[6].name);
  $('#pelio__descr').text(data[6].description);
  $('#pelio__link').attr('href', data[6].homepage);

  $('#weather__title').text(data[13].name);
  $('#weather__descr').text(data[13].description);
  $('#weather__link').attr('href', data[13].homepage);

  $('#password__title').text(data[3].name);
  $('#password__descr').text(data[3].description);
  $('#password__link').attr('href', data[3].homepage);
})

fetch('https://api.github.com/users/yuriy-kulakovskyi')
.then((response) => {
  return response.json();
})
.then((data) => {
  let nickname = data.login;
  let username = data.name;
  let bio = data.bio;
  let followers = data.followers;
  let following = data.following;
  let photo = data.avatar_url;

  $("#github__image").css("background-image", 'url('+photo+')');
  $("#instagram__image").css("background-image", 'url('+photo+')');
  $(".github__link").attr("href", data.html_url);
  $("#github__username").text(username);
  $("#github__nickname").text(nickname);
  $("#github__bio").text(bio);
  $("#github__followers").text('Followers: ' + followers);
  $("#github__following").text('Following: ' + following);
})
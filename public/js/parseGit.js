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
  console.log(data);
  $('#pelio__title').text(data[8].name);
  $('#pelio__descr').text(data[8].description);
  $('#pelio__link').attr('href', data[8].clone_url);
  $('#pelio-image').attr('href', data[8].homepage);

  $('#weather__title').text(data[20].name);
  $('#weather__descr').text(data[20].description);
  $('#weather__link').attr('href', data[20].clone_url);
  $('#weather-image').attr('href', data[20].homepage);

  $('#password__title').text(data[21].name);
  $('#password__descr').text(data[21].description);
  $('#password__link').attr('href', data[21].clone_url);
  $('#password-image').attr('href', data[21].clone_url);
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
  $(".github__link").attr("href", data.html_url);
  $("#github__username").text(username);
  $("#github__nickname").text(nickname);
  $("#github__bio").text(bio);
  $("#github__followers").text('Followers: ' + followers);
  $("#github__following").text('Following: ' + following);
})
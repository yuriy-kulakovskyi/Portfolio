// fetch('https://api.github.com/users/yuriy-kulakovskyi')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   let nickname = data.login;
//   let username = data.name;
//   let bio = data.bio;
//   let followers = data.followers;
//   let following = data.following;
//   let photo = data.avatar_url;

//   $("#github__image").css("background-image", 'url('+photo+')');
//   $(".github__link").attr("href", data.html_url);
//   $("#github__username").text(username);
//   $("#github__nickname").text(nickname);
//   $("#github__bio").text(bio);
//   $("#github__followers").text('Followers: ' + followers);
//   $("#github__following").text('Following: ' + following);
// })

fetch('https://api.github.com/users/yuriy-kulakovskyi/repos')
.then((response) =>  {
  return response.json();
})
.then((data) => {
  function tree (repo) {
    return repo.name === 'chrsitmas-tree-client';
  }

  function tita (repo) {
    return repo.name === 'Tita';
  }

  function tgForm (repo) {
    return repo.name === 'telegram-form';
  }

  $('#pelio__title').text(data.find(tree).name);
  $('#pelio__descr').text(data.find(tree).description);
  $('#pelio__link').attr('href', data.find(tree).clone_url);
  $('#pelio-image').attr('href', data.find(tree).homepage);

  data.find(tree).topics.slice(0, 3).map(i => {
    $("#pelio__topics").append(`<span>${i}</span>`);
  })

  $('#weather__title').text(data.find(tita).name);
  $('#weather__descr').text(data.find(tita).description);
  $('#weather__link').attr('href', data.find(tita).clone_url);
  $('#weather-image').attr('href', data.find(tita).homepage);

  data.find(tita).topics.slice(0, 5).map(i => {
    $("#weather__topics").append(`<span>${i}</span>`);
  })

  $('#password__title').text(data.find(tgForm).name);
  $('#password__descr').text(data.find(tgForm).description);
  $('#password__link').attr('href', data.find(tgForm).clone_url);
  $('#password-image').attr('href', data.find(tgForm).homepage);

  data.find(tgForm).topics.slice(0, 3).map(i => {
    $("#password__topics").append(`<span>${i}</span>`);
  })
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
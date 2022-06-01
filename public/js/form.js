window.addEventListener("DOMContentLoaded", function () {

  let form = document.getElementById("my-form");

  function success() {
    form.reset();
  }


  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success);
  });
});


function ajax(method, url, data, success) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') //both works

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


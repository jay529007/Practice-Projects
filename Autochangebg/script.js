//generate a random color

// ------------------------ chai aur code logic for genrate randome color ------------------------
// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

// ------------------------ chatGPT logic for genrate randome color ------------------------
const randomColor = () => {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return randomColor;
};
// console.log(randomColor);

const bdcolor = document.body.style.backgroundColor;
// console.log(bdcolor);

let intervalId;
const startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  document.body.style.backgroundColor = bdcolor;
//   console.log(bdcolor);
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

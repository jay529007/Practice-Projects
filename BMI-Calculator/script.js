// // const container = document.querySelector("#weight-guide");
const removeunderweight = document.querySelector("#underweight");
const removenormalrange = document.querySelector("#normalrange");
const removeoverweight = document.querySelector("#overweight");




// ----------------------------- perfectly working code ----------------------------- 
// this code is from chai or code but i did my edit in this like add remove edit elements


// const form = document.querySelector('form');
// // if you want to take values in starting
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');
//   const removeunderweight = document.querySelector('#underweight');
//   const removenormalrange = document.querySelector('#normalrange');
//   const removeoverweight = document.querySelector('#overweight');
//   let bmi;

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }

//   if (bmi < 18.6) {
//     console.log(`first`)
//     removeunderweight.textContent=`You are Under Weight`
//     removenormalrange.remove();
//     removeoverweight.remove();
//   } else if (bmi > 18.6 && bmi < 24.9) {
//     console.log(`second`)
//     removeunderweight.remove();
//     removenormalrange.textContent=`You are Perfect `
//     removeoverweight.remove();
//   } else if (bmi > 24.9) {
//     console.log(`third`)
//     removeunderweight.remove();
//     removenormalrange.remove();
//     removeoverweight.textContent=`You are Over Weight`
//   }
// });

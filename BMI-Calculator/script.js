// const container = document.querySelector("#weight-guide");
const removeunderweight = document.querySelector("#underweight");
const removenormalrange = document.querySelector("#normalrange");
const removeoverweight = document.querySelector("#overweight");

if (number > 18.6) {
  removenormalrange.remove();
  removeoverweight.remove();
} else if (number > 18.6 && number < 24.9) {
  removeunderweight.remove();
  removeoverweight.remove();
} else {
  removeunderweight.remove();
  removenormalrange.remove();
}

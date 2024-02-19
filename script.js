const firstN = document.querySelector("#first-n");
const secondN = document.querySelector("#second-n");
const resultInput = document.querySelector("#result");
const refreshBtn = document.querySelector("#refresh-btn");
const checkBtn = document.querySelector("#check-btn");

var random1, random2, sum;

function randomNUmber() {
  let min = 1;
  let max = 100;

  let random1 = Math.floor(Math.random() * (max - min)) + min;
  let letter = random1 < 10 ? "0" + random1 : random1;
  firstN.innerHTML = letter;

  let random2 = Math.floor(Math.random() * (max - min)) + min;
  let letter2 = random2 < 10 ? "0" + random2 : random2;
  secondN.innerHTML = letter2;

  sum = random1 + random2;
}
randomNUmber();
refreshBtn.addEventListener("click", randomNUmber);

checkBtn.addEventListener("click", function () {
  var value = resultInput.value;
  if (sum == value) {
    alert("The answer is Correct ✔️");
    resultInput.value = "";
    randomNUmber();
  } else if (value == "") {
    alert("Please Enter the sume of the Numbers");
  } else {
    alert("The answer is False ❌");
    resultInput.value = "";
  }
});

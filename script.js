const firstN = document.querySelector("#first-n");
const secondN = document.querySelector("#second-n");
const resultInput = document.querySelector("#result");
const refreshBtn = document.querySelector("#refresh-btn");
const checkBtn = document.querySelector("#check-btn");

function randomNUmber() {
  let min = 1;
  let max = 100;

  let random1 = Math.floor(Math.random() * (max - min)) + min;
  let letter = random1 < 10 ? "0" + random1 : random1;
  firstN.innerHTML = letter;

  let random2 = Math.floor(Math.random() * (max - min)) + min;
  let letter2 = random2 < 10 ? "0" + random2 : random2;
  secondN.innerHTML = letter2;

  const sum = random1 + random2;

  checkBtn.addEventListener("click", function () {
    var value = parseInt(resultInput.value);
    console.log(value);
    if (sum === value) {
      alert("The answer is Correct ✔️");
      value = " ";
    } else {
      alert("The answer is False ❌");
    }
  });
}
randomNUmber();
refreshBtn.addEventListener("click", randomNUmber);

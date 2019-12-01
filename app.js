var inputOne = document.getElementById("form-number-1");
var inputOneUnit = document.getElementById("form-unit-1");
var inputTwo = document.getElementById("form-number-2");
var inputTwoUnit = document.getElementById("form-unit-2");
var inputThree = document.getElementById("form-number-3");
var inputThreeUnit = document.getElementById("form-unit-3");
var inputFour = document.getElementById("form-number-4");
var inputFourUnit = document.getElementById("form-unit-4");
var inputFive = document.getElementById("form-number-5");
var inputFiveUnit = document.getElementById("form-unit-5");
var inputSix = document.getElementById("form-number-6");
var inputSixUnit = document.getElementById("form-unit-6");
var confirmation = document.getElementById("confirmation");
var firstDirect = document.querySelector(".first-direct");
var secondDirect = document.querySelector(".second-direct");
var firstInverse = document.querySelector(".first-inverse");
var secondInverse = document.querySelector(".second-inverse");
var loading = document.querySelector("#loading");
var solution = document.querySelector("#solution-main");

var firstButton = document.querySelector("#first-submit");
var secondButton = document.querySelector("#second-submit");
var answerMain = document.querySelector(".answer-main");
var answerUnit = document.querySelector(".answer-unit");

//functions
firstButton.addEventListener("click", openSesame);
secondButton.addEventListener("click", openSecondSesame);

function openSesame(e) {
  e.preventDefault();
  confirmation.style.display = "block";
}

function openSecondSesame(e) {
  e.preventDefault();

  if (firstDirect.checked && secondInverse.checked) {
    var a =
      (inputOne.value * inputFive.value * inputThree.value) /
      (inputTwo.value * inputSix.value);
    console.log(a);
    answerMain.innerHTML = a.toFixed(2);
    answerUnit.innerHTML = inputFourUnit.value;
    // return a;
  }
  if (firstInverse.checked && secondDirect.checked) {
    var b =
      (inputOne.value * inputTwo.value * inputSix.value) /
      (inputFive.value * inputThree.value);
    answerMain.innerHTML = b.toFixed(2);
    answerUnit.innerHTML = inputFourUnit.value;
    console.log(b);
    // return b;
  }
  if (firstDirect.checked && secondDirect.checked) {
    var c =
      (inputOne.value * inputFive.value * inputSix.value) /
      (inputTwo.value * inputThree.value);
    console.log(c);
    answerMain.innerHTML = c.toFixed(2);
    answerUnit.innerHTML = inputFourUnit.value;
    // return c;
  }
  if (firstInverse.checked && secondInverse.checked) {
    var d =
      (inputOne.value * inputTwo.value * inputThree.value) /
      (inputFive.value * inputSix.value);
    console.log(d);
    answerMain.innerHTML = d.toFixed(2);
    answerUnit.innerHTML = inputFourUnit.value;
    // return d;
  }

  //loading style
  loading.style.display = "block";

  //set timeout for loader and for displaying result
  setTimeout(function() {
    loading.style.display = "none";

    // Results jquery fade in
    $("#solution-main").fadeIn(1200);
  }, 1500);
}

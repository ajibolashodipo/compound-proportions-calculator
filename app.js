//to load the page from the very top. Every single time
$(window).on("beforeunload", function() {
  $(window).scrollTop(0);
});

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
var reload = document.querySelector("#reload-code");
var errMessage = document.querySelector(".err-message");

var firstButton = document.querySelector("#first-submit");
var secondButton = document.querySelector("#second-submit");
var answerMain = document.querySelector(".answer-main");
var answerUnit = document.querySelector(".answer-unit");

//functions
firstButton.addEventListener("click", openSesame);
secondButton.addEventListener("click", openSecondSesame);
reload.addEventListener("click", reloadPage);

// smooth scrolling
$("#first-submit").click(function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#first-submit").offset().top + 220
    },
    1200
  );
});
$("#second-submit").click(function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#second-submit").offset().top + 200
    },
    1200
  );
});

function openSesame(e) {
  e.preventDefault();
  //input validation against empty input
  if (
    !inputOne.value ||
    !inputTwo.value ||
    !inputThree.value ||
    !inputFour.value ||
    !inputFive.value ||
    !inputSix.value
  ) {
    // console.log("tobilobaaaa");
    errMessage.style.visibility = "visible";
    setTimeout(function() {
      errMessage.style.visibility = "hidden";
    }, 2000);

    return;
  } else {
    confirmation.style.display = "block";
  }
}

function reloadPage(e) {
  //to reload the page
  window.location.reload();

  //to ensure the page begins from the very top position
  $(document).ready(function() {
    $(window).scrollTop(0);
  });
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

  // to conceal the answer key on multiple clicks on second submit
  solution.style.display = "none";
  reload.style.display = "none";

  //loading style
  loading.style.display = "block";

  //set timeout for loader and for displaying result
  setTimeout(function() {
    loading.style.display = "none";

    // Results jquery fade in
    $("#solution-main").fadeIn(1000);
    $("#reload-code").fadeIn(1200);
  }, 1500);
}

let numberFun = document.forms["numberFun"];
let start = document.getElementById("start");
let end = document.getElementById("end");
let step = document.getElementById("step");
let results = document.getElementById("results");
let submitButton = document.getElementById("submitButton");

function validate() {
  numberFun.className = "needs-validation";

  if (!numberFun.checkValidity()) {
    numberFun.className = "was-validated";
    return false;
  }

  return false;
}

// function printEvenNums() {
//   //get the start and end range from user
//   var start = parseInt(document.getElementById("start").value);
//   var end = parseInt(document.getElementById("end").value);
//   var evenNums = "<br>Even Numbers:<br>";

//   for (i = start; i <= end; i++) {
//     // let's divide the value by 2
//     // if the reminder is zero then it's an Even number
//     if (i % 2 == 0) {
//       evenNums += i + "<br>";
//     }
//   }
//   //print the values
//   document.getElementById("result").innerHTML = evenNums;
// }

function resetView() {
  numberFun.className = "needs-validation";
  results.style.display = "none";
  submitButton.innerText = "Calculate";
  start.focus();
}

var startNum = document.getElementById("start");
var endNum = document.getElementById("end");
var stepNum = document.getElementById("step");
var displayResults = document.getElementById("results");
var submitBtn = document.getElementById("submitButton");

function validate() {
  // Removes any validation styles activated by prev validation
  numberFun.className = "needs-validation";
  contentString = "";
  // if returns false, one or more form inputs are invalid, if so we add was-validated class to the form and exit function
  // checkValidity adds validation pseudo classes to each invalid element
  if (!numberFun.checkValidity()) {
    numberFun.className = "was-validated";
    return false;
  }
var startInput = parseInt(startNum.value);
console.log(typeof(startInput));
console.log(startInput);
var endInput = parseInt(endNum.value);
var stepInput = parseInt(stepNum.value);
  if (startInput && endInput) {
    // So long as we have a start & end value
    if (!stepInput) stepInput = 2;
    // If we don't have an increment, count by 2s
    contentString += "<p>The values between " + startInput + " and " + endInput + " in increments of " + stepInput + ":</p><ul>";
      for(i = startInput; i <= endInput; i += stepInput) {
        contentString += "<li>" + i + "</li>";
      }
      contentString += "</ul";

      submitBtn.innerHTML = contentString;
  }
}

validate();


$(document).ready(function() {

  // storing user inputs
  var inputs = [""];

  var totalString;
  var operators = ["+", "-", "*", "/"];
  var dotOperator = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if(dotOperator.includes(inputs[inputs.length-1] === true && input === ".")) {
      console.log("Too many dots");
    }
    else if(inputs.length === 1 && operators.includes(input) === false) {
      inputs.push(input);
    }
    else if(operators.includes(inputs[inputs.length-1] === false)) {
      inputs.push(input);
    }
    else if(numbers.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  //this function will display the user inputs in our result display
  function update() {
    totalString = inputs.join("");
    $("#result").html(totalString);
    console.log(totalString);
  }
  function getTotal() {
    totalString = inputs.join("");
    $("#result").html(eval(totalString));
  }

  $("button").on("click", function() {
    if(this.id === "cancelButton") {
      inputs = [""];
      update();
    }
    else if(this.id === "total") {
      getTotal();
    }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "*", "/", ".") === -1) {
        getValue(this.id);
        console.log(this.id);
      }
      else {
        getValue(this.id);
        // console.log(this.id);
      }
    }
  });
});

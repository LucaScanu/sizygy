$(document).ready(function() {

  // storing user inputs
  var entries = [""];

  var totalString;

  var operators = ["+", "-", "*", "/"];
  var dotOperator = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(entry) {
    if(dotOperator.includes(entries[entries.length-1] === true && entry === ".")) {
      console.log("Duplicate '.'");
    }
    else if(entries.length === 1 && operators.includes(entry) === false) {
      entries.push(entry);
    }
    else if(operators.includes(entries[entries.length-1] === false)) {
      
    }
  }

  //this function will display the user entries in our result display
  function update() {
    totalString = entries.join("");
    $("#result").html(totalString);
  }
  function getTotal() {
    totalString = entries.join("");
    $("#result").html(eval(totalString));
  }

  $("button").on('click', function() {
    if(this.id === cancelButton) {
      entries = [""];
      update();
    }
    else if(this.id === saveButton) {
      getTotal();
    }
    else {
      if(entries[entries.length-1].indexOf("+", "-", "*", "/", ".") === -1) {
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });
});

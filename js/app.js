$(document).ready(function() {

  // storing user inputs
  var inputs = [""];

  var totalString;
  var operators = ["+", "-", "*", "/"];
  var dotOperator = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var savedMaths = [""];

  function getValue(input) {
    if(dotOperator.includes(inputs[inputs.length-1]) === true && input === ".") {
      console.log("Too many dots");
    }
    else if(inputs.length === 1 && operators.includes(input) === false) {
      inputs.push(input);
    }
    else if(operators.includes(inputs[inputs.length-1]) === false) {
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
    var currentResult = eval(totalString);
    totalString = inputs.join("");
    $("#result").html(eval(totalString));
    $("#saveButton").on("click", function() {
      savedMaths.push(currentResult);
      var currentDate = new Date();
      var today =
      currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear();
      var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      var date = today+" "+time;
      var name = prompt("How would you like to call your result?");

    $(".savedMath").text(""+name+". "+date+".");

      console.log(name, date);
    })

  }

  $("button").on("click", function() {
    if(this.id === "cancelButton") {
      inputs = [""];
      update();
    }
    else if(this.id === "total") {
      getTotal();
      inputs = [""];
    }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "*", "/", ".") === -1) {
        getValue(this.value);
      }
      else {
        getValue(this.value);
      }
    }
  });
});

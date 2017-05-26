$(document).ready(function() {

  // storing user inputs
  var inputs = [""];

  var totalString;
  var operators = ["+", "-", "*", "/"];
  var dotOperator = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var currentResult;
  var savedMaths = [];

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
  }
  function getTotal() {
    currentResult = eval(totalString);
    totalString = inputs.join("");
    $("#result").html(eval(totalString));
    saveResult();
  }

  function saveResult() {

    var children = $("div.memory button.savedMath").length;
    var text = $("div.memory button.savedMath").text();
    console.log(children, text);

    /* Once clicked the save button will saved current result into saved maths array,  get the current date and prompt the user for a name. At the end of it will call the save math function */

    $("#saveButton").on("click", function(e) {
      savedMaths.push(currentResult);
      console.log(savedMaths);
      getDate();
    });

    function getDate() {
      var currentDate = new Date();
      var today =
      currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear();
      var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      var date = today+" "+time;
      saveMath();
    }

    function saveMath() {
      var name = prompt("How would you like to call your result?");
      e.stopImmediatePropagation(); //this method will stop the promp popping up more than once at a time.

      if($("button.savedMath:nth-child(1)").text() === ""){
        $(".savedMath:nth-child(1)").text(""+name+". "+date+".");
      }
      else if($("button.savedMath:nth-child(1)").text() !== ""){
        $(".savedMath:nth-child(2)").text(""+name+". "+date+".");
      }
      else if($("button.savedMath:nth-child(2)").text() !== ""){
        $(".savedMath:nth-child(3)").text(""+name+". "+date+".");
      }
    }
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

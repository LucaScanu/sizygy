$(document).ready(function() {

  // storing user inputs
  var inputs = [""];

  var totalString;
  var operators = ["+", "-", "*", "/"];
  var dotOperator = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var currentResult;
  var savedMaths = [];
  var date;
  var name;
  var children = $("div.memory button.savedMath").length;
  var index = [];

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

    /* Once clicked, the save button will saved current result into saved maths array,  get the current date and prompt the user for a name and it will call the getDate function */

    $("#saveButton").on("click", function(e) {
      name = prompt("How would you like to call your result?");
      e.stopImmediatePropagation(); //this method will stop the promp popping up more than once at a time.
      savedMaths.push(currentResult);
      index.push(savedMaths.indexOf(currentResult));
      console.log(index);
      getDate();
    });
  }

  function getDate() {
    var currentDate = new Date();
    var today =
    currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear();
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    date = today+" "+time;
    saveMath();
  }

  function saveMath() {

      if($("#save1").text() === "") {
        $("#save1").text("" +name+ ". " +date+ ".");
      }
      else if($("#save1").text() !== "") {
        $("#save2").text("" +name+ ". " +date+ ".");
      }
      else if($("#save1").text() !== "" && $("#save2").text() !== "") {
        $("#save3").text("" +name+ ". " +date+ ".");
      }
      displayResults();
  }

    function displayResults() {
      $("#save1").on("click", function() {
        $("#result").html(valueOf(savedMaths.length-1));
      });
      $("#save2").on("click", function() {
        $("#result").html(valueOf(savedMaths.length-1));
      });
    }

    $("#delete1").on("click", function() {
        $("#save1").text("");
    });

    $("#delete2").on("click", function() {
        $("#save2").text("");
    });

    $("#delete3").on("click", function() {
        $("#save3").text("");
    });

    $("#delete4").on("click", function() {
        $("#save4").text("");
    });

    $("#delete5").on("click", function() {
        $("#save5").text("");
    });


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

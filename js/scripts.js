var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#tablespoons").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = 0.333333;
    var result = multiply(number1, number2);
    $("#output1").text(result + " Tablespoons");
  });
});

$(document).ready(function() {
  $("form#cups").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = 16.000000;
    var result = divide(number1, number2);
    $("#output2").text(result + " Cups");
  });
});

$(document).ready(function() {
  $("form#pints").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide2").val());
    var number2 = 1.974000;
    var result = divide(number1, number2);
    $("#output3").text(result + " Pints");
  });
});

$(document).ready(function() {
  $("form#quarts").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide3").val());
    var number2 = 2.000000;
    var result = divide(number1, number2);
    $("#output4").text(result + " Quarts");
  });
});

$(document).ready(function() {
  $("form#gallons").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide4").val());
    var number2 = 4.000000;
    var result = divide(number1, number2);
    $("#output5").text(result + " Gallons");
  });
});
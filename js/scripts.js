//Business Logic
var add = function(number1, number2) {
return number1 + number2;
};

// Front End Logic
$(document).ready(function() {
  $("div#click").submit(function() {
//    var number1 = parseInt($("#sword").val());
//    var number2 = parseInt($("#powers").val());
//    var number3 = parseInt($("#brains").val());
    debugger;
    var q1answer = $("input:radio[name=choice1]:checked").val();
    alert("here we are");
    var q2answer = $("input:radio[name=choice2]:checked").val();
    var q3answer = $("input:radio[name=choice3]:checked").val();
    var q4answer = $("input:radio[name=choice4]:checked").val();

//    var result;
//    if (operator === "add") {
//      result = add(number1, number2);
//    } else if (operator === "subtract") {
//      result = subtract(number1, number2);
//    } else if (operator === "multiply") {
//      result = multiply(number1, number2);
//    } else if (operator === "divide"){
//      result = divide(number1, number2);
    event.preventDefault();
    });
  });

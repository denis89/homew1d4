// Declare the variable before using a function on it.

var basicCalc = document.getElementById('basic-calc');

basicCalc.addEventListener("click", function() {
        var num1 = parseFloat(document.getElementById("basic-num-1").value);
        console.log(num1)

        var op = document.getElementById("basic-operation").value;
        console.log(op)

        var num2 = parseFloat(document.getElementById("basic-num-2").value); 
        console.log(num2)

  var basicAnswer = document.getElementById("basic-answer");
        console.log(basicAnswer)
     basicAnswer.className = "show";

     var answer;
      if (op === "+"){
        answer = num1 + num2;
        console.log(answer);
 }
      else if (op === "-"){
        answer= num1 - num2;
        console.log(answer);
      }
      else if (op === "/"){
        answer = num1 / num2;
        console.log(answer);
      }
      else {
        answer = num1 * num2;
        console.log(answer);
      }
        document.getElementById("basic-answer-alert").innerHTML = answer;     
});

var bmi = document.getElementById('bmi-calc');
bmi.addEventListener("click", function() {
        var  mass = parseFloat(document.getElementById("bmi-mass").value);
        console.log(mass)

        var height = document.getElementById("bmi-height").value;
        console.log(height)

        var answer = mass/(height*height); 
        console.log(answer)

});
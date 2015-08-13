// Declare the variable before using a function on it.

var basicCalc = document.getElementById('basic-calc');

basicCalc.addEventListener("click", function() {
        var num1 = parseFloat(document.getElementById("basic-num-1").value);
        console.log(num1)

        var op = document.getElementById("basic-operation").value;
        console.log(op)

        var num2 = parseFloat(document.getElementById("basic-num-2").value); 
        console.log(num2)

        var sum = num1 + num2;
        console.log(sum)

        var basicAnswer = document.getElementById("basic-answer");
        console.log(basicAnswer)
     basicAnswer.className = "show";
     document.getElementById("basic-answer-alert").innerHTML = sum; });
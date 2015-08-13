// BasicCalc

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

//Trip
var tripCalc = document.getElementById('trip-calc');

tripCalc.addEventListener("click", function() {
        var distance = parseFloat(document.getElementById("trip-distance").value);
        console.log(distance)

        var mpg = document.getElementById("trip-mpg").value;
        console.log(mpg)

        var cost = parseFloat(document.getElementById("trip-cost").value); 
        console.log(cost)

        var speed = parseFloat(document.getElementById("trip-speed").value); 
        console.log(speed)

         var time = distance / speed;
         time = Math.round(time * 100) / 100; // round it to two decimals
      var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

      var cost = (distance / actualMPG * cost);
      cost = Math.round(cost * 100) / 100;

var tripAnswer = document.getElementById("trip-answer");
        console.log(tripAnswer)
     tripAnswer.className = "show";
document.getElementById("trip-answer-alert").innerHTML = time; 
});


// BMI
var bmi = document.getElementById('bmi-calc');
bmi.addEventListener("click", function() {
        var  mass = parseFloat(document.getElementById("bmi-mass").value);
        console.log(mass)

        var height = document.getElementById("bmi-height").value;
        console.log(height)

        var answer = mass/(height*height); 
        console.log(answer);

        var bmiAnswer = document.getElementById("bmi-answer");
        console.log(bmiAnswer);
     bmiAnswer.className = "show";
document.getElementById("bmi-answer-alert").innerHTML = bmiAnswer; 
});


// Mortgage
var mortgage = document.getElementById('mortgage-calc');
mortgage.addEventListener("click", function() {
        var  loan = parseFloat(document.getElementById("mortgage-loan").value);
        console.log(loan)

        var apr = document.getElementById("mortgage-apr").value;
        console.log(apr)

        var term = document.getElementById("mortgage-term").value;
        console.log(term)

         var temp = Math.pow((1 + apr), term);
      var payment = loan * apr * temp / (temp - 1);
      payment = Math.round(payment * 100) / 100;

 var mAnswer = document.getElementById("mortgage-answer");
        console.log(mAnswer);
     mAnswer.className = "show";
document.getElementById("mortgage-answer-alert").innerHTML = payment; 
});

 $(document).ready(function() {
   //The player will be shown a random number at the start of the game.
   var numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
   $("#matchNumber").html(numToGuess);

   //COUNTERS
   var wins = 0;
   var losses = 0;
   var counter = 0;
   $("#userScore").html(counter);

   // Each crystal should have a random hidden value between 1 - 12
   var crystalValue1 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
   var crystalValue2 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
   var crystalValue3 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
   var crystalValue4 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
   console.log("Crystal 1 Value: " + crystalValue1);
   console.log("Crystal 2 Value: " + crystalValue2);
   console.log("Crystal 3 Value: " + crystalValue3);
   console.log("Crystal 4 Value: " + crystalValue4);

   // When the player clicks on a crystal it will add a specific amount of points to the player's total score.

   $('.crystalImage1').on('click', function() {
     counter = counter + crystalValue1;
     console.log('crystal 1 ' + counter);
     $("#userScore").html(counter);
     if (counter == numToGuess) {
       alert('You WON!');
       wins++;
     } else if (counter > numToGuess) {
       alert("You LOST");
       losses++;
     }

     $("#win").html(wins);
     $("#lose").html(losses);

   });

   $('.crystalImage2').on('click', function() {
     counter = counter + crystalValue2;
     $("#userScore").html(counter);
     console.log(counter);
     if (counter == numToGuess) {
       alert('You WON!');
       wins++;
     } else if (counter > numToGuess) {
       alert("You LOST");
       losses++;
     }
   });

   $('.crystalImage3').on('click', function() {
     counter = counter + crystalValue3;
     $("#userScore").html(counter);
     console.log(counter);
     if (counter == numToGuess) {
       alert('You WON!');
       wins++;
     } else if (counter > numToGuess) {
       alert("You LOST");
       losses++;
     }
   });

   $('.crystalImage4').on('click', function() {
     counter = counter + crystalValue4;
     $("#userScore").html(counter);
     console.log(counter);
     if (counter == numToGuess) {
       alert('You WON!');
       wins++;
     } else if (counter > numToGuess) {
       alert("You LOST");
       losses++;
     }
   });

 });


 
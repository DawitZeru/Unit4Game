$(document).ready(function() {
    
    // Variables
    
    var counter = 0;
    var wins = 0;
    var losses = 0;

    function randomNum(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;

    }


   var targetNumber = randomNumber(19 - 120);
    $("#target").html(targetNumber);

    var gemOne = randomNum(1, 12);
    var gemTwo = randomNum(1, 12);
    var gemThree = randomNum(1, 12);
    var gemFour = randomNum(1, 12);

function reset(){
    counter = 0;
    $("#target").html(targetNumber);
    targetNumber = randomNum(19 - 120);
    $("#playerScore").text(count);
    var gemOne = randomNum(1, 12);
    var gemTwo = randomNum(1, 12);
    var gemThree = randomNum(1, 12);
    var gemFour = randomNum(1, 12);


    $("#crystalOne").on("click", function(){
      counter += gemOne;
      Winlose();
      $(playerScore).text(counter); 
    
    });

    $("#crystalTwo").on("click", function(){
        counter += gemTwo;
        Winlose();
        $(playerScore).text(counter); 
      
      });

      $("#crystalThree").on("click", function(){
        counter += gemThree;
        Winlose();
        $(playerScore).text(counter); 
      
      });

      $("#crystalFour").on("click", function(){
        counter += gemFour;
        Winlose();
        $(playerScore).text(counter); 
      
      });

      function Winlose(){

        if (counter === targetNumber){
            wins += 1;
            alert("Winner!");
            $(lose),text(losses);
            reset();
        
        }

        else if(counter > targetNumber){
            losses += 1;
            alert("Try Again!");
            $(loss).text(losses);
            reset();
        }

    
    
      }
      
    }});

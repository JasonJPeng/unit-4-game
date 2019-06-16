
$(document).ready(function() { //  Beginning of jQuery

// return a random integer between a and b (including a b)
function random(a, b) {
   return  Math.floor(Math.random() * (b - a + 1)) + a;
}

function init () {
  total = 0;
  game++;
    
//    setTimeout(function () {
    // $("#gameStatus").text("Starting...");
//    }, 2000);


// Pick 4 crystal
   
   var img = "assets/images/" + random(1,20) +".jpeg"
   $("#btn1 img").attr("src", img);
   var img = "assets/images/" + random(1,20) +".jpeg"
   $("#btn2 img").attr("src", img);
   var img = "assets/images/" + random(1,20) +".jpeg"
   $("#btn3 img").attr("src", img);
   var img = "assets/images/" + random(1,20) +".jpeg"
   $("#btn4 img").attr("src", img);
   
   $("#game").text(game);
   target = random(19, 120);
   $("#target").text(target);
   $("#total").text(total);

   btn1 = random(1,12);
   $("#btn1").attr("user-data", btn1);
   btn2 = random(1,12);
   $("#btn2").attr("user-data", btn2);
   btn3 = random(1, 12);
   $("#btn3").attr("user-data", btn3);
   btn4 = random(1,12)
   $("#btn4").attr("user-data", btn4);

   $("#gameStatus").text("Game Started");

}


var target, btn1, btn2, btn3, btn4, total;
var wins=0, losses=0, game = 0;  

init();
console.log(btn1, btn2, btn3, btn4);

$(".btn").on("click", function() {
   total += parseInt($(this).attr("user-data"));
   $("#total").text(total);
   
   if (total > target) { // Loss
    //   alert ("You lose !!");
      $("#gameStatus").text("Game Over");
      $("#winLoss").text("You Lost");
      $("winLoss").css("color", "red");
      $("#losses").text(++losses);
      init();
   } else if (total === target) { // win
    //   alert ("You win");
      $("#gameStatus").text("Game Over");
      $("#winLoss").text("You Won");
    //   $("winLoss").css("color: green"});
      $("#wins").text(++wins);
      init();

   } // esle -- continue to play

})



}) // End of jQuery

$(document).ready(function() { //  Beginning of jQuery

// return a random integer between a and b (including a b)
function random(a, b) {
   return  Math.floor(Math.random() * (b - a + 1)) + a;
}



function init () {
  var num, A=[], img; 
    
  total = 0;
  game++;
    
//    setTimeout(function () {
    // $("#gameStatus").text("Starting...");
//    }, 2000);


// Pick 4 crystal
   
   for (var i=1; i <= 4; i++) {
     do {num = random(1,20)} while(A.indexOf(num)>=0 );
     A.push(num);

     // ex. => $("#btn1 img").attr("src", "assets/images/12.jpeg");
     $("#btn" + i + " img" ).attr("src", "assets/images/" + num + ".jpeg");
   
   }

   
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
   $("#winLoss").text("");
   $("#winLoss,#gameStatus").css("color", "#ffffff");


}


var target, btn1, btn2, btn3, btn4, total;
var wins=0, losses=0, game = 0;  

init();
console.log(btn1, btn2, btn3, btn4);




$(".btn").on("click", function() {
   total += parseInt($(this).attr("user-data"));
   $("#total").text(total);
// add to myCollection .....
   var collectedImg = $('<img class="smallImg" user-data="">');
//    collectedImg.attr("src", "assets/images/1.jpeg");
console.log($(this));
   collectedImg.attr("src", $(this).children().attr("src"));
   collectedImg.appendTo("#myCollection");

   
   if (total > target) { // Loss
    //   alert ("You lose !!");
      $("#gameStatus").text("Game Over");
      $("#winLoss").text("You Lost");
      $("#winLoss,#gameStatus").css("color", "deeppink");
      $("#losses").text(++losses);

// Remove all temperoty collections , which user-data = ""
      
      $(".smallImg").each(function(e) {
          if ($(this).attr("user-data") === "")  $(this).remove()  ;  
      })
      setTimeout(init,2000);
   } else if (total === target) { // win
    //   alert ("You win");
      $("#gameStatus").text("Game Over");
      $("#winLoss").text("You Won");
      $("#winLoss,#gameStatus").css("color", "green");
      $("#wins").text(++wins);

// Legalize all collections by changing user-data to "collected" 
    
     $(".smallImg").each(function (e) {
         $(this).attr("user-data", "collected");
     })

     setTimeout(init,2000);

   } // esle -- continue to play

})



}) // End of jQuery
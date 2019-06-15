
$(document).ready(function() { //  Beginning of jQuery

// return a random integer between a and b (including a b)
function random(a, b) {
   return  Math.floor(Math.random() * (b - a + 1)) + a;
}

function init () {
  total = 0;
   
   target = random(19, 120);
   $("#target").text(target);
   $("#total").text(total);

   btn1 = random(1,12);
   $("#btn1").attr("user-data", btn1);
   btn2 = random(1,12);
   $("#btn2").attr("user-data", btn2);
   btn3 = random(1, 12);
   $("#btn3").attr("user-data", btn3);
   btn4 = random(1,12);
   $("#btn4").attr("user-data", btn4);
}


var target, btn1, btn2, btn3, btn4, total;  

init();
console.log(btn1, btn2, btn3, btn4);

$(".btn").on("click", function() {
   total += parseInt($(this).attr("user-data"));
   $("#total").text(total);
   
   if (total > target) { // Loss
      alert ("You lose !!");
      init();
   } else if (total === target) { // win
      alert ("You win");
      init();

   } // esle -- continue to play

})



}) // End of jQuery
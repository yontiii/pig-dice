var output = [];
var initScore = 0;

function roll() {
  var dice = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score").innerHTML=dice;
  var totalScore = initScore += dice;
  output.unshift(score);
  console.log(output);
  document.getElementById("roll1").innerHTML=totalScore;
}


function roll2(){
  var dice2 = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score").innerHTML=dice2;
  var totalScore = initScore += dice2;
  document.getElementById("roll1").innerHTML=totalScore;
}

//user interface logic
$(document).ready(function(){
  $("#hold").click(function(){
    $("#total").fadeIn();
  })
  $("").click(function(){

  })
})

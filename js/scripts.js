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

$(document).ready(function(){
  $("#hold").click(function(){
    $("#total").fadeIn();
  })
})




//
// James Andere [8:21 AM]
// var totalSum=[];
// var sum=[];
// var currentScore=0;
// function roll() {
//   var rollDice=document.getElementById('game').innerHTML=parseInt(Math.random()*6+1);
//   // var diceRoll=document.getElementById('gam').innerHTML=parseInt(Math.random()*6+1);
//   if(rollDice!=1){
//       currentScore+=rollDice;
//       // alert("the current score is" + currentScore);
//       document.getElementById("round").innerHTML=currentScore;
//   }
//   else{
//    currentScore=0;
//   }
//
// };

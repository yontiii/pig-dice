var output = [];
var initScore = 0;

function roll() {
  var dice = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score").innerHTML=dice;
  var totalScore = initScore += dice;
  output.unshift(score);
  console.log(output);
  if (dice !==1){
      document.getElementById("roll1").innerHTML=totalScore;
  }
  else{
  var totalScore = 0;
  }
}


function roll2(){
  var dice2 = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score").innerHTML=dice2;
  var totalScore = initScore += dice2;
  document.getElementById("roll1").innerHTML=totalScore;
}




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

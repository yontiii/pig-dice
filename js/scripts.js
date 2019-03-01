// var dice = Math.floor(Math.random() * 6) + 1;

function roll1() {
  var dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("roll1").innerHTML = dice;
}
var dice1 = Math.floor(Math.random() * 6) + 1;

function roll2() {
  document.getElementById("roll2").innerHTML = dice1;
}
var dice2 = Math.floor(Math.random() * 6) + 1;

function roll3() {
  document.getElementById("roll3").innerHTML = dice2;
}
var dice3 = Math.floor(Math.random() * 6) + 1;

function roll4() {
  document.getElementById("roll4").innerHTML = dice3;
}
var dice4 = Math.floor(Math.random() * 6) + 1;

function roll5() {
  document.getElementById("roll5").innerHTML = dice4;
}
var dice5 = Math.floor(Math.random() * 6) + 1;

function roll6() {
  document.getElementById("roll6").innerHTML = dice5;
}
function Total(roll1,roll2,roll3){
  this.roll1=roll1
  this.roll2=roll2
    this.roll3=roll3
}
function averageScore(){
var firstScore=document.getElementById("roll1").val();
var secondScore=document.getElementById("roll2").val();
var thirdScore=document.getElementById("roll3").val();
var totalScore = firstScore+secondScore+thirdScore;
document.getElementById("score").innerHTML=totalScore;;
}

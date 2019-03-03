var scores = [];
var play = 0;

function playerOne() {
 var run = Math.floor(Math.random() * 6) + 1;
  document.getElementById("roll1").innerHTML = run;
  scores.push(run);
  for (i = 0; i < scores.length; i++) {
    play += scores[i];
  }
  document.getElementById("woke").innerHTML=play;
}

var output = [];
var initScore = 0;

function roll() {
  var dice = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score").innerHTML=dice;
  var totalScore = initScore += dice;
  output.unshift(score);
  console.log(output);
  if (dice==1){
    $(document).ready(function(){
      output.length =0;
      $("#player1").fadeOut(2000);
      $("#alert1").fadeIn();
    })
  }
  else{
  document.getElementById("roll1").innerHTML=totalScore;
  }

}


function roll2(){
  var dice2 = Math.floor(Math.random()*6)+1;
  var score = document.getElementById("score2").innerHTML=dice2;
  var newScore = initScore += dice2;
  document.getElementById("roll2").innerHTML=newScore;
  if (dice2==1){
    $(document).ready(function(){
      $("#player2").fadeOut(2000);
      $("#alert2").fadeIn();
    })
  }
  else{
  document.getElementById("roll1").innerHTML=totalScore;
  }

  if (totalScore>=100){
    
  }
}

//user interface logic
$(document).ready(function(){
  $("#hold").click(function(){
    $("#total").toggle(2000);
  })
  $("#instruct").click(function(){
    $("#instructions").toggle(2000);
  })
  $("#hold2").click(function(){
    $("#total2").toggle(2000);
  })
  $("#pass1").click(function(){
    $("#alert1").fadeOut(2000);
    $("#player2").toggle(2000);
  })
  $("#pass2").click(function(){
    $("#alert2").toggle(2000);
    $("#player2").toggle(2000);
  })
})

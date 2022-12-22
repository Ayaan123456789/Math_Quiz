queastion_turn = "player1";
answer_turn = "player2";

player1Score = 0;
player2Score = 0;


 player1Name = localStorage.getItem("player1");
 player2Name = localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML = player1Name;
document.getElementById("player2_name").innerHTML = player2Name;
console.log(player1Name);
console.log(player2Name);


function Send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    document.getElementById("Question").innerHTML = number1 + "X" + number2;

}

  

function Check() {
typedAnswer = document.getElementById("answer").value;



if (actual_answer == typedAnswer) {

    if (answer_turn == "player2"){
      
     answer_turn = "player1"   
     document.getElementById("question_turn").innerHTML = "Player 2";
     document.getElementById("answer_turn").innerHTML = "Player 1";
   
    }
    else{
        answer_turn = "player2"   
        document.getElementById("question_turn").innerHTML = "Player 1";
        document.getElementById("answer_turn").innerHTML = "Player 2";
      

    }
   
   
    if (answer_turn == "player2"){
      player2Score = player2Score + 1;
      document.getElementById("player2_score").innerHTML = player2Score ;

    }

    else {
        player1Score = player1Score + 1;
        document.getElementById("player1_score").innerHTML = player1Score ;

    }





}

document.getElementById("Question").innerHTML = "";
document.getElementById("answer").value = "";
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";

}



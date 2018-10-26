// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var input = "";
var computerChoices = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
    
    input = $("#input").val();
    userChoice = input.toLowerCase();
    $("#userChoice").text(userChoice);
    
    randomNumber = Math.floor(Math.random()*4);
    if(randomNumber == 1){
        computerChoice = "rock";
        
        if(userChoice == "paper"){
            $("#winner").text("User!");
        }
        else if(userChoice == "rock"){
            $("#winner").text("Tie!");
        }
        else{
            $("#winner").text("Computer");
        }
    }
    else if(randomNumber == 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"; 
    }
});

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var input = "";
var computerChoices = "rock" + "paper" + "scissors";
var computerChoice = "";
var winner = "";

$("#shoot").click(function(){
    input = $("#input").val();
    $("#userChoice").text(input);
});
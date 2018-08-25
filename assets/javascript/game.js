$(document).ready(function () {
    //create variables and definitions for crystals
    var redGem;
    var blueGem;
    var greenGem;
    var yellowGem;
    var chosenNumber;
    var score;
    var wins = 0;
    var losses = 0;

    var reset = function () {
        score = 0;
        $("#score").text(score);
        $("#wins").text(wins);
        $("#losses").text(losses);

        redGem = Math.floor(Math.random() * 12) + 1;

        blueGem;
        do {
            blueGem = Math.floor(Math.random() * 12) + 1
        } while (blueGem === redGem);

        yellowGem;
        do {
            yellowGem = Math.floor(Math.random() * 12) + 1;
        } while (yellowGem === redGem || yellowGem === blueGem);

        greenGem;
        do {
            greenGem = Math.floor(Math.random() * 12) + 1;
        } while (greenGem === redGem || greenGem === blueGem || greenGem === yellowGem);

        //create and define variable for generated number
        chosenNumber = Math.floor(Math.random() * 103) + 18;
        $("#chosenNumber").text(chosenNumber);

        console.log(chosenNumber);
        console.log(redGem);
        console.log(blueGem);
        console.log(yellowGem);
        console.log(greenGem);
    };
    rest;

    $("#greenGem").click(function(){
        score += greenGem;
        $("#score").text(score);
        if (score === chosenNumber){
            wins++;
            reset;
        }
        if (score > chosenNumber){
            losses++;
            reset;
        }
        else {
            return;
        }
    });
});
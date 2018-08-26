$(document).ready(function () {
    //create variables and definitions for crystals
    var redGem;
    var blueGem;
    var greenGem;
    var yellowGem;
    var targetNum;
    var score = 0;
    var wins = 0;
    var losses = 0;

    var reset = function () {
        score = 0;
        $("#score").text(score);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

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
        targetNum = Math.floor(Math.random() * 103) + 18;
        $("#targetNum").text(targetNum);

        console.log(targetNum);
        console.log(redGem);
        console.log(blueGem);
        console.log(yellowGem);
        console.log(greenGem);
    };
    reset();

    $("#greenGem").click(function(){
        score += greenGem;
        console.log(score);
        $("#score").text(score);
        if (score === targetNum){
            wins++;
            reset();
        } else if (score > targetNum){
            losses++;
            reset();
        } else {
            return;
        }
    });
    $("#redGem").click(function(){
        score += redGem;
        console.log(score);
        $("#score").text(score);
        if (score === targetNum){
            wins++;
            reset();
        } else if (score > targetNum){
            losses++;
            reset();
        } else {
            return;
        }
    });
    $("#blueGem").click(function(){
        score += blueGem;
        console.log(score);
        $("#score").text(score);
        if (score === targetNum){
            wins++;
            reset();
        } else if (score > targetNum){
            losses++;
            reset();
        } else {
            return;
        }
    });
    $("#yellowGem").click(function(){
        score += yellowGem;
        console.log(score);
        $("#score").text(score);
        if (score === targetNum){
            wins++;
            reset();
        } else if (score > targetNum){
            losses++;
            reset();
        } else {
            return;
        }
    });
});
//create variables and definitions for crystals
$(document).ready(function () {
    var redGem = Math.floor(Math.random() * 10) + 1;

    var blueGem;
    do{
        blueGem = Math.floor(Math.random() * 10) + 3
    }while (blueGem === redGem);

    var yellowGem;
    do{
        yellowGem = Math.floor(Math.random() * 10) + 6;
    }while (yellowGem === redGem || yellowGem === blueGem);

    var greenGem;
    do {
        greenGem = Math.floor(Math.random() * 10) + 10
    } while (greenGem === redGem || greenGem === blueGem || greenGem === yellowGem);


console.log(redGem);
console.log(blueGem);
console.log(yellowGem);
console.log(greenGem);

//create and define variable for gerated number
var chosenNumber = Math.floor(Math.random() * 40) + 35;
console.log(chosenNumber);
});
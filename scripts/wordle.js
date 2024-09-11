var height = 6; //# of guesses
var width = 5; //lenght of the word

var row = 0; // current attempt
var column = 0; // current leter forr that attempt

var gameOver = false;
var word = "SNAKE";

window.onload = function () {
    initialize();
}

function initialize() {
    //Create the gameboard
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {

            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);

        }
    }

    //User Input 
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        //alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (column < width) {
                let currTile = document.getElementById(row.toString() + '-' + column.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    column += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < column && column <= width) {
                column -= 1;
            }
            let currTile = document.getElementById(row.toString() + '-' + column.toString());
            currTile.innerText = "";
        }
        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            column = 0; // start at 0
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is this the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } // Is it in the word?
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        }// did u miss?
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }
    }
}
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    reset();
});

for (var i = 0; i < squares.length; i++) {
    //adding colors
    squares[i].style.background = colors[i];
    //adding click listeners
    squares[i].addEventListener("click", function () {
        //grab the color of the clicked sqaure
        var clickedColor = this.style.background;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            resetButton.textContent = "Play Again?";
            changeColors(pickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    };
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = "none";
        }
        h1.style.background = "steelblue";
    }
};

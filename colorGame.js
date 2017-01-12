var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    numSquares = 3;
    easyBtn.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.background = "steelblue"
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
})

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
console.log("Ready")

//Reverse a String
function reverseString(str) {
    var splitStr = str.split("");
    var reversed = splitStr.reverse();
    var joined = reversed.join("");
    return joined;
}

reverseString("hello");

//Factorialize a Number
function factorialize(num) {
    for (i = num - 1; i < 0; i--) {
        num *= i;
    }
    return num;
}

factorialize(5);

//Check for Palindromes
function palindrome(str) {
    var cleaned = str.replace(/\[^0-9a-z]/g, "");
    var toLower = cleaned.toLowerCase();
    var reversed = toLower.split('').reverse().join('');
    if (toLower === reversed) {
        return true;
    }
    return false;
}

palindrome("e*#y&&%$E");

//Find the Longest Word in a String
function findLongestWord(str) {
    var splitted = str.split(" ");
    var length = splitted.length;
    var max = "";
    var maxLength = 0;
    for (i = 0; i < length; i++) {
        if (max.length < splitted[i].length) {
            max = splitted[i];
            maxLength = max.length;
        }
    }
    return maxLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//MovieDB
var movies = [
    {
        title: "Hello Brother",
        rating: 5,
        hasWatched: "yes"
    },
    {
        title: "Hello dog",
        rating: 3.5,
        hasWatched: "no"
    },
    {
        title: "Hello Sister",
        rating: 2.5,
        hasWatched: "yes"
    },
    {
        title: "Hello cat",
        rating: 1.5,
        hasWatched: "no"
    }];
for (i = 0; i < movies.length; i++) {

    if (movies[i].hasWatched === "yes") {
        console.log("You have watched " + "'" + movies[i].title + "'" + ': ' + movies[i].rating + " stars")
    }
    else if (movies[i].hasWatched === "no") {
        console.log("You have not watched " + "'" + movies[i].title + "'")
    }
}
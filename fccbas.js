console.log("Ready")

//reverse a string
function reverseString(str) {
    var splitStr = str.split("");
    var reverse = splitStr.reverse();
    var joined = reverse.join("");
  return joined;
}

reverseString("hello");


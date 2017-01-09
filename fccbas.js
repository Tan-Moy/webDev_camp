console.log("Ready")

//Reverse a String
function reverseString(str) {
    var splitStr = str.split("");
    var reverse = splitStr.reverse();
    var joined = reverse.join("");
  return joined;
}

reverseString("hello");

//Factorialize a Number
function factorialize(num) {
  for(i = num-1; i < 0; i--){
    num*=i;
  }
  return num;
}

factorialize(5);

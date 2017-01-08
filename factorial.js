function factorial(x){

for (i= x-1; i>0; i--){
    x*=i;
}
return console.log(x);
}

var userInput = prompt("Give me a number");
factorial(userInput)
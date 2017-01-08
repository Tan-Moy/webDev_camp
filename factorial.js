function factorial(x){

for (i=x; i>0; i--){
    x= x*i;
}
return console.log(x);
}

var userInput = prompt("Give me a number");
factorial(userInput)
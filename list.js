var todos = [];
var input = prompt("What would like to do?");
if (input === "list") {
    console.log(todos);
}
else if(input === "new"){
var add = prompt("What would you like to add?");
todos.push(add);
}
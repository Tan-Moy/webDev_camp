var todos = [];
var quit = "";
do {
    var input = prompt("What would like to do?");
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        var add = prompt("What would you like to add?");
        todos.push(add);
    }
    else if (input === "quit") {
        quit = "yes"
        console.log("Closing the app...")
    }
    else {
        console.log("Input either \"list\" or \"new\" or \"quit\".")
    }
} while (quit !== "yes")
console.log("Goodbye")
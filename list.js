var todos = [];
var quit = "";
do {
    var input = prompt("What would like to do?");
    if (input === "list") {
        console.log("**********")
        todos.forEach(function(todo,i) {
            console.log(i +": "+todo);
        });
        console.log("**********")
    }
    else if (input === "new") {
        var add = prompt("What would you like to add?");
        todos.push(add);
    }
    else if (input === "quit") {
        quit = "yes"
        console.log("Closing the app...")
    }
    else if(input === "delete"){
        var index = prompt("Enter the index of to-do to delete");
        todos.splice(index,1);
        console.log("deleted");
    }
    else {
        console.log("Input either \"list\",\"new\",\"quit\", or \"delete\".")
    }
} while (quit !== "yes")
console.log("Goodbye")
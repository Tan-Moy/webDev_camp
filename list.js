var todos = [];
var quit = "";
do {
    var input = prompt("What would like to do?");
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        newTodos();
    }
    else if (input === "quit") {
        exit();
    }
    else if (input === "delete") {
        deleteTodos();
    }
    else {
        console.log("Input either \"list\", \"new\", \"quit\", or \"delete\".")
    }
} while (quit !== "yes")
console.log("Goodbye")

//refactoring

function listTodos() {
    console.log("**********")
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function newTodos() {
    var add = prompt("What would you like to add?");
    todos.push(add);
}

function deleteTodos() {
    var index = prompt("Enter the index of to-do to delete");
    todos.splice(index, 1);
    console.log("deleted");
}

function exit(){
quit = "yes"
        console.log("Closing the app...")
}
var pageCounter = 1;
var animalContainer = document.querySelector("#animal-info");
var btn = document.querySelector("#btn")
btn.addEventListener("click", function () {

    //Create a new instance of XMLHttpRequest
    var ourRequest = new XMLHttpRequest();

    //Specify the place to GET the data
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

    //Specify what to do once the data has been loaded.
    ourRequest.onload = function () {
        //save the response text/recieved data to a variable as JSON
        var OurData = JSON.parse(ourRequest.responseText);
        renderHTML(OurData);
    };

    //Now actually send the request
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";
       for (j = 0; j < data[i].foods.likes.length; j++){
           htmlString += data[i].foods.likes[j];
       }
       htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
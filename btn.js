var button =  document.getElementById("toChange");
button.addEventListener("click", toggleColor);


function toggleColor(){
    //document.body.classList.toggle("bg");
    document.getElementsByTagName("body")[0].classList.toggle("bg")
}

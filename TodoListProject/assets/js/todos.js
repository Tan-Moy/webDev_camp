//check of Specific todo on click.
$("ul").on("click","li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click","span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding new todos
$("input").keypress(function (e) {
    if (e.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});
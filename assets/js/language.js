$('[lang="eng"]').hide();

$("#itaselector").click(function () {

$("#itaselector").css("text-decoration", "underline");
$("#engselector").css("text-decoration", "none");

$('[lang="eng"]').hide();
$('[lang="it"]').show();
});

$("#engselector").click(function () {

$("#engselector").css("text-decoration", "underline");
$("#itaselector").css("text-decoration", "none");

$('[lang="it"]').hide();
$('[lang="eng"]').show();
})

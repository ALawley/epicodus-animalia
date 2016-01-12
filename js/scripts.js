$(document).ready(function() {
  $("button#dogbark").click(function() {
    $("ul#dogsays").append("<li>Bark!</li>");
    $("ul#catsays").append("<li>Meow!</li>");
  });
  $("button#catmeow").click(function() {
    $("ul#dogsays").append("<li>Bark!</li>");
    $("ul#catsays").append("<li>Meow!</li>");
  });
});

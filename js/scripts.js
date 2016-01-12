$(document).ready(function() {
  $("button#dogbark").click(function() {
    $("ul#dogsays").append("<li>Bark!</li>");
    $("ul#catsays").append("<li>Meow!</li>");
  });
  $("button#catmeow").click(function() {
    $("ul#dogsays").append("<li>Bark!</li>");
    $("ul#catsays").append("<li>Meow!</li>");
  });
  $("button#puppyshow").click(function() {
    $("button#puppyshow").after("<img class='hidden-puppy'src='img/puppy3.jpg'>");

    $("img.hidden-puppy").first().click(function() {
      $(this).remove();
    });
  });
  $("button#kittyshow").click(function() {
    $("button#kittyshow").after("<img class='hidden-kitty'src='img/kitty.jpg'>");

    $("img.hidden-kitty").first().click(function() {
      $(this).remove();
    });
  });
});

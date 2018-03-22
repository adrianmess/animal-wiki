$(document).ready(function () {
  $("h2#harpy").click(function() {
    $(".harpy").show();
    $(".turtles").hide();
    $(".rhino").hide();
  });
  $("h2#turtles").click(function() {
    $(".turtles").show();
    $(".harpy").hide();
    $(".rhino").hide();
  });
  $("h2#rhino").click(function(){
    $(".rhino").show();
    $(".turtles").hide();
    $(".harpy").hide();
  });
});

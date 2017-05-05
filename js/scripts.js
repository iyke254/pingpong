var game = function(png) {
  for (var i = 1; i <= png; i++) {
    if (i % 15 === 0) {
      $("#result").append("<li class='pgr'>pingpong</li>");
    } else if (i % 5 === 0) {
      $("#result").append("<li class='pgr'>pong</li>");
    } else if (i % 3 === 0) {
      $("#result").append("<li class='pgr'>ping</li>");
    } else {
      $("#result").append("<li class='pgr'>"+String(i)+"</li>");
      }
    }
  }

//user interface
$(document).ready(function() {
  $("form#game").submit(function(event) {
    $("li.pgr").remove();
    event.preventDefault();
    var png = parseInt($("input#png").val());
    game(png);

  });
});

var game = function(png) {
  for (var i = 1; i <= png; i++) {
    if (i % 3 === 0) {
      $("#result").append("<li>ping</li>");
    }
  }
}
//user interface
$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var png = parseInt($("input#png").val());
    game(png);

  });
});

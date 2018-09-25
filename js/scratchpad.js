
function gameClock(c, fn) {
    var gameTimer = $("<div>").attr("class", "game-timer");
    triviaAnswers.append(gameTimer);
    var counter = c;
    gameTimerCountdown = setInterval(function(){
        gameTimer.text(counter);
        counter--;
    if (counter < 3) {
        gameTimer.attr("class", "game-timer text-danger");
    };
    if (counter == -1) {
        gameTimer.empty();
        clearInterval(gameTimerCountdown);
        fn();
      };
    }, 1000);
}

timedNote = setinterval(function() {
    play(c); 
}, 5000);
  
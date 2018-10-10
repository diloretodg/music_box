
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
  


window.addEventListener('keydown', function(e) {
	const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
	const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
	if (!audio) return; // stop function if no audio
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');

	function removeTransition(e) {
		if (e.propertyName !== 'transform') return; // Skip if it's not transform
		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})
function upTempo(){
    beats++
    tempoDisplay.text(beats);
}
function downTempo(){
    beats--;
    tempoDisplay.text(beats);
}

$("#down-tempo").on("click", function(){
    downTempo()
})
$("#up-tempo").on("click", function(){
    upTempo()
})



// currently set to 60 bpm
var tempo = 1000;
var sixteenthNote = tempo / 4;
var sixteenthNoteDot = tempo / 4 + (sixteenthNote/2);
var eigthNote = tempo / 2;
var eigthNoteDot = tempo / 2 + (eigthNote/2);
var quarterNote = tempo;
var quarterNoteDot = tempo + (quarterNote/2);
var halfNote = tempo * 2;
var halfNoteDot = tempo * 2 + (halfNote/2);
var wholeNote =  tempo * 4;




function KeyNotes(noteName,audioSrc,){
    this.noteName = noteName;
    this.audio = audioSrc;
    this.playNote = function(){
        play(this.audioSrc)
    }
}

class Song {
    consructor(name,array) {
        this.songName = name;
        this.songArr = array;
    }
}
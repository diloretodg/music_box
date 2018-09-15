var noteIntervals = [];

function playSong(s){
    for (var i = 0; i < s.length; i ++) {
        setTimeout(function(index) {
            play(s[index].note)
        }.bind(null, i), (i+1) * 1000)
    }
}

// clear all playing notes
$("#reset").on("click", function() {
    for (var i = 0; i < noteIntervals.length; i++) {
        clearInterval(noteIntervals[i])
    }
    console.log("timer reset");
})

// plays our notes
function play(n) {
    // stores specfic box linked to audio
        currentNote = $("a[data-note="+ n +"]").addClass("light");
    // adds a class for a half second linked to the note div attached to the audio
        window.setTimeout(function() {
            currentNote.removeClass("light");
        }, 300);
    // pulls id for specific audio
        var audio = document.getElementById(n);
    // on multiple clicks resets time
        if (audio.paused) {
            audio.play();
        }else{
            audio.currentTime = 0
        };
    }; 

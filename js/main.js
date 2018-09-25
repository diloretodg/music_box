var noteIntervals = [];
var currentNotes
var songPlaying = [];

// structures an incremented set timeout based off of paramater that will be an array
function playSong(s){
    var time = tempo;
    for (var i = 0; i < s.length; i ++) {
        var timing = s[i].timing;
        time = time + timing;
        songPlaying.push(setTimeout(function(index) {
            play(s[index].note)
        }.bind(null, i), (time)))
    }
}

$("#reset").on("click", function() {
    for (var i = 0; i < songPlaying.length; i++) {
        clearTimeout(songPlaying[i]);
    }
    console.log("timer reset");
})


// event listener for note click
$(".music-note").on("click", function(){
    var note = $(this).attr("data-note");
    play(note);
});

function lightOut(currentNote) {
    currentNote.removeClass("light");
}
// plays our notes
function play(n) {
    // stores specfic box linked to audio
    let currentNote = $("a[data-note="+ n +"]").addClass("light");
    // adds a class for a half second linked to the note div attached to the audio
    window.setTimeout(lightOut.bind(null, currentNote), 300);
    // pulls id for specific audio
    var audio = document.getElementById(n);
    // on multiple clicks resets time
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    };
    
    // console.log("playing "+ n + " audio file");
    // console.log(audio);
};
// note timing dissection

function renderSongs(){
    for(var i = 0; i < songBank.length; i++ ) {
    var newButton = $("<a>");
    newButton.addClass("song box").text(songBank[i].songName).attr("data-songID", i);
    $("#song-btns").append(newButton);
}}

$(document).on("click",".song", function(){
    playSong(songBank[$(this).attr("data-songID")].songArr)
})

renderSongs();
//plays all at once

window.onclick=function(){

  var cNote = document.getElementById('cAudio')
  var cKey = document.getElementById('c')
  cKey.onclick = cNote.play();

  var dNote = document.getElementById('dAudio')
  var dKey = document.getElementById('d')
  dKey.onclick = dNote.play();

  var eNote = document.getElementById('eAudio')
  var eKey = document.getElementById('e')
  eKey.onclick = eNote.play();

  var fNote = document.getElementById('fAudio')
  var fKey = document.getElementById('f')
  fKey.onclick = fNote.play();

  var gNote = document.getElementById('gAudio')
  var gKey = document.getElementById('g')
  gKey.onclick = gNote.play()

  var aNote = document.getElementById('aAudio')
  var aKey = document.getElementById('a')
  aKey.onclick = aNote.play();

  var bNote = document.getElementById('bAudio')
  var bKey = document.getElementById('b')
  bKey.onclick = bNote.play();
}
// assigns incorrect note and key
function reply_click(clicked_id){
  console.log(clicked_id);
  if (clicked_id = 'c') {
    var note = 'cNote';
    var key = 'cKey';
  }
  if (clicked_id = 'd') {
    var note = 'dNote';
    var key = 'dKey';
  }
  if (clicked_id = 'e') {
    var note = 'eNote';
    var key = 'eKey';
  }
  if (clicked_id = 'f') {
    var note = 'fNote';
    var key = 'fKey';
  }
  if (clicked_id = 'g') {
    var note = 'gNote';
    var key = 'gKey';
  }
  if (clicked_id = 'a') {
    var note = 'aNote';
    var key = 'aKey';
  }
  if (clicked_id = 'b') {
    var note = 'bNote';
    var key = 'bKey';
  }
  console.log(this.key)
};
//allows for quick clicks to trigger each time
function play() {
  var audio = document.getElementById('');
  if (audio.paused) {
      audio.play();
  }else{
      audio.currentTime = 0
  }
}
//Arrays will controll the scale
var note = ['cNote', 'dNote', 'eNote', 'fNote', 'gNote', 'aNote', 'bNote']
var key = ['cKey', 'dKey', 'eKey', 'fKey', 'gKey', 'aKey', 'bKey']
//var for key an note out of array
var cNote = document.getElementById('cAudio');
var dNote = document.getElementById('dAudio');
var eNote = document.getElementById('eAudio');
var fNote = document.getElementById('fAudio');
var gNote = document.getElementById('gAudio');
var aNote = document.getElementById('aAudio');
var bNote = document.getElementById('bAudio');
var cKey = document.getElementById('c');
var dKey = document.getElementById('d');
var eKey = document.getElementById('e');
var fKey = document.getElementById('f');
var gKey = document.getElementById('g');
var aKey = document.getElementById('a');
var bKey = document.getElementById('b');

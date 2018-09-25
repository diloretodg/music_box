// Initialize Firebase
var config = {
    apiKey: "AIzaSyAStmRLazAmcoOu8wzfAgViAy_iIvoEqn0",
    authDomain: "music-box-4518a.firebaseapp.com",
    databaseURL: "https://music-box-4518a.firebaseio.com",
    projectId: "music-box-4518a",
    storageBucket: "music-box-4518a.appspot.com",
    messagingSenderId: "333599546192"
};

firebase.initializeApp(config);

var database = firebase.database();

var songBank = database.ref("/songBank");
var song;

songBank.on("value",function(snapSong) { 
    // console.log(snapSong.val().song);
    // console.log(snapSong.val().song.songName);
    // console.log(snapSong.val().song.songQuery);
    // console.log(snapSong.val().song.songArr);

    song = snapSong.val();
    
    } 
)
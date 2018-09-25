
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


var songBank = [
    {
    songName: "Jurrasic Park Theme",
    songArr: [
        {note: "c4Audio", timing: eigthNote, sequence: 1},
        {note: "b3Audio", timing: eigthNote, sequence: 2},
        {note: "c4Audio", timing: eigthNote, sequence: 3},
        {note: "g3Audio", timing: quarterNote, sequence: 4},
        {note: "f3Audio", timing: quarterNote, sequence: 5},
        {note: "c4Audio", timing: quarterNote, sequence: 6},
        {note: "b3Audio", timing: eigthNote, sequence: 7},
        {note: "c4Audio", timing: eigthNote, sequence: 8},
        {note: "g3Audio", timing: quarterNote, sequence: 9},
        {note: "f3Audio", timing: quarterNote, sequence: 10},
        {note: "c4Audio", timing: quarterNote, sequence: 11},
        {note: "b3Audio", timing: eigthNote, sequence: 12},
        {note: "c4Audio", timing: eigthNote, sequence: 13},
        {note: "g3Audio", timing: quarterNoteDot, sequence: 14},
        {note: "c3Audio", timing: eigthNoteDot, sequence: 15},
        {note: "a3Audio", timing: eigthNote, sequence: 16},
    ]},
    {
        songName: "C Scale",
        songArr: [
            {note: "c2Audio", timing: sixteenthNote, sequence: 1},
            {note: "d2Audio", timing: sixteenthNote, sequence: 2},
            {note: "e2Audio", timing: sixteenthNote, sequence: 3},
            {note: "f2Audio", timing: sixteenthNote, sequence: 4},
            {note: "g2Audio", timing: sixteenthNote, sequence: 5},
            {note: "a2Audio", timing: sixteenthNote, sequence: 6},
            {note: "b2Audio", timing: sixteenthNote, sequence: 7},
            {note: "c3Audio", timing: sixteenthNote, sequence: 8},
            {note: "d3Audio", timing: sixteenthNote, sequence: 9},
            {note: "e3Audio", timing: sixteenthNote, sequence: 10},
            {note: "f3Audio", timing: sixteenthNote, sequence: 11},
            {note: "g3Audio", timing: sixteenthNote, sequence: 12},
            {note: "a3Audio", timing: sixteenthNote, sequence: 13},
            {note: "b3Audio", timing: sixteenthNote, sequence: 14},
            {note: "c4Audio", timing: sixteenthNote, sequence: 15},
            {note: "c2Audio", timing: sixteenthNote, sequence: 16},
        ]},
        {
        songName: "D Scale",
        songArr: [
            {note: "d2Audio", timing: eigthNote, sequence: 1},
            {note: "e2Audio", timing: eigthNote, sequence: 2},
            {note: "fs2Audio", timing: eigthNote, sequence: 3},
            {note: "g2Audio", timing: eigthNote, sequence: 4},
            {note: "a2Audio", timing: eigthNote, sequence: 5},
            {note: "b2Audio", timing: eigthNote, sequence: 6},
            {note: "cs3Audio", timing: eigthNote, sequence: 7},
            {note: "d3Audio", timing: eigthNote, sequence: 8},
            {note: "cs3Audio", timing: eigthNote, sequence: 7},
            {note: "b2Audio", timing: eigthNote, sequence: 6},
            {note: "a2Audio", timing: eigthNote, sequence: 5},
            {note: "g2Audio", timing: eigthNote, sequence: 4},
            {note: "fs2Audio", timing: eigthNote, sequence: 3},
            {note: "e2Audio", timing: eigthNote, sequence: 2},
            {note: "d2Audio", timing: eigthNote, sequence: 1},
        
            ]},
            {
            songName: "C  Chromatic Scale",
            songArr: [
                {note: "c2Audio", timing: sixteenthNote, sequence: 1},
                {note: "cs2Audio", timing: sixteenthNote, sequence: 1},
                {note: "d2Audio", timing: sixteenthNote, sequence: 2},
                {note: "eb2Audio", timing: sixteenthNote, sequence: 3},
                {note: "e2Audio", timing: sixteenthNote, sequence: 3},
                {note: "f2Audio", timing: sixteenthNote, sequence: 4},
                {note: "fs2Audio", timing: sixteenthNote, sequence: 4},
                {note: "g2Audio", timing: sixteenthNote, sequence: 5},
                {note: "ab2Audio", timing: sixteenthNote, sequence: 6},
                {note: "a2Audio", timing: sixteenthNote, sequence: 6},
                {note: "bb2Audio", timing: sixteenthNote, sequence: 7},
                {note: "b2Audio", timing: sixteenthNote, sequence: 7},
                {note: "c3Audio", timing: sixteenthNote, sequence: 8},
                {note: "cs3Audio", timing: sixteenthNote, sequence: 8},
                {note: "d3Audio", timing: sixteenthNote, sequence: 9},
                {note: "eb3Audio", timing: sixteenthNote, sequence: 10},
                {note: "e3Audio", timing: sixteenthNote, sequence: 10},
                {note: "f3Audio", timing: sixteenthNote, sequence: 11},
                {note: "fs3Audio", timing: sixteenthNote, sequence: 11},
                {note: "g3Audio", timing: sixteenthNote, sequence: 12},
                {note: "ab3Audio", timing: sixteenthNote, sequence: 13},
                {note: "a3Audio", timing: sixteenthNote, sequence: 13},
                {note: "bb3Audio", timing: sixteenthNote, sequence: 14},
                {note: "b3Audio", timing: sixteenthNote, sequence: 14},
                {note: "c4Audio", timing: sixteenthNote, sequence: 15},
                {note: "b3Audio", timing: sixteenthNote, sequence: 14},
                {note: "bb3Audio", timing: sixteenthNote, sequence: 14},
                {note: "a3Audio", timing: sixteenthNote, sequence: 13},
                {note: "ab3Audio", timing: sixteenthNote, sequence: 13},
                {note: "g3Audio", timing: sixteenthNote, sequence: 12},
                {note: "fs3Audio", timing: sixteenthNote, sequence: 11},
                {note: "f3Audio", timing: sixteenthNote, sequence: 11},
                {note: "e3Audio", timing: sixteenthNote, sequence: 10},
                {note: "eb3Audio", timing: sixteenthNote, sequence: 10},
                {note: "d3Audio", timing: sixteenthNote, sequence: 9},
                {note: "cs3Audio", timing: sixteenthNote, sequence: 8},
                {note: "c3Audio", timing: sixteenthNote, sequence: 8},
                {note: "b2Audio", timing: sixteenthNote, sequence: 7},
                {note: "bb2Audio", timing: sixteenthNote, sequence: 7},
                {note: "a2Audio", timing: sixteenthNote, sequence: 6},
                {note: "ab2Audio", timing: sixteenthNote, sequence: 6},
                {note: "g2Audio", timing: sixteenthNote, sequence: 5},
                {note: "fs2Audio", timing: sixteenthNote, sequence: 4},
                {note: "f2Audio", timing: sixteenthNote, sequence: 4},
                {note: "e2Audio", timing: sixteenthNote, sequence: 3},
                {note: "eb2Audio", timing: sixteenthNote, sequence: 3},
                {note: "d2Audio", timing: sixteenthNote, sequence: 2},
                {note: "cs2Audio", timing: sixteenthNote, sequence: 1},
                {note: "c2Audio", timing: sixteenthNote, sequence: 1},
            ]},
]
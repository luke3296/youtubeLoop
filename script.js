let ready = true;
let loopS = 0;
let loopE = 0;
let player;
let startTime =  0;
let endTime =  0;
let videoID = '';

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function getVideoId(url){
let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
let match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        console.log("coulndt pass url");
    }
}
// 2. This code loads the IFrame Player API code asynchronously.

function setLoopfn(){
console.log("Hello");
if(!ready){

}else{
 startTime =  parseInt(document.getElementById("loopS").value);
 endTime =  parseInt(document.getElementById("loopE").value);
 videoID = getVideoId(document.getElementById("videoID").value);
 console.log(startTime ,endTime, videoID);


  player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: videoID,
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
 });

    }
}
function callAgain(){
    console.log("loop timeout");
    player.seekTo(startTime);

}
function onPlayerReady() {
    
    player.seekTo(startTime);
    //player.Play();
    setInterval(callAgain, 1000*(endTime-startTime));
    console.log("on player ready")

}
function onYouTubeIframeAPIReady() {
    console.log("ready");
}
function onPlayerStateChange(){

}
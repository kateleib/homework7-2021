var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%";
	});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

/* document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .05;
}); */

/* faster
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .05;
});*/

/* document.querySelector('#skip').addEventListener("click", function(){
*/

/* document.querySelector("#mute").addEventListener("click", function() { */

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%"
});
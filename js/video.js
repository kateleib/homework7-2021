var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%";
	});
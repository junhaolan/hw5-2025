const video = document.getElementById("player1");
const volumeSlider = document.getElementById("slider")
const volumeInfo = document.getElementById("volume")


// page load
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay)
	video.loop = false;
	console.log("loop is set to " + video.loop);
})

// play button
document.getElementById("play").addEventListener("click", function () { video.play(); updateVolume() })

function updateVolume() { volumeInfo.innerHTML = volumeSlider.value + "%" }

// pause button
document.getElementById("pause").addEventListener("click", function pauseVideo() { video.pause(); })

// slow down
document.getElementById("slower").addEventListener("click", function slowerVideo() { video.playbackRate *= 0.9; console.log(video.playbackRate) })

// speed up
document.getElementById("faster").addEventListener("click", function fasterVideo() { video.playbackRate /= 0.9; console.log(video.playbackRate) })

// skip ahead
document.getElementById("skip").addEventListener("click", function skipTenSeconds() { if (video.currentTime + 10 < video.duration) { video.currentTime += 10 } else { video.currentTime = 0 } console.log(video.currentTime) })

// Mute
document.getElementById("mute").addEventListener("click", function muteStatus() { if (video.muted === false) { video.muted = true; document.getElementById("mute").innerHTML = "Unmute" } else { video.muted = false; document.getElementById("mute").innerHTML = "Mute" } })

// Volume Slider
document.getElementById("slider").addEventListener("input", function setVolume(event) { video.volume = event.target.value / 100; updateVolume() })

// Styled
document.getElementById("vintage").addEventListener("click", function oldSchoolStyle() { video.classList.add("oldSchool") })

// Original
document.getElementById("orig").addEventListener("click", function originalStyle() { video.classList.remove("oldSchool") })


const globalPlayButton = document.querySelector(".global-play-button");
const globalPauseButton = document.querySelector(".global-pause-button");

const pageButtons = document.querySelectorAll(".page-button");

let audioPlayer = new Audio("/music/Terraria Underground Desert.mp3");
document.querySelector(".volume-slider").value =
	localStorage.getItem("volume") ?? 50;
audioPlayer.volume = document.querySelector(".volume-slider").value / 100;

document.querySelector(".volume-slider").addEventListener("input", (event) => {
	const volumeValue = event.target.value;
	audioPlayer.volume = volumeValue / 100;
	localStorage.setItem("volume", volumeValue);
});

function playPause() {
	if (track.paused) {
		track.play();
		pauseButton.classList.remove("hidden");
		playButton.classList.add("hidden");
	} else {
		track.pause();
		pauseButton.classList.add("hidden");
		playButton.classList.remove("hidden");
	}
}

const playButtons = document.querySelectorAll(".play-button");
playButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const musicPath = button.dataset.music;
		audioPlayer.src = musicPath;
		audioPlayer.play();
		globalPauseButton.classList.remove("hidden");
		globalPlayButton.classList.add("hidden");
	});
});

globalPauseButton.addEventListener("click", () => {
	audioPlayer.pause();
	globalPauseButton.classList.add("hidden");
	globalPlayButton.classList.remove("hidden");
	// document.querySelector(".play-button-1").classList.remove("hidden");
	// document.querySelector(".pause-button-1").classList.add("hidden");
	// document.querySelector(".play-button-2").classList.remove("hidden");
	// document.querySelector(".pause-button-2").classList.add("hidden");
	// document.querySelector(".play-button-3").classList.remove("hidden");
	// document.querySelector(".pause-button-3").classList.add("hidden");
});
globalPlayButton.addEventListener("click", () => {
	audioPlayer.play();
	globalPauseButton.classList.remove("hidden");
	globalPlayButton.classList.add("hidden");
	// document.querySelector(".play-button-1").classList.add("hidden");
	// document.querySelector(".pause-button-1").classList.remove("hidden");
});

pageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const pageClass = button.dataset.page;
		const pages = document.querySelectorAll(".page");
		pages.forEach((page) => {
			page.classList.add("hidden");
		});
		document.querySelector("." + pageClass).classList.remove("hidden");
		pageButtons.forEach((button) => {
			button.classList.remove("text-[#70c25d]", "bg-[#2b4126]");
			button.classList.add(
				"text-[#737a8d]",
				"hover:text-[#b1bad6]",
				"bg-[#30343b]",
				"hover:bg-[#3b4149]"
			);
		});
		button.classList.add("text-[#70c25d]", "bg-[#2b4126]");
		button.classList.remove(
			"text-[#737a8d]",
			"hover:text-[#b1bad6]",
			"bg-[#30343b]",
			"hover:bg-[#3b4149]"
		);
	});
});

// document.querySelector(".play-button-1").addEventListener("click", () => {
// 	document.querySelector(".play-button-1").classList.add("hidden");
// 	document.querySelector(".pause-button-1").classList.remove("hidden");
// });
// document.querySelector(".play-button-2").addEventListener("click", () => {
// 	document.querySelector(".play-button-2").classList.add("hidden");
// 	document.querySelector(".pause-button-2").classList.remove("hidden");
// });
// document.querySelector(".play-button-3").addEventListener("click", () => {
// 	document.querySelector(".play-button-3").classList.add("hidden");
// 	document.querySelector(".pause-button-3").classList.remove("hidden");
// });
// document.querySelector(".pause-button-1").addEventListener("click", () => {
// 	document.querySelector(".play-button-1").classList.remove("hidden");
// 	document.querySelector(".pause-button-1").classList.add("hidden");
// 	audioPlayer.pause();
// });
// document.querySelector(".pause-button-2").addEventListener("click", () => {});
// document.querySelector(".pause-button-3").addEventListener("click", () => {});

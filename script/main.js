

(() => {
	let theDancers = document.querySelectorAll("#buttonHolder img"),
		icons = document.querySelector(".puzzle-board"),
		instruments = document.querySelectorAll('.instruments img'),
		dropZones = document.querySelectorAll(".drop-zone"),
        theAudio = document.querySelector('audio');
		


	function changeBgImg() {
		
		icons.style.backgroundImage = `url(img/backGround${this.dataset.bgref}.jpg)`;
	}

	function allowDrag(event) {
		console.log("started draggin me");

		
		event.dataTransfer.setData("draggedEl", this.id);
	}

	function allowDragOver(event) {
		
		event.preventDefault();
		console.log("started draggin over me");
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log("dropped on me");

		let droppedElId = event.dataTransfer.getData("draggedEl");

		
		this.appendChild(document.querySelector(`#${droppedElId}`));
	}

	function loadAudioTrack() {
		theAudio.src = `audio/${this.dataset.trackref}.mp3`;
		theAudio.play();
	}

	function playAudio() {theAudio.play();}
	
	


	theDancers.forEach(item => item.addEventListener("click", changeBgImg));
	instruments.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
	
	instruments.forEach(thumb => thumb.addEventListener('click',loadAudioTrack));

})();

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

		if(this.childNodes.length == 0) {
			let droppedElId = event.dataTransfer.getData("draggedEl");
			let droppedElement = document.querySelector(`#${droppedElId}`);		
			let audio = document.createElement("audio");
			
			this.appendChild(droppedElement);
			audio.id = "audio_" + droppedElId;
			audio.src = 'audio/' + droppedElement.dataset.trackref + '.mp3';
			audio.loop = true;
			this.appendChild(audio);
			audio.play()
		}
	}

	theDancers.forEach(item => item.addEventListener("click", changeBgImg));
	instruments.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});

})();

(() => {
    

    let theInstruments = document.querySelectorAll("#buttonHolder svg");

    function holdInstruments() {
        debugger; 

        
        console.log(this.id);
    }
    theInstruments.forEach(item => item.addEventListener('click', holdInstruments));

}) (); 


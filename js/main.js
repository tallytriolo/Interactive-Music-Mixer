(() => {
    
    console.log('fired! javascript is working!');

    let theBadge = document.querySelectorAll('svg');

    function logMyId() {
        debugger; 

        
        console.log(this.id);
    }
    theBadge.forEach(badge => badge.addEventListener('click', logMyId));

}) (); 


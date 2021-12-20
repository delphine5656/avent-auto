let cardContainers = document.querySelectorAll('.cardContainer');
let derriere = document.querySelectorAll('.derriere')

 function fermer(e){
    //derriere.forEach(e => e.classList.toggle('rotateDerriere'));
    //console.log(this.childNodes);
    this.childNodes[3].classList.toggle('rotateDerriere')
   }
    
 

 cardContainers.forEach(cardContainer => cardContainer.addEventListener('click',fermer));

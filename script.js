var a = document.querySelectorAll("a");
 
var afficher = a.addEventListener("click", select);
var partie = document.querySelector('.content');
partie.style.display = none;

function select () {
    
    if(partie.style.display == none) {
         return partie.style.display == block;
    }
    else {
         return partie.style.display == none;
    }

 } 


console.log(afficher);
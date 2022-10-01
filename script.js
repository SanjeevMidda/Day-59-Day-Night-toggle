
document.querySelector(".circle").addEventListener("click", dark);

function dark(){
    
    let getElement = document.querySelector("body");
    getElement.classList.toggle("dark");
}
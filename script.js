
const sequenciaCorreta = "playstation";

let sequenciaAtual = "";

document.addEventListener('keydown', function(event) {
    
    const teclaPressionada = event.key;

    sequenciaAtual += teclaPressionada;
   
    if (sequenciaAtual === sequenciaCorreta) {
        alert("Você descobriu o EASTER EGG");
        sequenciaAtual = ""; 
    }
});

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior : 'smooth'});
        
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('section.container');
});

link2.addEventListener('click', () => {
    scrollToElement('section.container',1);
});

link3.addEventListener('click', () => {
    scrollToElement('footer');
});
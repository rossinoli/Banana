let contador = document.getElementById("contador");

function clikar(){
    contador.textContent = parseInt(contador.textContent) + 1;
}

const img = document.getElementById('minhaImagem');

img.addEventListener('dragstart', (event) => {
  event.preventDefault();
});
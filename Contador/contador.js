const aumentar = document.querySelector('.aumentar');
const disminuir = document.querySelector('.disminuir');
const span = document.getElementById('span');
let contador = 0;


aumentar.addEventListener('click', () => {
    contador++;
    span.textContent = contador;
})

disminuir.addEventListener('click', () => {
    contador--;
    span.textContent = contador
})


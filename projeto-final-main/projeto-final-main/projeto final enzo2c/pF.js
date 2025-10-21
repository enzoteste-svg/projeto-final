const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
let indice = 0;

// muda automaticamente a cada 4 segundos
setInterval(() => {
  mudarImagem(1);
}, 4000);

// muda com setas do teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') mudarImagem(1);
  if (e.key === 'ArrowLeft') mudarImagem(-1);
});

function mudarImagem(direcao) {
  indice = (indice + direcao + imagens.length) % imagens.length;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}
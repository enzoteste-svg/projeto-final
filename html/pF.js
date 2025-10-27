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
 const postsContainer = document.getElementById("postsContainer");
    const addPostBtn = document.getElementById("addPost");

    addPostBtn.addEventListener("click", () => {
      const title = document.getElementById("title").value.trim();
      const content = document.getElementById("content").value.trim();

      if (!title || !content) {
        alert("Por favor, preencha o título e o conteúdo!");
        return;
      }

      const post = document.createElement("article");
      post.classList.add("post");

      post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="stars">
          ${'<span>★</span>'.repeat(5)}
        </div>
        <div class="rating-text">Avaliação: 0/5</div>
      `;

      postsContainer.prepend(post);
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";

      // Ativar estrelas para o novo post
      initStars(post);
    });

    function initStars(post) {
      const stars = post.querySelectorAll(".stars span");
      const ratingText = post.querySelector(".rating-text");

      stars.forEach((star, index) => {
        star.addEventListener("click", () => {
          stars.forEach((s, i) => {
            s.classList.toggle("active", i <= index);
          });
          ratingText.textContent = `Avaliação: ${index + 1}/5`;
        });
      });
    }
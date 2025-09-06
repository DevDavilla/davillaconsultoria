document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de hambúrguer
  const hamburger = document.querySelector(".hamburger");

  // Seleciona o menu de navegação
  const navMenu = document.querySelector(".nav-menu");

  // Adiciona o evento de clique ao botão
  hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no menu de navegação
    navMenu.classList.toggle("active");
  });

  // Opcional: Fechar o menu ao clicar em um link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});

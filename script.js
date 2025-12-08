// ==========================================================
// 1. LÓGICA DO MENU HAMBURGER (Base para Mobile)
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de hambúrguer
  const hamburger = document.querySelector(".hamburger");
  // Seleciona o menu de navegação
  const navMenu = document.querySelector(".nav-menu");

  // Adiciona o evento de clique ao botão
  hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no menu de navegação
    navMenu.classList.toggle("active");
    // Opcional: Adicionar classe para animar o ícone do hamburger
    hamburger.classList.toggle("is-active");
  });

  // Opcional: Fechar o menu ao clicar em um link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("is-active"); // Volta o ícone ao normal
    });
  });

  // Chama as funções de animação após o DOM carregar
  initializeGSAPAnimations();
});

// ==========================================================
// 2. FUNÇÕES DE ANIMAÇÃO GSAP (Animações de Alta Performance)
// ==========================================================
function initializeGSAPAnimations() {
  // Garante que o plugin ScrollTrigger está registrado para funcionar
  gsap.registerPlugin(ScrollTrigger);

  // --- ANIMAÇÃO 1: ENTRADA ORQUESTRADA DO HERO (INDEX.HTML) ---
  // Cria uma linha do tempo para orquestrar o movimento sequencial
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Define o estado inicial de todos os elementos do Hero como invisíveis e deslocados
  gsap.set(".hero-title, .hero-description, .cta-button", {
    opacity: 0,
    y: 30,
  });

  // Sequência de animação:
  heroTimeline
    .to(".hero-title", { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }) // Título (h1) entra primeiro
    .to(".hero-description", { opacity: 1, y: 0, duration: 0.7 }, "<0.1") // Parágrafo entra logo depois
    .to(".cta-button", { opacity: 1, y: 0, duration: 0.6 }, "<0.1"); // Botão CTA entra por último

  // --- ANIMAÇÃO 2: REVELAÇÃO SUAVE DOS PROJETOS (INDEX.HTML) ---
  const projectCards = gsap.utils.toArray(".projeto-card");

  projectCards.forEach((card) => {
    // Define o estado inicial de cada card (invisível e deslocado para baixo)
    gsap.set(card, {
      opacity: 0,
      y: 70, // Deslocamento maior para um efeito mais dramático
      scale: 0.98,
    });

    // Animação para o estado final (posição original, visível)
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1, // Duração de 1 segundo para um movimento elegante
      ease: "power3.out",

      scrollTrigger: {
        trigger: card,
        start: "top 90%", // Dispara a animação quando o topo do card entra nos 90% superiores da viewport
        toggleActions: "play none none none", // Apenas executa uma vez (otimização de performance)
      },
    });
  });

  // --- NOVO: ANIMAÇÃO 3: REVELAÇÃO SUAVE DOS CARDS DE DETALHES (PÁGINAS DE PROJETO) ---
  // Aplica a animação aos cards de conteúdo (Desafio, Solução, Resultados, etc.)
  const detailCards = gsap.utils.toArray(".section-card");

  detailCards.forEach((card) => {
    // Define o estado inicial (invisível e levemente deslocado para cima)
    gsap.set(card, { opacity: 0, y: 30 });

    // Animação para o estado final (visível)
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",

      scrollTrigger: {
        trigger: card,
        start: "top 95%", // Dispara a animação quando o card está quase entrando na tela
        toggleActions: "play none none none",
      },
    });
  });

  // --- NOVO: ANIMAÇÃO 4: REVELAÇÃO DAS GRADES DE IMAGENS (PÁGINAS DE PROJETO) ---
  // Faz as grades de imagem aparecerem suavemente
  const imageGrids = gsap.utils.toArray(".project-image-grid");

  imageGrids.forEach((grid) => {
    gsap.from(grid, {
      opacity: 0,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: grid,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

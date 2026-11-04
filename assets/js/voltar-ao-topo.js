// Botão "voltar ao topo" para páginas longas (Debates tem cerca de 15.000 px no celular).
// Aparece depois de duas telas de rolagem e desaparece perto do topo.
// Sem JavaScript o botão não existe — a página continua funcionando como antes.
(function () {
  var main = document.getElementById('main');
  if (!main) return;

  var rotulos = {
    pt: 'Voltar ao topo',
    es: 'Volver arriba',
  };
  var lang = document.documentElement.lang || 'pt';
  var rotulo = rotulos[lang] || rotulos.pt;

  var botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'to-top';
  botao.setAttribute('aria-label', rotulo);
  botao.title = rotulo;
  botao.innerHTML = '<span aria-hidden="true">\u2191</span>';
  document.body.appendChild(botao);

  botao.addEventListener('click', function () {
    // devolve o foco ao começo do conteúdo, para quem navega pelo teclado
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
    main.removeAttribute('tabindex');
    // a rolagem suave vem do CSS (scroll-behavior), que já desliga sozinha
    // quando a pessoa pediu menos animação no sistema
    window.scrollTo(0, 0);
  });

  // só mostra quando já há bastante página para trás
  var visivel = false;
  function conferir() {
    var limite = Math.max(window.innerHeight * 2, 800);
    var deveMostrar = window.scrollY > limite;
    if (deveMostrar === visivel) return;
    visivel = deveMostrar;
    botao.classList.toggle('is-visible', visivel);
  }

  var agendado = false;
  window.addEventListener('scroll', function () {
    if (agendado) return;
    agendado = true;
    window.requestAnimationFrame(function () {
      agendado = false;
      conferir();
    });
  }, { passive: true });

  window.addEventListener('resize', conferir);
  conferir();
})();

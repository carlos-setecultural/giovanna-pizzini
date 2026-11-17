/* Risca a seta da passagem quando ela aparece na tela.

   Sem este arquivo a seta simplesmente aparece pronta — o CSS só a
   esconde quando a classe `js` está no <html>, e quem põe essa classe
   é a primeira linha do <head>. Então uma falha aqui não apaga nada
   da página.

   O risco acontece uma vez só por seta: assim que ela é vista, o
   observador para de olhar para ela. */

(function () {
  var setas = document.querySelectorAll('.passagem');
  if (!setas.length) return;

  // Quem pediu menos animação recebe a seta já desenhada.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < setas.length; i++) setas[i].classList.add('passagem--vista');
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('passagem--vista');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.4 });

  for (var j = 0; j < setas.length; j++) observador.observe(setas[j]);
})();

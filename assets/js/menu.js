// Menu do celular: o botão ☰ abre a navegação como painel em tela cheia (×, Esc ou toque fora fecham).
// Sem JavaScript, o menu continua aparecendo inteiro no cabeçalho, como antes.
// Altura real do cabeçalho fixo em --header-height: é o que afasta os títulos
// de âncora (#historia) do cabeçalho quando a página rola até eles.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function measure() {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  }

  measure();
  window.addEventListener('load', measure); // depois que as fontes e o logo carregam
  if (window.ResizeObserver) new ResizeObserver(measure).observe(header);
  else window.addEventListener('resize', measure);
})();

(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var closeButton = nav.querySelector('.menu-close');
  var list = nav.querySelector('.site-nav__list');

  function isOpen() { return nav.classList.contains('is-open'); }

  function open() {
    nav.classList.add('is-open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    closeButton.focus();
  }

  // returnFocus = false quando a pessoa segue um link (o foco vai para a página nova ou para a âncora)
  function close(returnFocus) {
    if (!isOpen()) return;
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus !== false) toggle.focus();
  }

  toggle.addEventListener('click', open);
  closeButton.addEventListener('click', close);

  // Seta ▾ de "Sobre nós": abre e fecha os subitens dentro do painel
  nav.addEventListener('click', function (e) {
    var submenuToggle = e.target.closest('.submenu-toggle');
    if (!submenuToggle) return;
    var item = submenuToggle.closest('.site-nav__item');
    var expanded = item.classList.toggle('is-expanded');
    submenuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (e.target.closest('a')) close(false);
    else if (e.target.closest('.submenu-toggle')) return; // a seta só abre os subitens
    else if (e.target === nav || e.target === list) close(); // toque fora dos links
  });

  // Esc fecha; Tab e Shift+Tab ficam presos dentro do painel
  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    var items = Array.prototype.filter.call(nav.querySelectorAll('a[href], button'), function (el) {
      return el.offsetParent !== null;
    });
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Se a janela passar para o tamanho de computador com o painel aberto, fecha sem deixar a página travada
  window.matchMedia('(max-width: 780px)').addEventListener('change', function (e) {
    if (!e.matches) close(false);
  });
})();

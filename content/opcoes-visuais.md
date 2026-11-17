---
layout: layouts/base.njk
title: Opções visuais
description: Página de trabalho — nove maneiras de usar as texturas e os elementos gráficos do manual de identidade.
eleventyExcludeFromCollections: true
---

<style>
/* --------------------------------------------------------------
   CSS desta página só. Nada daqui está no style.css ainda: cada
   opção vive aqui dentro até você escolher. O que for aprovado eu
   mudo de lugar; o resto some junto com a página.
   -------------------------------------------------------------- */

.op { margin: 0 0 4.5rem; }
.op__num {
  font-family: var(--font-body);
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--cor-ocre); margin: 0 0 0.2rem;
}
.op h2 { margin-top: 0; }
.op__nota { font-size: 0.92rem; color: var(--cor-marrom); max-width: 54ch; }
.op__palco {
  margin: 1.2rem 0;
  padding: 2rem 1.5rem;
  border: 1px solid var(--cor-cinza-claro);
  background: var(--cor-branco);
}

/* 1 e 2 — fundos */
.amostra-fundo { height: 190px; position: relative; overflow: hidden; border: 1px solid var(--cor-cinza-claro); }
.amostra-fundo p { position: relative; margin: 0; padding: 2rem 1.5rem; font-size: 1.05rem; }
.amostra-fundo::before { content: ""; position: absolute; inset: 0; background-size: cover; background-position: center; }
.amostra-fundo::after { content: ""; position: absolute; inset: 0; background: var(--cor-branco); }
.fundo-folha::before { background-image: url('/assets/img/texturas/folha.jpg'); }
.fundo-folha::after { opacity: 0.94; }
.fundo-papel::before { background-image: url('/assets/img/texturas/papel.jpg'); }
.fundo-papel::after { opacity: 0.55; }

/* 4 — fita de textura */
.fita-textura {
  height: 90px;
  background: url('/assets/img/marca/gruta.jpg') center / cover no-repeat;
  opacity: 0.85;
}

/* 5, 6, 7 — os elementos desenhados à mão.
   Entram como máscara, e não como imagem: assim pegam a cor da
   paleta em vez de virem pretos do arquivo. */
.elem {
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-size: contain;     mask-size: contain;
  -webkit-mask-position: center;  mask-position: center;
}
.elem--espiral { width: 170px; height: 70px; -webkit-mask-image: url('/assets/img/elementos/seta-espiral.svg'); mask-image: url('/assets/img/elementos/seta-espiral.svg'); }
.elem--curva   { width: 150px; height: 48px; -webkit-mask-image: url('/assets/img/elementos/seta-curva.svg');   mask-image: url('/assets/img/elementos/seta-curva.svg'); }
.elem--mao     { width: 46px;  height: 44px; -webkit-mask-image: url('/assets/img/elementos/mao-clique.svg');   mask-image: url('/assets/img/elementos/mao-clique.svg'); }

.chamada { display: flex; align-items: center; gap: 1rem; color: var(--cor-ocre); }
.chamada a { font-family: var(--font-display); font-size: 1.3rem; }

.botao-mao {
  display: inline-flex; align-items: center; gap: 0.7rem;
  background: var(--cor-bordo); color: var(--cor-branco);
  padding: 0.7rem 1.4rem; font-family: var(--font-display);
  letter-spacing: 0.06em;
}
.botao-mao:hover { background: var(--cor-ocre); text-decoration: none; color: var(--cor-branco); }

.marcador-secao { display: flex; align-items: center; gap: 1.2rem; color: var(--cor-bordo); }
.marcador-secao h3 { margin: 0; }

/* 8 — biocelulose como máscara de foto */
.foto-mascarada {
  width: 320px; max-width: 100%; aspect-ratio: 900 / 768;
  background: url('/assets/img/obras/scyphocrinites-2025.jpg') center / cover no-repeat;
  -webkit-mask-image: url('/assets/img/marca/biocelulose.webp'); mask-image: url('/assets/img/marca/biocelulose.webp');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
}

/* 9 — capitular */
.capitular::first-letter {
  float: left;
  font-family: var(--font-display);
  font-size: 4.2rem;
  line-height: 0.82;
  padding: 0.1rem 0.6rem 0 0;
  color: var(--cor-bordo);
}

.lado-a-lado { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.5rem; align-items: center; }
</style>

<section class="section section--estreita">

# Opções visuais

<p class="ficha">Página de trabalho, 17/11/2026. Não está no menu e não vai para o ar —
é só para você ver cada ideia funcionando e dizer quais entram.</p>

<p class="op__nota">Tudo aqui sai do Material de Identidade Visual: as texturas de
fundo, as setas desenhadas à mão, a mãozinha de “clique aqui”, as camadas
geológicas e as fotografias de biocelulose da Giovanna. Nada foi inventado —
o que eu fiz foi tirar cada peça de dentro do PDF e achar um uso para ela
numa página de internet.</p>

</section>

<section class="section section--estreita">

<article class="op">
<p class="op__num">Opção 1 — já está de pé</p>

## Fundo de folha, a 6%

<p class="op__nota">É o que o manual faz em todas as 27 páginas: a fotografia de
nervuras de folha, quase apagada, atrás de tudo. Já apliquei na página da
exposição. Fica presa à janela e não rola com o texto, então a página inteira
parece impressa num papel.</p>

<div class="amostra-fundo fundo-folha"><p>Entre vestígios, umidade, pedra e silêncio.</p></div>
</article>

<article class="op">
<p class="op__num">Opção 2</p>

## Fundo de papel creme

<p class="op__nota">A outra textura do manual: um papel liso, sem desenho nenhum.
Esquenta a página sem competir com as fotos. Serve como alternativa à folha, ou
para páginas de texto longo, onde as nervuras podem cansar.</p>

<div class="amostra-fundo fundo-papel"><p>Entre vestígios, umidade, pedra e silêncio.</p></div>
</article>

<article class="op">
<p class="op__num">Opção 3 — já está escrita</p>

## Camadas geológicas como separador

<p class="op__nota">Quatro filetes de espessuras diferentes, um sobre o outro, nas
cores da paleta. É o mesmo raciocínio das “camadas geológicas” do manual, mas
feito só com código: não pesa nada, não precisa de imagem e nunca sai borrado.
Separa duas seções sem precisar de mais uma fotografia.</p>

<hr class="camadas">
</article>

<article class="op">
<p class="op__num">Opção 4</p>

## Fita de textura entre as seções

<p class="op__nota">Uma faixa estreita de parede de gruta atravessando a página de
ponta a ponta. É mais forte que a opção 3 — usa de verdade a fotografia — e
funciona bem como respiro entre o texto e as obras. Pode ser a gruta, a
biocelulose ou as camadas de terra.</p>

<div class="fita-textura"></div>
</article>

<article class="op">
<p class="op__num">Opção 5</p>

## Setas desenhadas à mão

<p class="op__nota">Estas duas setas estavam no manual como desenho, não como
fotografia: consegui tirá-las em vetor, o que quer dizer que ficam nítidas em
qualquer tamanho e aceitam qualquer cor da paleta. Servem para apontar o que
importa numa página — o link da exposição, a próxima obra, o convite para
escrever.</p>

<div class="op__palco lado-a-lado">
  <div class="chamada"><span class="elem elem--espiral"></span> <a href="/trabalhos/">veja os trabalhos</a></div>
  <div class="chamada" style="color: var(--cor-bordo)"><a href="/contato/">fale com a artista</a> <span class="elem elem--curva" style="transform: scaleX(-1)"></span></div>
</div>
</article>

<article class="op">
<p class="op__num">Opção 6</p>

## A mãozinha de “clique aqui”

<p class="op__nota">O manual traz este ícone de propósito, para o material de
divulgação. Num site ele cabe em botão — mas com parcimônia: um por página, no
lugar onde você quer mesmo que a pessoa clique.</p>

<div class="op__palco">
  <a class="botao-mao" href="/o-corpo-como-escavacao/"><span class="elem elem--mao"></span> Entrar na exposição</a>
</div>
</article>

<article class="op">
<p class="op__num">Opção 7</p>

## A espiral como marcador de seção

<p class="op__nota">A mesma seta da espiral, pequena, abrindo cada título de
seção. O manual explica a espiral como ciclo, retorno e acúmulo — e ela vira
uma assinatura discreta, repetida página a página.</p>

<div class="op__palco">
  <div class="marcador-secao"><span class="elem elem--espiral" style="width:84px;height:34px"></span><h3>A pintura como escavação</h3></div>
</div>
</article>

<article class="op">
<p class="op__num">Opção 8</p>

## Biocelulose como moldura da foto

<p class="op__nota">A fotografia da obra aparece recortada no contorno de uma
lâmina de biocelulose — o próprio material da pesquisa da Giovanna virando a
moldura do trabalho dela. É a opção mais autoral da lista e a mais arriscada:
come um pedaço da imagem da obra. Eu usaria no máximo uma vez por página, e
nunca numa obra que precise ser vista inteira.</p>

<div class="op__palco">
  <div class="foto-mascarada"></div>
</div>
</article>

<article class="op">
<p class="op__num">Opção 9</p>

## Capitular em bordô

<p class="op__nota">A primeira letra do texto, grande, na cor do “Escavação” do
logotipo. Não usa imagem nenhuma e dá ao texto corrido o ar de catálogo
impresso que o manual tem.</p>

<div class="op__palco">
<p class="capitular">Ao escavar, perpasso por mim e pelo outro, animal ou vegetal. Sigo seus
rastros, tateio sua memória matérica, encapsulada pela passagem do tempo
geológico. Vestígios de permanência: para onde vai a memória do invisível que
criamos?</p>
</div>
</article>

</section>

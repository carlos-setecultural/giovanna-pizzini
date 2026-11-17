# Tarefas

Este arquivo é o lugar das pendências, das dúvidas e dos planos. Nada disso
aparece nas páginas do site.

## Decidido em 20/10/2026

- O site é da **artista visual Giovanna Pizzini**: obras e exposições. O Carlos
  monta e aprova o trabalho; o conteúdo (textos, dados das obras, fotos) vem
  da artista.
- **Duas línguas desde o início:** português e inglês.
- Conta do GitHub deste site: **`carlos-setecultural`** (não é a
  `carlosxmendes`, que é a do trabalho da RELAHO).
- Conta da Cloudflare: nova, no e-mail do Carlos.

## 1. Base técnica — primeiro, porque destrava todo o resto

O repositório já existe, com branch e pull request. O que falta é a
hospedagem: sem o projeto na Cloudflare, nenhum pull request ganha endereço
de preview, e hoje o site só se vê na máquina do Carlos.

- [ ] Escolher o nome definitivo do site e trocar em três lugares: a pasta, o
      campo `name` do `package.json` e o `_data/site.json`. *(Feito no
      `package.json` e no `_data/site.json`, como `giovanna-pizzini`. A pasta
      local ainda se chama `site-novo`.)*
- [x] `git init`, primeiro commit, e repositório **público** na conta
      `carlos-setecultural`.
- [x] Assinar os commits deste site: `git config user.name` e
      `git config user.email` sem `--global` (vale só nesta pasta).
- [ ] Ligar a regra da `main`: exigir pull request, com *Required approvals: 0*.
- [ ] Criar o projeto na Cloudflare: build `npm run build`, saída `_site`.
- [ ] Ligar os builds das branches que não são a de produção, para cada pull
      request ganhar um endereço de preview.

Passo a passo completo, com as telas e as armadilhas de login:
`novo-site-passo-a-passo.md`, na pasta de cima.

## 2. Estrutura bilíngue — antes de escrever conteúdo de verdade

Mexe em pastas, menu e em todas as páginas. Quanto mais conteúdo existir, mais
caro fica.

- [ ] Separar o conteúdo em `content/pt/` e `content/en/`, com o campo `altLang`
      ligando cada par de páginas.
- [ ] Menu por língua no `_data/nav.json`. (O filtro `navFor` já está no
      `.eleventy.js`: é resto do molde bilíngue da RELAHO, hoje sem uso — é
      exatamente a peça que a versão em duas línguas usa.)
- [ ] Seletor de língua no cabeçalho.
- [ ] `lang="pt"` / `lang="en"` no `<html>`, conforme a página.

## 3. Obras e exposições — o coração do site

São duas listas que vão crescer. No site da RELAHO as galerias são HTML escrito
à mão, foto por foto; aqui vale usar **coleções do Eleventy**: uma obra = um
arquivo pequeno, e as listagens se montam sozinhas.

- [ ] Decidir com a artista como as obras se agrupam: por série, por ano ou por
      técnica.
- [ ] Uma obra = um arquivo em `content/pt/obras/`, com título, ano, técnica,
      dimensões, foto e crédito da foto.
- [ ] Página de listagem das obras, gerada por coleção (ordem por ano).
- [ ] Lista de exposições: nome, local, cidade, datas, individual ou coletiva.
- [ ] Definir o tamanho das versões web das fotos de obra. O `CLAUDE.md` fala em
      1400 px, que é a regra do site da RELAHO; foto de obra talvez peça mais.
      **A confirmar.**
- [ ] Decidir se a foto amplia ao clicar.

## 4. Identidade visual

Em 17/11/2026 chegou o **Material de Identidade Visual** da exposição, 27
páginas feitas no Canva. É de lá que vêm as cores, as fontes, o logotipo, os
elementos gráficos e a régua de logos. O arquivo está em
`Downloads/Material de Identidade visual - O corpo como escavação_20261106_124253_0000.pdf`
— fora do repositório, porque é material bruto.

- [x] Paleta trocada pelas seis cores do manual: bordô terroso `#722410`,
      ocre queimado `#A5590F`, marrom profundo `#583D28`, cinza rosado
      `#BCB2B2`, branco e preto. Estão no topo do `assets/css/style.css`,
      com o nome que têm no manual; todo o resto do arquivo chama por apelidos
      (`--cor-destaque`, `--cor-fundo`…) que apontam para elas.
- [x] Fontes trocadas por **Cardo** (títulos) e **Raleway** (texto), as duas do
      manual. Ficam hospedadas em `assets/fonts/`, e não no Google: a página
      não depende de servidor de fora e ninguém que visita é registrado por
      terceiros. Licença e procedência em `assets/fonts/LEIA-ME.txt`.
- [x] Favicon criado (`assets/img/favicon.svg`) e ligado no
      `_includes/layouts/base.njk`, junto com o ícone do iPhone.
- [x] `--header-height` revisado: era 140 px de chute e 210 px no celular.
      Medido no cabeçalho de verdade, com a marca nova: **130 px** no
      computador e **72 px** no celular.
- [ ] Escrever a página inicial de verdade, no lugar do texto de exemplo.

### O que o manual trouxe e ainda não entrou no site

- [x] **A segunda versão do logotipo, a com texturas, está de pé** — e
      animada, abrindo a página da exposição. Não foi recortada do PDF como
      uma figura só: cada uma das quatro fotografias foi extraída do arquivo
      em separado, e as posições, os giros e as opacidades saíram das
      matrizes de colocação do próprio PDF. Por isso a montagem bate com a
      do manual. As peças estão em `assets/img/marca/`.
- [x] **A fonte do logotipo é a Cardo mesmo.** Eu tinha dito o contrário em
      17/11 e estava errado: a comparação que fiz rodava numa página de teste
      onde a Cardo não carregava, então eu media a fonte substituta. Refeita a
      medição na página de verdade, e comparadas as proporções das palavras
      "corpo" e "Escavação" com as mesmas palavras em 26 fontes serifadas, só
      a Cardo bate nas duas, com erro abaixo de meio por cento. O que o manual
      faz é usar **tamanhos diferentes** para as duas palavras — "Escavação" é
      menor que "corpo". Os quatro tamanhos do título foram recalculados e
      agora cada palavra ocupa exatamente a mesma caixa que ocupa no manual.
- [ ] **Régua de logos no rodapé.** O manual traz a régua obrigatória em quatro
      faixas: FOMENTO (PROAC SP), PRODUÇÃO (Angola Produções), APOIO (Instituto
      Arte & Ciência, JB, MAGMA, FNMN museu) e REALIZAÇÃO (CultSP, Governo de
      SP, SNC, Aldir Blanc, Ministério da Cultura, Governo do Brasil). Num
      projeto de edital isso não é opcional. O CSS já tem a classe
      `.site-footer__logo`, herdada do molde, sem uso.
- [ ] **Confirmar quem é a produção.** A régua do manual diz **Angola
      Produções**. A SETE Cultural não aparece em nenhuma página do documento —
      mas é o e-mail da SETE que está hoje no rodapé do site, e foi o logotipo
      da SETE que entrou como "Produção" no PDF de apresentação de 05/11. Antes
      de montar a régua, acertar qual é o papel de cada uma.
- [x] **Texturas e elementos gráficos — escolhidos em 17/11/2026.** A página
      de trabalho `/opcoes-visuais/` cumpriu o papel e foi apagada. Ficou
      assim:
      - **fundo de folha a 6%** só na página da exposição;
      - **filete de camadas geológicas** separando seções em todas as outras;
      - **capitular em bordô** abrindo o texto da exposição, de Trabalhos e
        de Sobre, uma por página;
      - **setas desenhadas à mão** como passagem para a página seguinte, no
        fim de cada página, riscadas da esquerda para a direita quando
        aparecem na tela;
      - **mãozinha de "clique aqui"** fora. O arquivo fica em
        `assets/img/elementos/mao-clique.svg` caso mude de ideia.
- [ ] **Textura de papel creme guardada para caixas e ênfases.** Decisão do
      Carlos em 17/11: ela não vira fundo de página, mas serve para destacar
      um bloco dentro do texto quando aparecer um. O arquivo está em
      `assets/img/texturas/papel.jpg`.
- [ ] **Texto da videoarte.** O manual traz o texto oficial de *"Escavações do
      Imaginário"* — videoarte gravada na Gruta da Lapinha, Lagoa Santa, MG,
      com as palavras-chave e a assinatura da artista e da curadora. Falta a
      Giovanna confirmar se é uma obra **dentro** da exposição O Corpo como
      Escavação (é como está escrito aqui) ou outra coisa, e em que página do
      site ele entra.
- [ ] **Fotos de obra em qualidade melhor.** O manual tem fotos de trabalhos em
      exposição, esculturas em biocelulose e a biocelulose em macro, todas
      melhores que os recortes do portfólio que o site usa hoje. Não entraram
      porque falta saber **o que é cada obra e quem fotografou** — ver a
      seção 5.

## 5. Material que falta pedir à artista

Nada disso pode ser inventado nem deduzido de catálogo.

- [ ] Lista das obras: título, ano, técnica, dimensões.
- [ ] Fotos das obras, com o crédito de quem fotografou e autorização de
      publicação.
- [ ] Lista das exposições, com local, cidade e datas.
- [ ] Texto de apresentação e biografia.
- [ ] E-mail público de contato e redes, se quiser que apareçam.
- [ ] Versões em inglês dos textos — ou autorização para traduzir e revisão
      dela depois.

## 6. Domínio próprio

- [ ] Registrar o domínio (o próprio nome da artista é o costume).
- [ ] No projeto da Cloudflare: custom domain com o domínio e o `www`.
- [ ] Ligar **Always Use HTTPS**.
- [ ] Redirecionamento de `www` para o endereço sem `www`, código 301,
      preservando caminho e query string.

## Pendências abertas pelo protótipo (04/11/2026)

O protótipo usa imagens **recortadas do PDF do portfólio**, não os arquivos
originais. Tudo abaixo precisa da Giovanna — as decisões do site são dela, não
da curadoria.

- [ ] **Fotos originais das obras.** As do protótipo vêm do PDF: têm entre 800 e
      1400 px e já passaram por uma compressão. Servem para ver o site de pé,
      não para publicar.
- [ ] **Datas da exposição** O Corpo como Escavação. Hoje a página diz só "2025".
      Falta o período, e falta confirmar se foi individual.
- [ ] **E-mail de contato da artista.** O rodapé mostra hoje o e-mail da SETE,
      como provisório. A página de contato está sem endereço nenhum.
- [ ] **Uma página por série**, em vez das dez na mesma página de Trabalhos.
      Decidir quando houver fotos de verdade para cada uma.
- [ ] **Textos em inglês.** A estrutura em duas línguas ainda não foi feita; o
      plano é português em `/` e inglês em `/en/`. Os textos vêm da artista.
- [ ] **Créditos de fotografia.** O portfólio credita André Dala (fotoperformance
      Projeções sobre a mesa) e Bruno Veiga (desenvolvimento técnico de
      Bioformações I). Nas demais imagens não há crédito: confirmar quem fotografou.
- [ ] **Vídeos.** O portfólio tem quatro links de processo e dois de performance.
      Decidir se entram e onde estão hospedados.
- [ ] **A foto da série ENTRE PELES é um print de tela do Photoshop.** Aparecem
      os painéis do programa e a barra de tarefas do Windows. Veio assim do
      recorte do PDF. Precisa sair, tendo ou não substituta à mão.

- [x] **Retrato da artista trocado** (17/11/2026). A foto de `Sobre` era um
      recorte do portfólio; agora é um dos três retratos de estúdio do manual
      de identidade, extraído do PDF no tamanho original (1200 × 800) e
      recortado em pé. **Falta o crédito de quem fotografou** e a confirmação
      de que ela autoriza a publicação — o `CLAUDE.md` exige os dois para
      foto de pessoa.

## Achados no material de identidade (17/11/2026)

- [ ] **A textura de parede de gruta do logotipo é um print de tela.** O arquivo
      dentro do PDF mostra o programa Fotos do Windows aberto, com barra de
      título, barra de tarefas e relógio — o mesmo problema da foto da série
      ENTRE PELES. No logotipo isso não aparece, porque o recorte pega só um
      pedaço do meio da foto, e o recorte que usei no site é exatamente esse.
      Mas vale avisar quem montou o material: a foto original da gruta deve
      existir em melhor qualidade, e aqui ela entra com 548 × 613 pixels, que
      é tudo o que havia.
- [ ] **O cabeçalho mudou de arranjo** (17/11/2026): logotipo à esquerda
      levando à página inicial, nome da artista à direita levando à página
      dela. No menu, "Sobre" virou "Sobre a artista" — o site é da artista e
      da exposição ao mesmo tempo, e sem isso as duas coisas se confundem.
      O nome da artista ocupa o lugar onde o seletor de idioma vai entrar
      quando o site for bilíngue; na hora, os dois precisam caber juntos.
- [ ] **A página inicial ficou para depois**, por decisão do Carlos em
      17/11/2026. Continua com o texto de exemplo.

## Decidido em 17/11/2026, com a Giovanna

- [x] **Duas fontes e dois papéis, sem exceção.** Cardo só em título e no
      logotipo; Raleway em todo o resto — menu, botões, legendas, currículo,
      poema, texto corrido. Eram onze lugares usando a Cardo fora de título,
      e a Giovanna reclamou de variação demais. Se ela quiser o poema de
      volta em Cardo, é uma linha no CSS.
- [x] **As bordas retas da marca saíram.** As duas peças que vinham de
      recorte retangular ganharam borda rasgada — não é desenho, é um
      retângulo passado por um filtro de ruído que empurra cada ponto do
      contorno para dentro ou para fora, como papel rasgado ou traço de
      carvão. O miolo da fotografia não muda. E a lâmina maior, que encostava
      na borda do palco e era cortada por uma linha de guilhotina, agora se
      dissolve nos últimos 8%.
- [ ] **A ideia das setas veio da obra, não da decoração.** O Carlos observou
      que a seta parece um rabisco e que isso conversa com o carvão e os
      materiais brutos que a Giovanna usa. Vale lembrar disso quando aparecer
      a tentação de trocá-las por um ícone de seta comum.

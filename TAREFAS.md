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

- [ ] **Arquivo original do logotipo.** O logotipo do cabeçalho hoje é montado
      com as próprias letras da Cardo (ver `.marca` no CSS) — nítido em
      qualquer tela e legível por leitor de tela. Mas o manual tem **duas**
      versões: essa, só de letras, e outra com texturas de pedra e biocelulose
      por trás. Para usar a segunda é preciso o arquivo de quem montou o
      material, de preferência PNG com fundo transparente. Recortar do PDF sai
      no tamanho em que foi colocado na página.
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
- [ ] **Texturas e elementos gráficos.** O manual entrega três texturas de
      fundo (barro alaranjado, papel creme, biocelulose) e um conjunto de
      elementos: espiral/fóssil, camadas geológicas, célula orgânica, raízes,
      setas desenhadas à mão e um ícone de "clique aqui". Nada disso está no
      site ainda. É a parte mais autoral e a que mais pede revisão.
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

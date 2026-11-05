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

- [ ] Trocar a paleta no topo de `assets/css/style.css`. A atual é de espera —
      aquele verde é da RELAHO. Em site de artista a regra é a página sumir:
      fundo neutro, espaço em branco, a imagem manda.
- [ ] Trocar as fontes (`--font-display` e `--font-body`), se quiser fontes
      próprias em vez das do sistema.
- [ ] Criar o favicon e acrescentar as linhas `<link rel="icon">` no
      `_includes/layouts/base.njk`.
- [ ] Revisar o `--header-height: 140px`, que foi medido no cabeçalho do molde.
      O `menu.js` corrige o valor assim que carrega; o 140 px só vale no
      instante antes disso. *(Os restos do molde nos comentários do CSS já
      saíram.)*
- [ ] Escrever a página inicial de verdade, no lugar do texto de exemplo.

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

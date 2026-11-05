# Instruções para o Claude Code — este site

Site estático em Eleventy da **artista visual Giovanna Pizzini**: suas obras e
suas exposições. Bilíngue (português e inglês). Montado a partir do molde do
site da RELAHO — de lá vêm a estrutura e a forma de trabalhar; identidade visual
e conteúdo são próprios.

Estrutura e comandos: ver `README.md`. Tarefas em aberto: ver `TAREFAS.md`.

## Quem trabalha aqui
- Carlos (dono do projeto, **não é programador** — e é quem revisa e aprova
  tudo). Explique o que vai fazer em linguagem simples, antes de fazer, e mostre
  o resultado no navegador (`npm start` → http://localhost:8081).
- O conteúdo é da artista: textos, dados das obras, lista de exposições e fotos
  vêm dela. O Carlos não é a fonte desses dados.

## Como trabalhar
- **Nunca commitar direto na `main`.** Cada tarefa vira uma branch e um pull
  request — mesmo trabalhando sozinho. É o que dá o endereço de preview para
  conferir antes de publicar, e o que permite descartar uma ideia inteira sem
  mexer no que já está no ar.
- Commits pequenos, com mensagem em português dizendo o que mudou.
- Ao concluir uma tarefa, marque o item em `TAREFAS.md` (`- [x]`) no mesmo
  pull request.
- A conta do GitHub deste site é `carlos-setecultural`. A `carlosxmendes`, que
  está autenticada nesta máquina, é a do trabalho da RELAHO: este site não passa
  por ela.

## Regras do conteúdo
- **Toda página existe nas duas línguas.** Mudou `content/pt/...`, mude o
  arquivo irmão em `content/en/...` (e vice-versa). O campo `altLang` liga os
  dois. *(A separação em `pt/` e `en/` é a primeira tarefa de estrutura — ver
  `TAREFAS.md`.)*
- Não inventar fatos, datas, nomes ou legendas. Isso vale em dobro para os dados
  das obras — título, ano, técnica, dimensões — e para nome de galeria, cidade e
  data de exposição: só entram se vierem da artista. Quando faltar informação,
  escrever "a confirmar" e listar a dúvida no pull request.
- **Nada de bastidor nas páginas.** Avisos sobre o que falta confirmar,
  decidir ou providenciar, notas técnicas e planos futuros não aparecem para o
  leitor: vão para `TAREFAS.md`. O site mostra só o que já está decidido.
- Fotos de obras levam o crédito de quem fotografou. Fotos de pessoas só com
  autorização de publicação e crédito. Não publicar dados pessoais.
- Identidade visual: cores e fontes estão como variáveis no topo de
  `assets/css/style.css`. Use as variáveis, não cores soltas.

## Fotos
- Versões para web: máx. 1400 px no lado maior, JPEG ~80%, sem EXIF de
  localização, nomes descritivos em minúsculas e com hífen. (O tamanho para
  fotos de obra ainda está em aberto — ver `TAREFAS.md`.)
- Originais e materiais brutos **não** entram no repositório (ver `.gitignore`).

## Este site não se mistura com o da RELAHO

São dois projetos separados, na mesma máquina e do mesmo Carlos. Nada passa de
um para o outro: nem conta, nem conteúdo, nem identidade visual.

- **Abra a conversa nesta pasta.** Uma sessão aberta em `relaho-website-1`
  carrega as regras da Rede, não estas. Se o assunto é a Giovanna, a pasta de
  trabalho é `site-novo`.
- **Porta 8081** é deste site; a 8080 é da RELAHO.
- **Conta do GitHub:** `carlos-setecultural`. A `carlosxmendes` é a da Rede e não
  entra aqui. O remoto já traz o usuário na URL e o repositório usa
  `credential.useHttpPath true` — é isso que impede o Windows de mandar a
  credencial errada.
- **O molde veio da RELAHO; a identidade, não.** Cores, fontes, textos e
  estrutura deste site são da artista. Se sobrar algum resquício da Rede no
  código, ele sai.
- **Quem decide o conteúdo é a artista Giovanna.** A curadora Cláudia
  Madella-Auricchio é a contratante pelo edital, não a aprovadora do site.

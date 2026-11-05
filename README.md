# Site novo

Site estático em [Eleventy](https://www.11ty.dev/), montado a partir do molde do
site da RELAHO: mesma estrutura, mesma forma de trabalhar, identidade visual e
conteúdo próprios.

## Rodar na sua máquina

```
npm install
npm start
```

Abre em `http://localhost:8081` e recarrega sozinho a cada arquivo salvo.
(A porta 8081 é deste site. A 8080 é do site da RELAHO, para que os dois
possam rodar ao mesmo tempo sem se atropelar.)
`npm run build` gera a versão de produção em `_site/`.

## Estrutura

```
content/                 as páginas, uma por arquivo .md
_includes/layouts/base.njk   o molde de toda página: cabeçalho, menu, rodapé
_data/site.json          nome do site, descrição e e-mail — usados no cabeçalho e no rodapé
_data/nav.json           o menu de navegação
assets/css/style.css     cores e fontes, como variáveis no topo do arquivo
assets/js/menu.js        o menu de celular (botão ☰, painel, tecla Esc)
assets/js/voltar-ao-topo.js  o botão ↑ que aparece em páginas longas
assets/img/              imagens do site
```

## Criar uma página

1. Crie o arquivo em `content/`, por exemplo `content/projetos.md`.
2. Copie o bloco entre `---` de uma página existente e ajuste `title` e
   `description`.
3. Se a página deve aparecer no menu, acrescente o item em `_data/nav.json`.

O endereço da página sai do nome do arquivo: `content/projetos.md` vira
`/projetos/`.

## Publicar

Hospedagem na Cloudflare, ligada ao repositório do GitHub:

- **Build command:** `npm run build`
- **Output directory:** `_site`

Cada vez que algo entra na branch `main`, a Cloudflare reconstrói e publica
sozinha. O passo a passo completo da montagem está em
`novo-site-passo-a-passo.md`, na pasta de cima.

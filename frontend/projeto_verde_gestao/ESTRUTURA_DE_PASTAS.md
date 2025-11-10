# Organização das pastas para o projeto React

Abaixo uma estrutura sugerida para um projeto de porte médio e a justificativa de cada pasta. É possível começar simples (tudo em /components) mas, conforme o projeto cresce, é melhor dividir por responsabilidades.

## Estrutura sugerida
- src/
    - assets/            — arquivos estáticos (imagens, fontes, ícones, svgs, etc.)
    - components/        — componentes UI reutilizáveis entre páginas (Navbar, Footer, Button, Input, Modal, Label)
    - pages/             — componentes que representam páginas/rotas (cada pasta por página ou feature)
        - Post/
            - Index.jsx
            - Body.jsx
            - Title.jsx
            - Tags.jsx
            - styles.css
    - features/          — opcional: agrupa lógica de domínio (ex: src/features/posts/...)
    - hooks/             — hooks customizados (useFetch.js, useTodoData.js, useForm.js)
    - services/          — comunicação com APIs e regras de negócio externas (client/http, adaptadores)
    - context/ or store/ — estado global (Context API ou stores como Zustand/Jotai). Prefira stores modernas para projetos maiores.
    - data/              — arquivos JSON ou fixtures que alimentam a UI (ex: seed, mock data)
    - utils/             — funções utilitárias agnósticas ao negócio (formatDate, debounce, clamp)
    - helpers/           — funções específicas do domínio/projeto (validações complexas, transforms)
    - types/             — tipagens (quando usar TypeScript) ou contratos de dados
    - styles/            — estilos globais, tokens, variáveis (Tailwind config, global.css)
    - tests/             — testes de integração/integração por pasta ou ao lado dos arquivos (.test.js)
    - index.js / main.jsx — ponto de entrada
- public/                — arquivos servidos estáticos (favicon, manifest)
- package.json, vite.config.js, tailwind.config.js, etc.

## Por que cada pasta existe (resumo)
- src/: contém todo o código fonte do app — separa da configuração e arquivos públicos.
- assets/: evita misturar binários com código; facilita otimização e importações.
- components/: concentra peças reutilizáveis que aparecem em várias páginas — favorece consistência e testes.
- pages/: organiza componentes ligados a rotas/páginas; permite carregamento sob demanda (code-splitting).
- features/: isola tudo relacionado a um domínio (posts, users) — útil em projetos grandes.
- hooks/: centraliza lógica reusável baseada em estado/efeitos — evita duplicação.
- services/: abstrai chamadas externas, transforma respostas e aplica regras (fácil de mockar em testes).
- context/store/: separa gerenciamento de estado global; preferir stores modernas (Zustand/Jotai) quando escalar.
- data/: mantém dados estáticos ou mocks; útil em dev e testes.
- utils/ e helpers/: distinção: utils = genéricos, helpers = específicos do projeto.
- types/: facilita manutenção e refatoração com TypeScript.
- tests/: organiza testes e facilita execução por pacote/CI.
- public/: arquivos que não passam pelo bundler (ferramenta que faz a "leitura" dos arquivos) - nesse caso, do vite.

## Comportamento recomendado para components vs pages
- Components: elementos de alta reutilização e sem dependência direta de rota (Botão, Input, Card).
- Pages: composições específicas da rota (tipo, páginas diferentes); podem usar components e hooks locais.
- Páginas simples podem ser um único arquivo; páginas complexas dividem em subcomponentes (ex.: Post/Body.jsx).


## Dicas práticas
- Começar simples; refatore para features quando a complexidade aumentar.
- Nomear arquivos por responsabilidade: MyComponent.jsx, useMyHook.js, postService.js.
- Colocar testes ao lado do arquivo quando o projeto for menor: Component.jsx + Component.test.jsx.
- Para muitas APIs/transformações, coloque lógica em services e mapeadores em helpers.

## Exemplo concreto: pasta Post
- src/pages/Post/
    - Index.jsx     — container da página, busca dados e monta a composição
    - Body.jsx      — conteúdo principal do post
    - Title.jsx     — componente de título (pode ir para /components se reutilizável)
    - Tags.jsx      — listagem de tags do post
    - post.service.js — chamadas API relacionadas a posts (colocar em /services se for compartilhado)
    - styles.module.css

## Styles (Estilos)

- src/styles/ — estilos globais, reset, tokens e configurações (ex.: variables.css, global.css). Ideal para regras que afetam a aplicação inteira.
- Arquivos ao lado do componente — coloque estilos específicos próximos ao componente/página (ex.: src/pages/Home/TelaInicial.module.css ou src/components/Button.module.css). Recomendo CSS Modules para escopo automático e evitar colisões de classe.
- Tailwind — se usar Tailwind, mantenha apenas tokens/globals em src/styles/ e prefira classes utilitárias no JSX. Crie arquivos CSS apenas para exceções/estilos complexos.
- Quando usar cada abordagem:
  - Global (src/styles): resets, variáveis, tipografia base, helpers utilitários globais.
  - CSS Modules (ao lado do componente): estilos exclusivos e escopados do componente/página.
  - Tailwind: utilitários na marcação; menos arquivos CSS.
  - Styled-components / CSS-in-JS: quando precisar de estilos dinâmicos fortemente acoplados a lógica JS.
- Boas práticas:
  - Nomeie arquivos como Component.module.css ou page.module.css.
  - Importe o estilo global em src/main.jsx (ex.: import "./styles/index.css").
  - Evite grandes arquivos globais com regras específicas — prefira escopo local ou módulos.
  - Centralize tokens (cores, espaçamentos) em um arquivo ou no tailwind.config para consistência.

Exemplos de caminhos:
- src/styles/index.css
- src/styles/tokens.css
- src/pages/Home/TelaInicial.module.css
- src/components/Navbar/Navbar.module.css
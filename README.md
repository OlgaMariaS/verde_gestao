# Projeto VERDE GESTÃO

## Tecnologias utilizadas

- Node.js — runtime JavaScript. (https://nodejs.org/)
- React — biblioteca UI. (https://reactjs.org/)
- Vite — bundler/dev server rápido. (https://vitejs.dev/)
- Tailwind CSS — framework utilitário de CSS. (https://tailwindcss.com/)

## Verificar Node.js

Abra o terminal (cmd, PowerShell ou terminal do seu IDE) e confirme a versão instalada:

```bash
node -v
```

Verifique na documentação do Vite qual a versão mínima do Node suportada para a versão do Vite que vai usar: https://vitejs.dev/.

## Criar projeto React com Vite

Para criar um novo projeto React usando a última versão do Vite:

```bash
npm create vite@latest
# seguir prompts: nome do projeto, selecionar "react" ou "react-ts"
cd nome-do-projeto
npm install
npm run dev
```

Links:

- Vite: https://vitejs.dev/
- React: https://reactjs.org/

Observação: dependendo da versão do Vite e do Node, pode haver incompatibilidades — sempre consulte a documentação do Vite antes de iniciar.

## Comandos básicos após criar o projeto

```bash
# entrar na pasta do projeto
cd nome-do-projeto

# instalar dependências
npm install

# rodar servidor de desenvolvimento
npm run dev

# build para produção
npm run build
```

## Instalar Tailwind CSS

Passos resumidos (seguir o guia oficial para detalhes e variações):

```bash
# instalar como dependência de desenvolvimento
npm install -D tailwindcss postcss autoprefixer

# gerar arquivo de configuração (cria tailwind.config.js e postcss.config.js)
npx tailwindcss init -p
```

Depois, configure os caminhos para os seus arquivos no tailwind.config.js (campo `content`) e adicione as diretivas do Tailwind no CSS principal (por exemplo, src/index.css):

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Reinicie o servidor de desenvolvimento se necessário:

```bash
npm run dev
```

Guia oficial Tailwind: https://tailwindcss.com/docs/installation

## Por que usar Tailwind CSS

- Produtividade: utilitários prontos para compor estilos rapidamente sem escrever CSS customizado repetitivo.
- Consistência: facilita manter um sistema de estilos uniforme entre componentes.
- Performance: ao configurar corretamente o purge/content, o CSS final inclui apenas as classes usadas.
- Flexibilidade: permite rápida prototipação e manutenção incremental.

Referências rápidas:

- Node.js: https://nodejs.org/
- React: https://reactjs.org/
- Vite: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/
- Guia de criação de projetos Vite + React: https://vitejs.dev/guide/
- Guia de instalação Tailwind: https://tailwindcss.com/docs/installation
- Conferir suporte de versão do Vite: https://vitejs.dev/guide/compatibility.html

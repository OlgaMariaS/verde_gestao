# Projeto VERDE GESTÃO

Aqui estão as instruções iniciais para todos os desenvolvedores, com foco em padronização e boas práticas.
Deve-se também adicionar tópicos que expliquem regras/passos sobre o projeto ao longo do ciclo de vida.

## Práticas no Git

#### 1. Crie uma branch a partir da `main`:

```bash
git checkout main
git pull origin main
git checkout -b "nome_da_sua_branch"
```

Nomes de branch:

- feature/codigo_funcionalidade → novas funcionalidades
- fix/descricao_bug → correções

Durante o trabalho na sua branch, pode executar da maneira que desejar, pois não afetará os outros envolvidos.

#### 2. Commits

Boas práticas é commitar a cada conclusão de etapa ao invés de um único commit com todas as alterações, exemplo:

```bash
git commit -m "adicionar autenticação do usuário"
git commit -m "corrigir bug na consulta de usuários"
```

#### 3. Ao finalizar o trabalho

- Lembre-se de atualizar sua branch puxando alterações da main com git pull
- Abra um Pull Request (PR) para main.

Seu Pull request deve conter:

- nome da sua branch - descrição breve
- descrição detalhada

        feature/F001 - Criação de usuários
        ------------------------------------
        Foi desenvolvido a funcionalidade de criar usuários pelo administrador.
        Para testar é necessário estar logado com user e senha, navegar a tela gerenciar usuários.
        ...

O PR só poderá ser mergeado se tiver 3 aprovações.

#### 4. Tags

Quando ocorrem grandes mudanças ou marcos, será feito tags da main, assim teremos um versionamento do projeto mais eficiente.

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Instruções

Aqui escrevam instruções de ferramentas externas que foram utilizadas para guiar todos os desenvolvedores e para ter registrado para a futura implantação, exemplos:

- Instalar REACT da forma XX
- Utilizado versão hibernate YY
- Biblioteca "STD" instalada com comando 'install std --java'
- Para icones foi utilizado o framework 'Icons'

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

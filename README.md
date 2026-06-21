# EBAC Sports — Redux React

Aplicação de uma loja de artigos esportivos desenvolvida com React e TypeScript. O projeto utiliza Redux Toolkit para gerenciar o carrinho e os favoritos, além do Redux Toolkit Query para consultar os produtos da API.

## Funcionalidades

- Listagem de produtos consumidos de uma API;
- adição de produtos ao carrinho;
- prevenção de itens duplicados no carrinho;
- adição e remoção de produtos dos favoritos;
- exibição da quantidade de favoritos e itens no carrinho;
- cálculo automático do valor total do carrinho;
- indicação de carregamento e erro na consulta dos produtos.

## Tecnologias utilizadas

- React;
- TypeScript;
- Redux Toolkit;
- React Redux;
- Redux Toolkit Query;
- Styled Components;
- Create React App.

## Pré-requisitos

Para executar o projeto, tenha o Node.js e o npm instalados em sua máquina.

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/vbarcellost/redux_react.git
cd redux_react
```

Instale as dependências:

```bash
npm install
```

## Como executar

Inicie o ambiente de desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

- `npm start`: executa o projeto em modo de desenvolvimento;
- `npm test`: inicia os testes em modo interativo;
- `npm run build`: gera a versão de produção na pasta `build`;
- `npm run eject`: expõe as configurações internas do Create React App. Esta operação não pode ser desfeita.

## Gerenciamento de estado

O estado global está organizado em slices do Redux Toolkit:

- `carrinho`: armazena os produtos adicionados ao carrinho;
- `favoritos`: armazena os produtos marcados como favoritos;
- `api`: gerencia a consulta, o cache e os estados de carregamento da API com RTK Query.

Os componentes acessam o estado com `useSelector` e enviam ações com `useDispatch`.

## API

Os produtos são consultados no endpoint:

```text
https://api-ebac.vercel.app/api/ebac_sports
```

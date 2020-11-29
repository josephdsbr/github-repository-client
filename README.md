<h1 align="center">GitHub User Explore</h1>
<p>Projeto desenvolvido para ser utilizados como ferramento de consulta rápida aos repositórios e outros detalhes de profissionais da área de Tecnoliga utilizando a API do Github</p>

Tabela de Conteúdo
==================
<p align="center">
  <a href="#informacoes">Informações</a>
  <a href="#features">Features</a>
  <a href="#telas">Telas</a>
  <a href="#pre-requisitos">Pré Requisitos</a>
  <a href="#instalacao">Instalação</a>
  <a href="#como-usar">Como usar</a>
  <a href="#tecnologia-e-ferramentas">Tecnologias e Ferramentas</a>
  <a href="#autor">Autor</a>
</p>

<h4>Em desenvolvimento</h4>

### [Informações](#informacoes)

Você pode visualizar a aplicação através deste [link](https://github-repositoty-client.vercel.app).

### Features

- [x] Configurações de `lint` para padronizar a estilização do código.
- [x] Configurações do `babel` e `next` para utilização de componentes de estilização.
- [x] Criação de um **Hook** para a utilização do [SWR](https://swr.vercel.app/) como estratégia de performance.
- [x] Configuração para utilização do [Styled-Components](https://styled-components.com/)
- [x] Desenvolvimento do componente de busca, utilizando como parâmetro o usuário do Github.
- [x] Desenvolvimento da tela de detalhes do Usuário.
- [x] Desenvolvimento da tela de detalhes dos repositórios do usuário.
- [x] Desenvolvimento da tela dos repositórios favoritos do usuário.
- [x] Implementação do [`nprogress`](https://ricostacruz.com/nprogress/) como indicador de loading entre as páginas (simulando um ambiente parecido com SPAs).

### Telas

#### Mobile

<div align="left">
<div>
  <h3 style="margin-bottom: 15px">Tela Inicial</h3>
  <img style="margin: 0 15px !important" src="./github/images/tela-inicial-mobile.jpeg" alt="Tela inicial mobile" height="425">
</div>


* Tela de detalhes do usuário

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-usuario-mobile.jpeg" alt="Tela de detalhes do usuário mobile" height="425">

* Tela de detalhes dos repositórios

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-repositorios-mobile.jpeg" alt="Tela detalhes dos repositórios mobile" height="425">

* Tela de detalhes dos repositórios favoritos

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-favoritos-mobile.jpeg" alt="Tela detalhes favoritos mobile" height="425">
</div>
#### Desktop

* Tela Inicial

<img style="margin: 0 15px !important" src="./github/images/tela-inicial-web.jpeg" alt="Tela inicial web" height="425">

* Tela de detalhes do usuário

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-usuario-web.jpeg" alt="Tela de detalhes do usuário web" height="425">

* Tela de detalhes dos repositórios

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-repositorios-web.jpeg" alt="Tela de detalhes dos repositórios web" height="425">

* Tela de detalhes dos repositórios favoritos

<img style="margin: 0 15px !important" src="./github/images/tela-detalhes-favoritos-web.jpeg" alt="Tela de detalhes dos repositórios favoritos" height="425">

### [Pré-requisitos](#pre-requisitos)

Antes de começar você vai precisar ter instalado em sua máquina:

- [NextJS](https://nextjs.org/docs/api-reference/cli)
- Um Package Manager ([NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/))
- [Git](https://git-scm.com/)

### [Instalação](#instalacao)

```bash

# Clone do repositório

$ git clone https://github.com/josephdsbr/github-repository-client.git

# Acesse a pasta do projeto no terminal/cmd

$ cd github-repository-client

# Instale as dependências

$ npm install ou yarn
```

### [Como Usar](#como-usar)

Este projeto está utilizando o Framework [NextJS](https://nextjs.org/) que utiliza, por padrão, o **SSR** (Server Side Rendering). Deste modo, para *startar* o projeto, em ambiente de desenvolvimento, deve-se executar o seguinte comando `npm run dev` ou `yarn dev`.


### [Tecnologias e Ferramentas](#tecnologia-e-ferramentas)

Este projeto utiliza:

- [React](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [SWR](https://swr.vercel.app/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

### Autor
---

<a href="https://github.com/josephdsbr">
 <img  src="https://avatars1.githubusercontent.com/u/42288345?s=460&u=3173ac53eabc99366999615e7a2623bcb6b1560f&v=4" width="100px;" alt="" style="border-radius: 50%;"/>
 <br />
 <sub><b>José Vinícius Santos de Melo</b></sub></a> <a href="https://github.com/josephdsbr" title="Josephdsbr">🚀</a>

Feito com ❤ por José Vinícius 👋🏽 Entre em contato!

* **Instagram** - [@pajebr](https://www.instagram.com/pajebr/)
* **Linkedin** -  [josephdsbr](https://www.linkedin.com/in/josephdsbr)
* **GitHub** - [josephdsbr](https://github.com/josephdsbr)

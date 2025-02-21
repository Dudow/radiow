# Radio Browser - Radiow (https://radiow-seven.vercel.app/)

## Introdução

### Resumo

O Radiow é um projeto que possibilita que o usuário busque rádios de qualquer parte do planeta e as ouça em tempo real. Conta com filtros de nome, país e linguagem. Seu layout é inspirado no Spotify (https://open.spotify.com/).

### Stack

- ReactJS

- Axios

- TailwindCSS

- react-h5-audio-player (audio player)

- TypeScript

- React Context

### Como usar

- Baixe o repositório em https://github.com/Dudow/radiow.
- Execute `yarn` para baixar todas as dependências.
- Execute `yarn dev` para iniciar o projeto.

### Documentação

- Logo no começo eu percebi que seria necessário o uso de Context para controlar os estados, também seria necessário trabalhar com localStorage para salvar os dados.

- Comecei estudando a API, ela tem uma documentação suficientemente boa, porém, poderia ser mais clara e centralizada, falta muita informação.

- Criei os services para controlar todas as rotas da api (stations, countries, languages, votes, tags) com os possíveis parâmetros e todas as interfaces.

- Criei a listagem de estações e os componentes para mostrá-las, adicionei o loading e estilizei.

- Criei o primeiro context, que foi para controlar os favoritos e adicionei no localStorage para salvar os dados

- Adicionei o filtro entre as estações favoritas.

- Criei o componente de busca de estações e a listagem das estações filtradas e criei o contexto para cuidar dos filtros e das estações filtradas.

- Criei o contexto para lidar da estação que está tocando, com isso eu pude adicionar estilização e o botão do stop.

- Adicionei o filtro de país e linguagem.

- Adicionei o botão de stop.

## Obrigatórios

**Obrigatório 1 -** Você deverá atender aos seguintes casos de uso:

- Como usuário, posso adicionar uma rádio na minha lista; ✅

- Como usuário, ver minha lista de rádios adicionadas; ✅

- Como usuário, posso remover uma rádio da minha lista; ✅

- Como usuário posso editar informações da rádio escolhida; ⚠️

- Como usuário, posso ouvir a rádio selecionado ao clicar o play; ✅

- Como usuário, posso parar de ouvir a rádio selecionada ao clicar no stop; ✅

- Como usuário, posso pesquisar a rádio que tenho interesse. ✅

**Obrigatório 2 -** Filtrar por nome da rádio, país ou idioma com paginação mostrando 10 rádios por vez. ⚠️

- Essa parte não deu muito certo porque a api não conta com um total_count do número de estações, então a paginação não seria performática. A solução seria fazer infinite scrolling, mas eu não sei se seria aceito, então não fiz.

**Obrigatório 3 -** Salvar as informações para quando o usuário retornar na aplicação deve ter as rádios salvas. ✅

**Obrigatório 4 -** Seguir a base do [wireframe] (https://www.figma.com/file/TDuhDdbwdzIVQjNV3GF9Qi/Radio?node-id=0%3A1) (estilização ao seu critério) ✅

## Extras

Além do desafio proposto temos alguns diferenciais:

**Diferencial 1 -** Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca; ❌

**Diferencial 2 -** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 3 -** Publique o projeto em alguma plataforma, como por exemplo a [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) ou outra de sua preferência. ✅

- https://radiow-seven.vercel.app/

## Readme do Repositório

- Deve conter o título do projeto ✅

- Uma descrição sobre o projeto em frase ✅

- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas ✅

- Como instalar e usar o projeto (instruções) ✅

- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore) ✅

- Se está usando github pessoal, referencie que é um challenge by coodesh: ✅

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste

2. Adicione o link da apresentação do seu projeto no README.md.

3. Verifique se o Readme está bom e faça o commit final em seu repositório;

4. Envie e aguarde as instruções para seguir. Sucesso e boa sorte. =)

> This is a challenge by [Coodesh](https://coodesh.com/)

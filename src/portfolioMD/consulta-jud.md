---
title: "Consulta Jud"
description: "Sistema que permite inicialmente que o Tribunal de Justiça consiga emitir certidões com a situação na qual as inscrições dos contribuintes se encontram."
---

O Consulta Jud da Procuradoria-Geral do Estado nasceu com o objetivo de dar celeridade aos processos fiscais que tramitam nas unidades do Poder Judiciário cearense e oferece mais transparência e celeridade às atividades que envolvem os dois órgãos, reduzindo o tempo gasto com expedientes desnecessários.

O Sistema Consulta Jud é composto por duas aplicações:

### Consulta Jud User

Sistema para acesso dos usuários cadastrados no CONSULTAJUD, que irão gerar as certidões de situação do contribuinte.

### Consulta Jud Admin

Sistema de criação de usuários para o CONSULTA JUD, para ser utilizada por administradores, na qual será permitido o cadastramento, edição e exclusão de usuários, permitindo ainda a vinculação por perfis de novos usuários.

## Entre as tecnologias usadas estão:

- Axios
- React
- ESLint
- Prettier
- Husky => Executa o hook git pre-commit, verificando se existe algum erro de lint antes de commitar seu código.
- Lint Staged => Executa linters em arquivos git testados e trabalha em conjunto com o husky.
- Material UI => Material de componentes react.
- React Testing Library => Biblioteca de testes do react.
- Jest e React Testing Library => Para o desenvolvimento de testes unitários e testes de componentes
- Redux => Gerenciador de estados.
- Styled-component => Biblioteca que nos permite escrever códigos CSS dentro do JavaScript para estilizar os componentes.
- Styled Media Query => Biblioteca que facilita trabalhar com media queries no styled components.
- Storybook => Ferramenta de código aberto para a construção de componentes de interface do usuário e páginas de forma isolada. Ele agiliza o desenvolvimento, teste e documentação da UI.
- React Router Dom => Biblioteca usada para fazer os roteamentos da aplicação.
- Plop => Usado para fazer a geração automática de componentes.
- Joi => Usado para fazer a validação de dados.

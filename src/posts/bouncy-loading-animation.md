---
author: "Zoranildo Santos"
title: "Aprenda a Criar um Bouncy Loading Animation Apenas com CSS"
description: "O intuito do artigo não é apenas mostrar como podemos criar um loading bouncy apenas usando css, mas também explicar o que cada propriedade css faz para que ao fim tenhamos um bouncy loading animation."
date: "19/07/2023"
tags: ["css", "html"]
---

O intuito do artigo não é apenas mostrar como podemos criar um loading bouncy apenas usando css, mas também explicar o que cada propriedade css faz para que ao fim tenhamos um bouncy loading animation.

```css
.loader {
  display: inline-block;
}
```

**.loader**: É uma classe que define um elemento como um bloco em linha (inline-block). No contexto dessa animação, ele deve ser aplicado a um elemento que contém os elementos com a classe .loader-ball.

```css
.loader-ball {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ffff;
  margin-inline: 5px;
  border-radius: 50%;
  animation: bounce 450ms alternate infinite;
}
```

**.loader-ball**: É uma classe que define os elementos que formam as bolas animadas. Cada bola é um círculo com 20px de largura e altura (width: 20px; height: 20px;) e tem a cor de fundo branca (background-color: #ffff;).

As bolas têm um espaçamento horizontal entre elas de 5px (margin-inline: 5px) e têm o formato de um círculo perfeito devido ao border-radius: 50%. Além disso, a animação de "bounce" é aplicada a essas bolas, com duração de 450ms, alternando entre o estado inicial e final de forma infinita (animation: bounce 450ms alternate infinite).

```css
.loader-ball:nth-child(1) {
  background-color: blue;
  animation-delay: 75ms;
}

.loader-ball:nth-child(2) {
  background-color: yellow;
  animation-delay: 150ms;
}

.loader-ball:nth-child(3) {
  background-color: green;
  animation-delay: 300ms;
}
```

**.loader-ball:nth-child(1), .loader-ball:nth-child(2), .loader-ball:nth-child(3)**: Essas são regras adicionais que especificam o estilo de cada bola individualmente.

Cada uma das bolas é selecionada por seu índice (1, 2 e 3, respectivamente) e possui uma cor de fundo diferente (azul, amarelo e verde, respectivamente) e um atraso específico na animação.

O primeiro elemento (:nth-child(1)) tem um atraso de 75ms, o segundo (:nth-child(2)) tem um atraso de 150ms e o terceiro (:nth-child(3)) tem um atraso de 300ms. Isso cria um efeito de animação escalonado, onde cada bola começa a animar após um pequeno atraso em relação à bola anterior.

**@keyframes bounce**: Essa é uma regra de animação keyframes que define a animação chamada "bounce". Essa animação é definida com duas etapas (from e to) que representam o estado inicial e final da animação.

Durante a animação, a bola é escalada horizontalmente para 1.25 vezes o seu tamanho original (transform: scaleX(1.25);) e é movida para cima (na direção negativa do eixo Y) em 50px (transform: translateY(-50px) scaleX(1);). Isso cria o efeito de "quicar" da bola enquanto ela é reduzida horizontalmente e movida para cima e para baixo.

## Código css completo:

```css
.loader {
  display: inline-block;
}
.loader-ball {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ffff;
  margin-inline: 5px;
  border-radius: 50%;
  animation: bounce 450ms alternate infinite;
}

.loader-ball:nth-child(1) {
  background-color: blue;
  animation-delay: 75ms;
}

.loader-ball:nth-child(2) {
  background-color: yellow;
  animation-delay: 150ms;
}

.loader-ball:nth-child(3) {
  background-color: green;
  animation-delay: 300ms;
}

@keyframes bounce {
  from {
    transform: scaleX(1.25);
  }
  to {
    transform: translateY(-50px) scaleX(1);
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <span class="loader">
      <span class="loader-ball"></span>
      <span class="loader-ball"></span>
      <span class="loader-ball"></span>
      <span class="loader-ball"></span>
    </span>
  </body>
</html>
```

**Configurar External link**

Caso queira ver o código funcionando acesse o [link codesandbox](https://codesandbox.io/embed/bouncy-loading-mdqjpm?fontsize=14&hidenavigation=1&theme=dark/)

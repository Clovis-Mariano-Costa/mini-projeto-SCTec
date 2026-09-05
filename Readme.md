# SkillMatch JS

Mini-Projeto Avaliativo do Módulo 01 do curso de Programação Front-End React do IFSC.

## Sobre o projeto

O **SkillMatch JS** é um simulador de compatibilidade entre o perfil de uma pessoa candidata e vagas fictícias para desenvolvimento Front-End Júnior.

O sistema será desenvolvido utilizando JavaScript e terá como objetivo comparar as habilidades do candidato com os requisitos de diferentes vagas.

A partir dessa comparação, o programa deverá informar:

- as habilidades que o candidato já possui;
- as habilidades exigidas por cada vaga;
- as habilidades que ainda estão faltando;
- o percentual de compatibilidade com cada vaga;
- a classificação da compatibilidade;
- a vaga com maior compatibilidade;
- uma recomendação de estudo para o candidato.

## Status do projeto

**Em desenvolvimento.**

O projeto está sendo construído gradualmente, acompanhando as etapas organizadas no quadro Kanban e o versionamento realizado com Git e GitHub.

## Links do projeto

- **Repositório no GitHub:**  
  https://github.com/Clovis-Mariano-Costa/mini-projeto-ifsc

- **GitHub Pages:**  
  https://clovis-mariano-costa.github.io/mini-projeto-ifsc/

- **Quadro Kanban no Trello:**  
  https://trello.com/invite/b/6a94a630c5e993c47cc90980/ATTIe88812b48beaceafc52fc324852fabff0E5FE055/mini-projeto-ifsc

- **Vídeo de apresentação:**  
  Será adicionado após a gravação.

## Tecnologias utilizadas

- JavaScript
- VS Code
- Git
- GitHub
- GitHub Desktop
- Trello

## Estrutura inicial do projeto

```text
mini-projeto-ifsc/
├── README.md
└── skillmatch.js

-------------------------------
A estrutura será mantida inicialmente de forma simples, pois o objetivo principal do projeto é demonstrar os conceitos de JavaScript estudados durante o Módulo 01.

Como executar

O projeto será executado utilizando JavaScript.

O arquivo principal da aplicação será:

skillmatch.js

Durante o desenvolvimento, o projeto será trabalhado no Visual Studio Code.

As instruções completas de execução serão atualizadas nesta seção conforme o desenvolvimento do projeto.

Perfil do candidato

O sistema terá um objeto representando o candidato.

Esse objeto deverá conter, no mínimo:

nome;
área de interesse;
lista de habilidades;
tempo de experiência.

O perfil utilizado será baseado no perfil real do autor do projeto.

Vagas

O sistema deverá possuir pelo menos três vagas fictícias para desenvolvimento Front-End Júnior.

Cada vaga deverá informar, no mínimo:

empresa;
cargo;
requisitos exigidos.

Os dados das vagas serão armazenados e manipulados utilizando JavaScript.

Regra de compatibilidade

A regra utilizada para calcular o percentual de compatibilidade entre o candidato e cada vaga será definida durante o desenvolvimento e documentada nesta seção.

O resultado deverá representar um percentual entre 0% e 100%.

A classificação seguirá as seguintes faixas:

Percentual	Classificação
80% a 100%	Alta compatibilidade
50% a 79%	Média compatibilidade
0% a 49%	Baixa compatibilidade

A fórmula utilizada no cálculo será registrada aqui depois que essa decisão for tomada durante o desenvolvimento.

Habilidades faltantes

O sistema deverá comparar as habilidades do candidato com os requisitos de cada vaga e identificar quais habilidades ainda estão faltando.

Essas informações também serão utilizadas para auxiliar na recomendação de estudo.

Melhor vaga

Depois de analisar todas as vagas, o sistema deverá identificar qual delas possui o maior percentual de compatibilidade com o perfil do candidato.

A estratégia utilizada para encontrar essa vaga será definida durante o desenvolvimento.

Recomendação de estudo

O critério utilizado para determinar quais habilidades devem receber prioridade nos estudos será definido durante o desenvolvimento do sistema e explicado nesta seção.

A recomendação será baseada nas habilidades que o candidato ainda não possui em relação às vagas analisadas.

Conceitos aplicados

Durante o desenvolvimento serão utilizados conceitos estudados no Módulo 01, incluindo:

variáveis com const e let;
tipos de dados;
strings;
números;
booleanos;
operadores;
estruturas condicionais;
estruturas de repetição;
funções;
arrow functions;
arrays;
métodos de array;
objetos;
classes;
construtores;
métodos;
herança;
this;
callbacks;
closures;
Promises;
async/await.

O projeto também deverá utilizar pelo menos três métodos de array entre:

map;
filter;
find;
every;
reduce.

A escolha dos métodos será feita de acordo com a necessidade de cada parte do programa.

Uso de const, let e var

Durante o desenvolvimento será dada preferência ao uso de const quando uma variável não precisar receber outro valor e ao uso de let quando houver necessidade de reatribuição.

O var faz parte dos conceitos estudados, porém const e let serão priorizados no projeto por permitirem um controle mais claro de escopo e reatribuição.

Programação Orientada a Objetos

O projeto utilizará conceitos de Programação Orientada a Objetos.

Será criada pelo menos uma classe contendo:

construtor;
atributos;
métodos.

Também será utilizada herança, com uma classe derivada de outra classe existente.

O uso de this será demonstrado dentro de pelo menos um método.

A modelagem definitiva das classes será definida durante o desenvolvimento.

Callback

O projeto deverá possuir uma função que receba outra função como parâmetro.

O callback será utilizado em uma situação que faça sentido dentro do fluxo do programa.

Closure

Será utilizada uma closure para manter um valor interno entre chamadas de uma função, sem depender de uma variável global.

A utilização concreta da closure será documentada depois de sua implementação.

Promise e async/await

O carregamento das vagas será simulado como se os dados estivessem sendo recebidos de um servidor.

Para isso serão utilizados:

Promise;
async;
await.

Será criado um pequeno atraso antes que as vagas fiquem disponíveis, simulando o tempo de resposta de um servidor.

Não será necessário utilizar uma API real.

Arquitetura cliente-servidor

Na arquitetura cliente-servidor, um cliente solicita informações ou serviços e um servidor recebe essa solicitação, realiza o processamento necessário e devolve uma resposta.

Neste projeto não será utilizado um servidor real.

O comportamento será simulado em JavaScript por meio de uma Promise, representando o carregamento das vagas como se os dados estivessem sendo obtidos de um servidor.

De forma simplificada:

Cliente
   ↓
Solicita as vagas
   ↓
Servidor simulado
   ↓
Processamento / espera
   ↓
Retorno das vagas
   ↓
Cliente
Organização do projeto

O desenvolvimento será organizado utilizando um quadro Kanban no Trello.

As colunas utilizadas são:

Backlog
A Fazer
Em Andamento
Concluído

As tarefas serão movimentadas entre essas colunas conforme o desenvolvimento do projeto avançar.

Quadro Kanban

https://trello.com/invite/b/6a94a630c5e993c47cc90980/ATTIe88812b48beaceafc52fc324852fabff0E5FE055/mini-projeto-ifsc

Versionamento

O projeto será versionado com Git e armazenado em um repositório público no GitHub.

O desenvolvimento será realizado utilizando branches de trabalho antes da integração com a branch principal.

A organização definida para o projeto é:

main
└── develop
    ├── perfil-e-vagas
    ├── compatibilidade
    ├── classes-e-heranca
    └── promise-e-async
main

Branch principal do projeto.

Deverá receber a versão integrada e revisada do sistema.

develop

Branch utilizada para integração das diferentes etapas do desenvolvimento antes da versão ser incorporada à main.

perfil-e-vagas

Responsável principalmente por:

criar o objeto candidato;
definir suas habilidades;
definir o tempo de experiência;
criar as vagas fictícias.
compatibilidade

Responsável principalmente por:

calcular o percentual de compatibilidade;
classificar a compatibilidade;
identificar habilidades faltantes;
encontrar a vaga mais compatível;
criar a recomendação de estudo;
utilizar métodos de array.
classes-e-heranca

Responsável principalmente por:

criar classes;
utilizar construtores;
criar métodos;
utilizar this;
implementar herança;
utilizar callback;
utilizar closure.
promise-e-async

Responsável principalmente por:

criar uma Promise;
simular o carregamento das vagas;
utilizar async;
utilizar await;
tratar o carregamento dos dados.
Fluxo das branches

As branches de desenvolvimento serão integradas inicialmente à branch develop.

perfil-e-vagas
      ↓
   develop

compatibilidade
      ↓
   develop

classes-e-heranca
      ↓
   develop

promise-e-async
      ↓
   develop

Depois da integração e revisão do projeto:

develop
   ↓
 main
Commits

Os commits serão realizados gradualmente durante o desenvolvimento e deverão possuir mensagens descritivas.

Exemplos:

Cria estrutura inicial do projeto

Adiciona perfil do candidato

Adiciona vagas fictícias

Implementa cálculo de compatibilidade
Decisões de projeto

As principais decisões tomadas durante o desenvolvimento serão registradas nesta seção.

Entre elas:

regra utilizada para calcular a compatibilidade;
motivo da escolha dessa regra;
critério utilizado para priorizar habilidades para estudo;
escolha dos métodos de array;
modelagem das classes;
motivo da herança utilizada;
utilização de callback;
utilização de closure;
funcionamento da simulação assíncrona.

Esta seção será atualizada conforme essas decisões forem efetivamente tomadas.

Uso de Inteligência Artificial

Ferramentas de Inteligência Artificial poderão ser utilizadas como apoio durante o desenvolvimento do projeto, principalmente para:

estudo e revisão de conceitos;
organização do projeto;
auxílio na documentação;
discussão de alternativas de implementação;
revisão do código.

As soluções utilizadas deverão ser compreendidas, revisadas e explicadas pelo autor do projeto.

Vídeo de apresentação

Ao final do desenvolvimento será gravado um vídeo demonstrando o funcionamento do sistema.

O vídeo deverá abordar:

o objetivo do sistema;
a demonstração de funcionamento;
como executar o projeto;
como as tarefas foram organizadas;
quais branches foram criadas;
o objetivo de cada branch;
possíveis melhorias futuras.

Link: a adicionar após a gravação.

Autor

Clovis Mariano da Costa

Mini-Projeto Avaliativo do Módulo 01
Programação Front-End React — IFSC
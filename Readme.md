# SkillMatch JS

Mini-Projeto Avaliativo do Módulo 01 do curso de **Programação Front-End React — SCTec**.

---

## Sobre o projeto
Em tempo, nota de erro:
Ao criar o projeto coloquei por engano (IFSC); Em alguns endereços;
Já troquei o que lembrei e tinha acesso; Via de regra leia-se SCTec no lugar de IFSC.


O **SkillMatch JS** é um simulador de compatibilidade entre o perfil de uma pessoa candidata e vagas de tecnologia, com foco principal em oportunidades para desenvolvimento Front-End Júnior.

O sistema compara as habilidades da pessoa candidata com os requisitos exigidos pelas vagas e apresenta:

- habilidades consideradas na análise;
- habilidades faltantes em cada vaga;
- percentual de compatibilidade técnica;
- classificação da compatibilidade;
- bônus de experiência profissional;
- pontuação final;
- vaga com maior pontuação;
- recomendação de estudo;
- histórico da análise;
- cadastro interativo de novo candidato;
- cadastro interativo de nova vaga;
- atualização do histórico após novos cadastros.

Além da funcionalidade principal, o projeto demonstra diversos conceitos de JavaScript estudados durante o Módulo 01, como:

- variáveis;
- tipos de dados;
- arrays;
- objetos;
- funções;
- arrow functions;
- estruturas condicionais;
- estruturas de repetição;
- operadores lógicos e matemáticos;
- métodos de array;
- Programação Orientada a Objetos;
- classes;
- construtores;
- herança;
- uso de `this`;
- callbacks;
- closures;
- Promises;
- async/await;
- tratamento de erros;
- entrada de dados pelo terminal.

---

# Status do projeto

**Sistema concluído — vídeo de apresentação pendente.**

As funcionalidades previstas foram implementadas, integradas e testadas.

Neste momento, falta apenas gravar o vídeo de apresentação, disponibilizá-lo por link e adicionar esse link ao README e à entrega no AVA.

---

# Funcionalidades principais

O SkillMatch JS permite:

- utilizar um candidato padrão;
- trabalhar com vagas previamente cadastradas;
- calcular a compatibilidade técnica ponderada entre candidato e vaga;
- classificar o nível de compatibilidade;
- identificar e exibir as habilidades faltantes de cada vaga;
- considerar a experiência profissional como bônus;
- calcular uma pontuação final;
- permitir que a pontuação final ultrapasse 100 pontos;
- encontrar a vaga com maior pontuação;
- recomendar uma habilidade para estudo;
- listar as vagas cadastradas;
- utilizar classes e herança;
- executar análise utilizando callback;
- manter contador interno de análises utilizando closure;
- simular carregamento assíncrono das vagas;
- tratar sucesso e erro com Promise;
- utilizar async/await;
- cadastrar um novo candidato pelo terminal;
- cadastrar uma nova vaga pelo terminal;
- validar entradas informadas pelo usuário;
- atualizar o histórico depois de novos cadastros;
- continuar com os dados originais sem realizar alterações.

---

# Tecnologias utilizadas

- JavaScript
- Node.js
- npm
- `prompt-sync`
- Visual Studio Code
- Git
- GitHub
- GitHub Desktop
- Trello

---

# Extensões utilizadas ou recomendadas no VS Code

Durante o desenvolvimento, o Visual Studio Code foi utilizado como editor principal.

Uma extensão útil para manter a organização visual do código é:

```text
Prettier - Code formatter
```

O Prettier auxilia na formatação e padronização do código.

Entretanto, nenhuma extensão específica do VS Code é obrigatória para executar o projeto.

A execução do programa é realizada com Node.js diretamente pelo terminal:

```bash
node skillmatch.js
```

---

# Dependência externa

O projeto utiliza a biblioteca:

```text
prompt-sync
```

Ela permite receber dados digitados pelo usuário diretamente no terminal.

A importação utilizada no código é:

```js
const prompt = require("prompt-sync")();
```

---

# Pré-requisitos

Para executar o projeto localmente é necessário possuir:

- Node.js instalado;
- npm disponível no terminal;
- Git, caso seja utilizado o clone do repositório.

---

# Instalação

Clone o repositório ou faça o download do projeto.

Repositório:

```text
https://github.com/Clovis-Mariano-Costa/mini-projeto-SCTec
```

Depois entre na pasta do projeto pelo terminal.

Instale as dependências com:

```bash
npm install
```

O comando utiliza as informações presentes no:

```text
package.json
```

e instala automaticamente as dependências necessárias.

Caso seja necessário instalar especificamente o `prompt-sync`, utilize:

```bash
npm install prompt-sync
```

---

# Como executar

O arquivo principal é:

```text
skillmatch.js
```

Execute pelo terminal com:

```bash
node skillmatch.js
```

O uso do terminal é importante porque o `prompt-sync` precisa receber entradas digitadas pelo usuário.

O **Console de Depuração do VS Code não é adequado para a interação com o `prompt-sync`**.

Portanto, a execução recomendada é:

```bash
node skillmatch.js
```

---

# Funcionamento geral

Quando o programa é iniciado, o SkillMatch apresenta primeiro o histórico padrão do sistema.

Esse histórico inclui:

- candidato atual;
- área de interesse;
- experiência profissional formal;
- habilidades;
- vagas cadastradas;
- compatibilidade técnica;
- classificação;
- habilidades faltantes de cada vaga;
- bônus de experiência;
- pontuação final;
- melhor vaga;
- recomendação de estudo;
- demonstração de callback.

Depois do histórico inicial, o sistema apresenta o menu de interação com o usuário.

---

# Menu do usuário

O menu permite escolher:

```text
1 - Inserir candidato
2 - Inserir vaga
0 - Continuar sem inserir dados
```

---

## Opção 0 — Continuar sem inserir dados

Ao escolher:

```text
0
```

nenhum dado é alterado.

O histórico inicial permanece válido.

O sistema continua utilizando:

- o candidato padrão;
- as vagas já cadastradas;
- os resultados originalmente calculados.

Essa opção permite executar todo o sistema sem realizar novos cadastros.

---

## Opção 1 — Inserir candidato

Ao escolher:

```text
1
```

o sistema inicia o cadastro de uma nova pessoa candidata.

São solicitados:

- nome;
- área de interesse;
- habilidades;
- tempo de experiência profissional em meses.

Exemplo:

```text
Nome do candidato: Maria da Silva
Área de interesse: Desenvolvimento Front-End
Habilidades separadas por vírgula: HTML, CSS, React
Tempo de experiência profissional em meses: 14
```

As habilidades informadas são transformadas em um array.

Por exemplo:

```text
HTML, CSS, React
```

torna-se:

```js
[
    "HTML",
    "CSS",
    "React"
]
```

O tempo de experiência é convertido para número e utilizado no cálculo do bônus profissional.

Depois do cadastro, o sistema gera um:

```text
HISTÓRICO ATUALIZADO
```

As mesmas vagas passam a ser analisadas utilizando o novo candidato.

Assim, podem mudar:

- compatibilidade técnica;
- classificação;
- habilidades faltantes;
- bônus de experiência;
- pontuação final;
- melhor vaga;
- recomendação.

---

## Opção 2 — Inserir vaga

Ao escolher:

```text
2
```

o sistema inicia o cadastro de uma nova vaga.

São solicitados:

- título da vaga;
- empresa;
- modalidade;
- localização;
- salário;
- habilidades exigidas;
- pesos das habilidades.

Exemplo:

```text
Título da vaga: Desenvolvedor Front-End Júnior
Empresa: Empresa Exemplo
Modalidade: Remoto
Localização: São José/SC
Salário: 4500
Habilidades exigidas: HTML, CSS, JavaScript, React
Pesos: 20, 20, 30, 30
```

A nova vaga é adicionada ao array existente.

Se antes existiam quatro vagas:

```text
4 vagas
```

depois do cadastro passam a existir:

```text
5 vagas
```

O histórico é então recalculado incluindo a nova vaga.

---

# Validação do cadastro de vaga

O sistema verifica algumas condições antes de aceitar uma nova vaga.

A quantidade de habilidades deve ser igual à quantidade de pesos.

Exemplo válido:

```text
Habilidades:
HTML, CSS, JavaScript

Pesos:
25, 25, 50
```

Também é verificado se todos os pesos são valores numéricos.

Além disso, a soma dos pesos deve ser:

```text
100
```

Exemplo:

```text
HTML       = 25
CSS        = 25
JavaScript = 50

Total      = 100
```

Se a soma não for igual a 100, o sistema solicita novamente os requisitos.

---

# Conversão de dados do prompt

Os valores recebidos pelo `prompt-sync` chegam inicialmente como texto.

Quando um valor precisa ser numérico, é utilizada conversão com:

```js
Number()
```

Por exemplo:

```js
const salario = Number(valorDigitado);
```

Também são utilizados:

```js
split(",")
```

para separar informações digitadas em sequência, e:

```js
trim()
```

para remover espaços extras.

---

# Perfil do candidato padrão

O projeto possui inicialmente um objeto representando o candidato.

```js
const candidato = {
    nome: "Clovis Mariano da Costa",
    areaInteresse: "Desenvolvimento Front-End",
    habilidades: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub"
    ],
    tempoExperienciaMeses: 0
};
```

O campo:

```text
tempoExperienciaMeses
```

representa experiência profissional formal.

Esse valor também é utilizado para calcular o bônus de experiência profissional.

---

# Vagas

As vagas são armazenadas em um array.

Cada vaga possui informações como:

- título;
- empresa;
- modalidade;
- localização;
- requisitos;
- peso dos requisitos;
- salário.

Entre as vagas utilizadas no projeto também existe uma vaga fictícia da:

```text
Jus 9 Tecnologia Jurídica
```

para:

```text
Desenvolvedor Front-End Júnior
```

em:

```text
São José/SC
```

com os seguintes requisitos:

```text
HTML       = 25
CSS        = 25
JavaScript = 50
```

---

# Regra de compatibilidade técnica

O SkillMatch utiliza uma regra de compatibilidade ponderada.

Cada habilidade exigida possui um peso.

Por exemplo:

```text
HTML       = 15
CSS        = 15
JavaScript = 30
React      = 25
TypeScript = 15
```

A soma dos pesos corresponde a:

```text
100
```

A fórmula utilizada é:

```text
compatibilidade técnica =
(pontos obtidos / peso total da vaga) × 100
```

Se o candidato possui:

```text
HTML
CSS
JavaScript
```

no exemplo acima, recebe:

```text
15 + 15 + 30 = 60
```

Resultado:

```text
Compatibilidade técnica: 60%
```

A compatibilidade técnica permanece sempre entre:

```text
0% e 100%
```

---

# Experiência profissional como bônus

Além da compatibilidade técnica, o projeto considera a experiência profissional da pessoa candidata.

A experiência não altera o percentual técnico.

Ela entra separadamente como um:

```text
bônus de experiência
```

O critério definido para o projeto é:

| Experiência profissional | Bônus |
|---|---:|
| 0 meses | +0 pontos |
| 1 a 5 meses | +5 pontos |
| 6 a 11 meses | +10 pontos |
| 12 a 23 meses | +15 pontos |
| 24 a 47 meses | +21 pontos |
| 48 meses ou mais | +27 pontos |

A função responsável por essa regra é:

```js
calcularBonusExperiencia()
```

A experiência foi tratada como bônus porque o projeto considera que experiência profissional pode representar um diferencial além do atendimento estritamente técnico aos requisitos da vaga.

---

# Compatibilidade técnica, bônus e pontuação final

O projeto separa claramente três conceitos.

## Compatibilidade técnica

Representa o atendimento aos requisitos técnicos da vaga.

Faixa:

```text
0% a 100%
```

---

## Bônus de experiência

Representa o diferencial decorrente do tempo de experiência profissional.

Faixa:

```text
0 a +27 pontos
```

---

## Pontuação final

É calculada por:

```text
pontuação final =
compatibilidade técnica
+
bônus de experiência
```

Exemplo:

```text
Compatibilidade técnica: 60%
Bônus de experiência: +15 pontos

Pontuação final: 75 pontos
```

Outro exemplo:

```text
Compatibilidade técnica: 100%
Bônus de experiência: +27 pontos

Pontuação final: 127 pontos
```

A pontuação final pode ultrapassar 100 pontos.

Isso não significa que a compatibilidade técnica ultrapassou 100%.

Significa que o candidato atingiu 100% dos requisitos técnicos e ainda recebeu pontos adicionais em razão da experiência profissional.

---

# Classificação da compatibilidade

A classificação continua sendo realizada exclusivamente sobre a:

```text
compatibilidade técnica
```

O sistema utiliza as seguintes faixas:

| Percentual técnico | Classificação |
|---|---|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

A implementação utiliza:

```js
if
else if
else
```

O bônus de experiência não altera as faixas Alta, Média e Baixa.

---

# Habilidades faltantes

O sistema compara:

```text
habilidades do candidato
```

com:

```text
requisitos da vaga
```

e identifica aquilo que ainda está faltando.

Para isso é utilizado:

```js
filter()
```

Exemplo:

```text
Requisitos:
HTML
CSS
JavaScript
React
TypeScript

Candidato possui:
HTML
CSS
JavaScript

Faltam:
React
TypeScript
```

Na versão final, o relatório exibe as habilidades faltantes **para cada vaga analisada**.

Exemplo:

```text
Empresa: CodeWave Sistemas Ltda.
Compatibilidade técnica: 60%
Habilidades faltantes: React, TypeScript
```

Quando nenhuma habilidade está faltando, o sistema informa:

```text
Habilidades faltantes: nenhuma
```

---

# Melhor vaga

Depois de calcular os resultados das vagas, o sistema identifica aquela com maior pontuação.

Para isso é utilizado:

```js
reduce()
```

A comparação utiliza a:

```text
pontuação final
```

que corresponde a:

```text
compatibilidade técnica + bônus de experiência
```

Para um mesmo candidato, o bônus de experiência é igual em todas as vagas.

Por isso, a compatibilidade técnica continua tendo papel decisivo na comparação entre as vagas.

Em caso de empate, permanece a primeira vaga encontrada com a maior pontuação.

A comparação utiliza:

```js
>
```

e não:

```js
>=
```

---

# Recomendação de estudo

O SkillMatch utiliza as habilidades faltantes para produzir uma recomendação.

O critério escolhido foi:

```text
priorizar a habilidade faltante com maior peso
```

Isso significa que o sistema recomenda estudar primeiro a habilidade que pode gerar o maior ganho imediato de compatibilidade técnica com a vaga analisada.

Exemplo:

```text
React      = peso 25
TypeScript = peso 15
```

A recomendação será:

```text
Priorize o estudo de React.
```

No fluxo de demonstração do projeto, uma vaga que contém tecnologias adicionais, como React e TypeScript, é utilizada como referência para permitir a demonstração prática dessa recomendação.

---

# Relatório completo no console

O relatório final apresentado no console contém:

```text
Candidato
Área de interesse
Experiência profissional
Habilidades
Vagas cadastradas
Compatibilidade técnica
Classificação
Bônus de experiência
Pontuação final
Habilidades faltantes por vaga
Melhor vaga
Recomendação de estudo
Análise com callback
Demonstração de classe e herança
Carregamento assíncrono
```

Dessa forma, o relatório reúne as principais informações analisadas pelo sistema.

---

# Métodos de array utilizados

O projeto utiliza diversos métodos de array.

## map()

Utilizado para:

- gerar resultados de compatibilidade;
- converter valores digitados;
- organizar dados de novas vagas;
- gerar a lista de nomes das habilidades faltantes.

---

## filter()

Utilizado para:

- identificar habilidades faltantes;
- remover entradas vazias.

---

## reduce()

Utilizado para:

- calcular o peso total;
- somar pontos obtidos;
- encontrar a melhor vaga;
- escolher a habilidade prioritária;
- somar pesos informados no prompt.

---

## forEach()

Utilizado para apresentar os resultados das vagas no console.

---

## every()

Utilizado para verificar se todos os pesos informados são valores numéricos válidos.

---

## includes()

Utilizado para verificar se determinada habilidade está presente na lista de habilidades do candidato.

---

# Estruturas de repetição

O projeto utiliza:

```js
for
```

para listar as vagas cadastradas.

Também utiliza:

```js
while
```

na validação dos requisitos de uma nova vaga.

E utiliza:

```js
do...while
```

na validação de entradas numéricas.

---

# Uso de const, let e var

O projeto prioriza:

```js
const
```

quando uma variável não precisa receber outro valor.

É utilizado:

```js
let
```

quando existe necessidade de reatribuição.

Exemplo:

```js
let totalAnalises = 0;
```

ou em estruturas de repetição:

```js
for (let i = 0; ...)
```

O projeto optou por priorizar `const` e `let` devido ao controle mais claro de escopo e reatribuição.

`var` faz parte do conteúdo estudado, porém não foi necessário para a implementação final.

---

# Tipos de dados

O projeto utiliza diferentes tipos de dados estudados durante o módulo.

## Strings

Exemplos:

```js
"JavaScript"
"Desenvolvedor Front-End Júnior"
"Alta compatibilidade"
```

## Números

Exemplos:

```js
3500
50
27
```

## Booleanos

Exemplo:

```js
const carregamentoComSucesso = true;
```

## Arrays

Exemplos:

```js
habilidades
vagas
requisitos
```

## Objetos

Exemplos:

```js
candidato
vaga
requisito
```

---

# Operadores lógicos e matemáticos

O projeto utiliza operadores matemáticos para:

- somar pesos;
- calcular percentuais;
- calcular bônus;
- calcular pontuação final.

Exemplos:

```js
+
/
*
```

Também utiliza operadores de comparação e operadores lógicos.

Exemplos:

```js
>
>=
===
!
```

---

# Funções

O projeto utiliza funções tradicionais.

Exemplo:

```js
function calcularCompatibilidade() {
}
```

Também utiliza arrow functions.

Exemplo:

```js
(vaga) => {
}
```

As duas formas aparecem em situações diferentes ao longo do código.

---

# Objetos

O candidato é representado como um objeto.

As vagas também utilizam objetos.

Exemplo de requisito:

```js
{
    habilidade: "JavaScript",
    peso: 50
}
```

---

# Programação Orientada a Objetos

Foi criada a classe principal:

```js
Vaga
```

Ela possui:

- construtor;
- atributos;
- método.

Exemplo:

```js
class Vaga {

    constructor(
        tituloVaga,
        empresa,
        modalidade,
        localizacao,
        requisitos,
        salario
    ) {
        this.tituloVaga = tituloVaga;
        this.empresa = empresa;
        this.modalidade = modalidade;
        this.localizacao = localizacao;
        this.requisitos = requisitos;
        this.salario = salario;
    }

    exibirResumo() {
        return `${this.tituloVaga} - ${this.empresa}`;
    }
}
```

---

# Uso de this

O projeto utiliza:

```js
this
```

para acessar os atributos pertencentes à instância.

Exemplos:

```js
this.tituloVaga
this.empresa
this.modalidade
this.localizacao
this.requisitos
this.salario
```

---

# Herança

Foi criada a classe filha:

```js
VagaFrontEnd
```

Ela herda de:

```js
Vaga
```

utilizando:

```js
extends
```

Exemplo:

```js
class VagaFrontEnd extends Vaga {
}
```

Dentro do construtor da classe filha é utilizado:

```js
super()
```

para reaproveitar o construtor da classe principal.

A classe filha acrescenta o atributo:

```js
frameworkPrincipal
```

e também possui o método:

```js
exibirTecnologiaPrincipal()
```

---

# Instância da classe filha

A vaga da Jus 9 Tecnologia Jurídica foi criada como instância de:

```js
VagaFrontEnd
```

Isso demonstra que a herança não foi criada apenas de forma teórica, mas é efetivamente utilizada pelo programa.

---

# Callback

O projeto possui uma função que recebe outra função como parâmetro.

A função:

```js
analisarVaga()
```

recebe um callback.

Exemplo:

```js
analisarVaga(
    candidato,
    vaga,
    exibirResultadoVaga
);
```

Nesse exemplo:

```js
exibirResultadoVaga
```

é a função callback.

Na versão final, o callback também apresenta:

- compatibilidade técnica;
- classificação;
- bônus de experiência;
- pontuação final.

---

# Closure

Foi criada uma closure para manter internamente o número de análises realizadas.

Exemplo:

```js
function criarContadorAnalises() {

    let totalAnalises = 0;

    return function () {

        totalAnalises++;

        return totalAnalises;
    };
}
```

A variável:

```js
totalAnalises
```

não é global.

Mesmo depois da execução da função externa, a função interna continua tendo acesso ao valor.

---

# Promise

O sistema simula o carregamento das vagas como se os dados fossem recebidos de um servidor.

Foi utilizada:

```js
new Promise()
```

com os parâmetros:

```js
resolve
reject
```

Quando a operação é bem-sucedida:

```js
resolve(vagas);
```

Quando ocorre um erro simulado:

```js
reject("Erro ao carregar as vagas.");
```

---

# Simulação de atraso

Para simular o tempo de resposta de um servidor, foi utilizado:

```js
setTimeout()
```

com:

```text
2000 milissegundos
```

equivalente a aproximadamente:

```text
2 segundos
```

---

# Async e Await

Foi criada uma função assíncrona:

```js
async function iniciarCarregamento()
```

Dentro dela é utilizado:

```js
await carregarVagas()
```

O `await` aguarda a conclusão da Promise antes de continuar a execução daquela parte do fluxo.

---

# Tratamento de erros

O sistema utiliza:

```js
try
```

e:

```js
catch
```

para tratar tanto o carregamento bem-sucedido quanto uma possível falha.

Para testar manualmente o erro, o valor:

```js
const carregamentoComSucesso = true;
```

pode ser temporariamente alterado para:

```js
const carregamentoComSucesso = false;
```

---

# Como a internet funciona

A internet é uma rede formada por diversos computadores e dispositivos conectados.

Quando uma pessoa utiliza um navegador ou aplicativo para acessar um serviço, normalmente existe uma comunicação entre:

```text
cliente
```

e:

```text
servidor
```

O cliente faz uma solicitação.

Por exemplo:

```text
"quero receber a lista de vagas"
```

Essa solicitação percorre a rede até chegar ao servidor responsável.

O servidor recebe o pedido, processa a informação e envia uma resposta.

De forma simplificada:

```text
Cliente
   ↓
faz uma requisição
   ↓
Internet / rede
   ↓
Servidor
   ↓
processa a requisição
   ↓
envia uma resposta
   ↓
Internet / rede
   ↓
Cliente recebe os dados
```

Na internet real, essa comunicação costuma utilizar protocolos como HTTP ou HTTPS.

O SkillMatch não realiza uma chamada real pela internet, mas simula esse comportamento para demonstrar o conceito estudado.

---

# Arquitetura cliente-servidor

A arquitetura cliente-servidor separa quem solicita um serviço de quem fornece esse serviço.

No SkillMatch:

```text
Cliente
   ↓
solicita vagas
   ↓
servidor simulado
   ↓
processamento / espera
   ↓
Promise
   ↓
retorno das vagas
   ↓
Cliente
```

O projeto não utiliza um servidor real nem uma API externa.

A comunicação é simulada com JavaScript.

O:

```js
setTimeout()
```

representa o tempo de espera que poderia existir em uma comunicação real.

A:

```js
Promise
```

representa uma operação que ainda não terminou.

O:

```js
await
```

permite aguardar a conclusão dessa operação.

Dessa forma, o projeto demonstra de forma simplificada como uma aplicação pode esperar dados vindos de um servidor.

---

# Histórico do sistema

Uma parte importante da versão final é a possibilidade de comparar o estado inicial com um estado atualizado.

O fluxo é:

```text
HISTÓRICO INICIAL
        ↓
PROMPT DO USUÁRIO
        ↓
ESCOLHA
```

Se o usuário escolhe:

```text
0
```

o histórico inicial permanece válido.

Se escolhe:

```text
1
```

é criado um novo candidato e exibido:

```text
HISTÓRICO ATUALIZADO
```

A experiência profissional informada também passa a participar da pontuação por meio do bônus.

Se escolhe:

```text
2
```

é criada uma nova vaga e também exibido:

```text
HISTÓRICO ATUALIZADO
```

---

# Estrutura do projeto

A estrutura principal do repositório é semelhante a:

```text
mini-projeto-SCTec/
│
├── Imagens/
│   └── capturas de tela do Kanban
│
├── ETAPA-1-PERFIL-E-VAGAS.md
├── ETAPA-2-COMPATIBILIDADE.md
├── ETAPA-3-CLASSES-E-HERANCA.md
├── ETAPA-4-PROMISE-E-ASYNC.md
├── ETAPA-5-PROMPT-DO-USUARIO.md
├── DEVELOP.md
│
├── package.json
├── package-lock.json
├── README.md
└── skillmatch.js
```

---

# Pasta Imagens

A pasta:

```text
Imagens
```

contém capturas de tela do quadro Kanban utilizadas durante o desenvolvimento.

Esses arquivos servem como registro visual:

- da organização das tarefas;
- da evolução do projeto;
- da movimentação dos cartões;
- das etapas concluídas;
- do acompanhamento do desenvolvimento;
- da revisão final realizada na `main`.

Assim, além do quadro Trello público, o repositório mantém evidências visuais do processo de organização.

---

# Organização pelo Kanban

O projeto foi organizado utilizando Trello.

As colunas obrigatórias utilizadas foram:

```text
Backlog
A Fazer
Em Andamento
Concluído
```

Além delas, foram criadas áreas específicas para organizar as frentes de desenvolvimento.

Entre elas:

```text
3. classes-e-heranca
4. promise-e-async
5. prompt-do-usuario
Atualização final na "main"
```

O Kanban foi atualizado durante o desenvolvimento, acompanhando o trabalho efetivamente realizado.

---

# Etapas do projeto

O desenvolvimento foi dividido em etapas.

---

## Etapa 1 — Perfil e vagas

Principais atividades:

- criação do candidato;
- definição das habilidades;
- definição do tempo de experiência;
- criação das vagas;
- definição dos requisitos.

Documentação:

```text
ETAPA-1-PERFIL-E-VAGAS.md
```

---

## Etapa 2 — Compatibilidade

Principais atividades:

- cálculo de compatibilidade;
- classificação;
- habilidades faltantes;
- melhor vaga;
- recomendação de estudo;
- métodos de array.

Documentação:

```text
ETAPA-2-COMPATIBILIDADE.md
```

---

## Etapa 3 — Classes e herança

Principais atividades:

- classe principal;
- constructor;
- métodos;
- uso de `this`;
- classe filha;
- herança;
- callback;
- closure.

Documentação:

```text
ETAPA-3-CLASSES-E-HERANCA.md
```

---

## Etapa 4 — Promise e Async

Principais atividades:

- Promise;
- resolve;
- reject;
- atraso simulado;
- async;
- await;
- try/catch;
- tratamento de erro.

Documentação:

```text
ETAPA-4-PROMISE-E-ASYNC.md
```

---

## Etapa 5 — Prompt do usuário

Principais atividades:

- instalação do `prompt-sync`;
- menu interativo;
- cadastro de candidato;
- cadastro de vaga;
- validação de entradas;
- conversão de dados;
- atualização do histórico;
- integração com as funcionalidades anteriores.

Documentação:

```text
ETAPA-5-PROMPT-DO-USUARIO.md
```

---

# Atualização final na main

Após a integração das etapas, foi realizada uma revisão do projeto utilizando o checklist final de entrega.

Nessa revisão foram acrescentados:

- bônus de experiência profissional;
- separação entre compatibilidade técnica e pontuação final;
- exibição das habilidades faltantes em cada vaga;
- atualização do relatório completo;
- explicação sobre funcionamento da internet;
- registro das extensões utilizadas ou recomendadas;
- atualização deste README.

Essa revisão final foi realizada diretamente sobre a versão consolidada do projeto.

---

# Documentação da Develop

Também foi criado:

```text
DEVELOP.md
```

Esse arquivo registra a consolidação das funcionalidades na branch de integração antes da versão final.

---

# Versionamento com Git e GitHub

O projeto foi versionado com Git e armazenado em um repositório público no GitHub.

Foi utilizada uma estratégia simplificada com:

```text
branches de trabalho
        ↓
Develop
        ↓
main
```

O desenvolvimento das funcionalidades ocorreu em branches separadas antes da integração na branch principal.

---

# Branches utilizadas

A organização utilizada durante o projeto foi:

```text
main
└── Develop
    ├── Etapa-1
    ├── Etapa-2
    ├── Etapa-3
    ├── Etapa-4
    └── 5-prompt-do-usuario
```

---

## main

Branch principal.

Recebe a versão consolidada e revisada do projeto.

A revisão final do checklist também foi realizada na `main`.

---

## Develop

Branch utilizada para reunir e testar as diferentes etapas antes da integração na `main`.

---

## Etapa-1

Utilizada para o desenvolvimento inicial de candidato e vagas.

---

## Etapa-2

Utilizada para a lógica de compatibilidade.

---

## Etapa-3

Utilizada para classes, herança, callback e closure.

---

## Etapa-4

Utilizada para Promise e async/await.

---

## 5-prompt-do-usuario

Utilizada para a interação com o usuário por meio do `prompt-sync`.

---

# Fluxo das branches

O fluxo realizado foi:

```text
Etapa-1
   ↓
Develop

Etapa-2
   ↓
Develop

Etapa-3
   ↓
Develop

Etapa-4
   ↓
Develop

5-prompt-do-usuario
   ↓
Develop

Develop
   ↓
main

Revisão final
   ↓
main
```

---

# Commits

O projeto possui commits realizados ao longo de seu desenvolvimento.

As mensagens foram utilizadas para registrar as alterações realizadas em cada fase.

Exemplos:

```text
Implementa cálculo de compatibilidade
```

```text
Implementa classes e herança para vagas
```

```text
Documenta classes, herança, callback e closure
```

```text
Implementa Promise, async/await e tratamento de erros
```

```text
Organiza saída final e documenta a Develop
```

```text
Implementa interação com prompt-sync e histórico atualizado
```

A atualização final também gera um registro específico relacionado à revisão da `main`.

---

# Principais decisões de projeto

## Compatibilidade ponderada

Foi escolhida uma regra baseada em pesos.

Uma habilidade pode possuir importância maior que outra dentro de determinada vaga.

---

## Soma dos pesos

Para novas vagas cadastradas pelo usuário, os pesos devem totalizar:

```text
100
```

Isso facilita a interpretação do percentual técnico.

---

## Experiência como bônus

A experiência profissional não altera o percentual técnico.

Ela acrescenta entre:

```text
0 e 27 pontos
```

à pontuação final.

Essa decisão permite valorizar a experiência profissional sem alterar a escala técnica exigida de 0 a 100%.

---

## Melhor vaga

É escolhida a vaga com maior pontuação final.

A pontuação final corresponde a:

```text
compatibilidade técnica + bônus de experiência
```

Em caso de empate, permanece a primeira vaga encontrada.

---

## Classificação

As classificações:

```text
Alta
Média
Baixa
```

continuam considerando apenas o percentual técnico.

---

## Recomendação de estudo

A prioridade é dada à habilidade faltante de maior peso.

---

## Programação Orientada a Objetos

A classe:

```text
Vaga
```

representa uma vaga genérica.

A classe:

```text
VagaFrontEnd
```

representa uma especialização dessa vaga.

---

## Callback

O callback foi utilizado para separar a execução da análise da forma como seu resultado é apresentado.

---

## Closure

A closure foi utilizada para preservar internamente a contagem das análises.

---

## Promise

A Promise foi utilizada para simular o carregamento de vagas de forma assíncrona.

---

## Prompt

O `prompt-sync` foi utilizado para permitir interação real pelo terminal sem exigir alteração manual dos dados no código.

---

# Uso de Inteligência Artificial

Durante o desenvolvimento do SkillMatch JS foi utilizado o **ChatGPT** como ferramenta de apoio técnico, educacional e documental.

A participação da Inteligência Artificial ocorreu principalmente em:

- explicação de conceitos de JavaScript;
- estudo de `const`, `let`, funções e arrow functions;
- revisão de arrays e objetos;
- discussão sobre métodos de array;
- explicação e revisão de `map`, `filter`, `reduce`, `every` e `forEach`;
- discussão da regra de compatibilidade;
- apoio na estruturação da compatibilidade ponderada;
- discussão da inclusão da experiência profissional como bônus;
- revisão de estruturas condicionais;
- revisão de estruturas de repetição;
- apoio na Programação Orientada a Objetos;
- explicação e revisão de classes;
- explicação de `constructor`;
- explicação de `this`;
- desenvolvimento e compreensão da herança;
- apoio na criação da classe filha;
- explicação de callback;
- explicação de closure;
- apoio na integração entre callback e closure;
- explicação de Promise;
- implementação e revisão de `async/await`;
- discussão sobre `resolve`, `reject`, `try` e `catch`;
- apoio na simulação de cliente-servidor;
- discussão sobre `prompt-sync`;
- apoio no desenvolvimento do menu interativo;
- apoio na validação dos cadastros;
- revisão do código;
- organização das etapas;
- organização do Kanban;
- sugestões de mensagens de commit;
- documentação das etapas;
- revisão da branch `Develop`;
- conferência do checklist final;
- revisão da versão consolidada na `main`;
- consolidação deste README;
- preparação para a apresentação final.

As decisões foram discutidas ao longo do desenvolvimento.

O código utilizado no projeto foi executado, testado e acompanhado pelo autor.

A utilização da Inteligência Artificial ocorreu como ferramenta de apoio ao estudo e ao desenvolvimento, mantendo a responsabilidade do autor sobre a compreensão, validação e apresentação da solução.

---

## Participação do assistente de Inteligência Artificial

**ChatGPT — GPT-5.6 Sol**  
**OpenAI**

Atuei neste projeto como assistente de apoio técnico, educacional e documental.

Minha participação envolveu explicar conceitos, discutir alternativas, revisar trechos de código, apoiar a organização das etapas, auxiliar na conferência dos requisitos e colaborar na documentação.

As decisões finais, os testes, a execução do código, a validação das funcionalidades e a condução do projeto foram realizados pelo autor.

**Assinado:**  
**ChatGPT — GPT-5.6 Sol**  
Assistente de Inteligência Artificial da OpenAI

---

# Melhorias futuras possíveis

Embora o sistema esteja concluído para os objetivos deste mini-projeto, algumas evoluções futuras poderiam incluir:

- interface gráfica;
- formulário web;
- armazenamento permanente dos candidatos;
- armazenamento permanente das vagas;
- banco de dados;
- API real;
- autenticação;
- cadastro de vários candidatos;
- edição e exclusão de vagas;
- comparação entre candidatos;
- filtros;
- ordenação por compatibilidade;
- persistência do histórico;
- aplicação em React;
- criação de regras diferentes de experiência para diferentes vagas;
- diferenciação entre experiência profissional geral e experiência específica por tecnologia.

Essas possibilidades não fazem parte do escopo atual.

---

# Vídeo de apresentação

O vídeo de apresentação demonstrará:

- objetivo do SkillMatch JS;
- execução do projeto;
- instalação das dependências;
- utilização do `prompt-sync`;
- histórico inicial;
- opção 0;
- cadastro de candidato;
- cadastro de vaga;
- atualização do histórico;
- cálculo de compatibilidade técnica;
- bônus de experiência;
- pontuação final;
- habilidades faltantes;
- melhor vaga;
- recomendação de estudo;
- classes e herança;
- callback e closure;
- Promise e async/await;
- organização no Kanban;
- branches utilizadas;
- estrutura do repositório;
- pasta `Imagens`;
- uso de Inteligência Artificial;
- melhorias futuras possíveis.

Também será explicado no vídeo:

- como executar o sistema;
- como as tarefas foram organizadas;
- quais branches foram utilizadas;
- o objetivo de cada branch;
- o que poderia ser melhorado futuramente;
- onde foi utilizada Inteligência Artificial;
- o que foi revisado e validado pelo autor.

---

## Link do vídeo

https://drive.google.com/file/d/1NQMhUX4bLHRqb1Mcgq1m8UxbtJTAsSMb/view?usp=sharing
---

# Links do projeto

## Repositório no GitHub

https://github.com/Clovis-Mariano-Costa/mini-projeto-SCTec
---

## GitHub Pages

https://clovis-mariano-costa.github.io/mini-projeto-SCTec/

> **Observação:** a execução interativa completa do sistema utiliza Node.js e `prompt-sync`. Portanto, o sistema deve ser executado localmente pelo terminal com `node skillmatch.js`. O GitHub Pages não executa o fluxo interativo em Node.js.

---

## Kanban no Trello

https://trello.com/invite/b/6a94a630c5e993c47cc90980/ATTIe88812b48beaceafc52fc324852fabff0E5FE055/mini-projeto-sctec




## Link para arquivos de apoio
https://drive.google.com/drive/folders/1xtAXf1iaC8RSCRCvzdZehlKCeWOY0iF7?usp=sharing


---

# Autor

**Clovis Mariano da Costa**

Mini-Projeto Avaliativo do Módulo 01  
Programação Front-End React — SCTec

---

# Colaboração técnica, educacional e documental

**ChatGPT — GPT-5.6 Sol**  
**OpenAI**

Apoio durante o estudo, desenvolvimento, revisão, documentação, organização e conferência final do SkillMatch JS.

---

# Situação final

```text
SISTEMA CONCLUÍDO
```

Funcionalidades concluídas:

```text
Perfil do candidato
Vagas
Compatibilidade técnica
Classificação
Habilidades faltantes
Bônus de experiência
Pontuação final
Melhor vaga
Recomendação de estudo
Métodos de array
Classes
Construtor
Herança
this
Callback
Closure
Promise
Async/Await
Tratamento de erros
Prompt do usuário
Histórico atualizado
Kanban
Git e GitHub
README
```


```

---

**SkillMatch JS — Mini-Projeto Avaliativo — SCTec**
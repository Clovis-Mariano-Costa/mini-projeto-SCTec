# SkillMatch JS

Mini-Projeto Avaliativo do Módulo 01 do curso de **Programação Front-End React — IFSC**.

---

## Sobre o projeto

O **SkillMatch JS** é um simulador de compatibilidade entre o perfil de uma pessoa candidata e vagas de tecnologia, com foco principal em oportunidades para desenvolvimento Front-End Júnior.

O sistema compara as habilidades de uma pessoa candidata com os requisitos exigidos pelas vagas e apresenta:

- habilidades consideradas na análise;
- habilidades faltantes;
- percentual de compatibilidade;
- classificação da compatibilidade;
- vaga com maior compatibilidade;
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
- métodos de array;
- Programação Orientada a Objetos;
- herança;
- callbacks;
- closures;
- Promises;
- async/await;
- tratamento de erros;
- entrada de dados pelo terminal.

---

## Status do projeto

**Sistema concluído — vídeo de apresentação pendente.**

As funcionalidades previstas foram implementadas, integradas e testadas.

Neste momento, falta apenas adicionar o link do vídeo de apresentação.

---

## Funcionalidades principais

O SkillMatch JS permite:

- utilizar um candidato padrão;
- trabalhar com vagas previamente cadastradas;
- calcular compatibilidade ponderada entre candidato e vaga;
- classificar o nível de compatibilidade;
- identificar habilidades faltantes;
- encontrar a vaga mais compatível;
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
- prompt-sync
- Visual Studio Code
- Git
- GitHub
- GitHub Desktop
- Trello

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
https://github.com/Clovis-Mariano-Costa/mini-projeto-ifsc
```

Depois entre na pasta do projeto pelo terminal.

Instale as dependências com:

```bash
npm install
```

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

A execução recomendada é, portanto:

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
- resultado de compatibilidade;
- classificação;
- melhor vaga;
- recomendação de estudo;
- demonstração de callback.

Depois do histórico inicial, o sistema apresenta a etapa de interação com o usuário.

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
Tempo de experiência profissional em meses: 6
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

Depois do cadastro, o sistema gera um:

```text
HISTÓRICO ATUALIZADO
```

As mesmas vagas passam a ser analisadas utilizando o novo candidato.

Assim, percentuais, classificações, melhor vaga e recomendação podem mudar.

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

Entre as vagas utilizadas no projeto também existe uma vaga da:

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

# Regra de compatibilidade

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

A fórmula geral utilizada é:

```text
compatibilidade =
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
60%
```

---

# Classificação da compatibilidade

O sistema utiliza as seguintes faixas:

| Percentual | Classificação |
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

Também foram preservados no código alguns testes manuais comentados da função de classificação.

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

---

# Melhor vaga

Depois de calcular a compatibilidade de todas as vagas, o sistema identifica aquela com maior percentual.

Para isso é utilizado:

```js
reduce()
```

A comparação principal utiliza:

```js
if (compatibilidadeAtual > compatibilidadeMelhor)
```

Em caso de empate, permanece a primeira vaga encontrada com a maior porcentagem.

Isso acontece porque foi utilizado:

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

Isso significa que o sistema recomenda estudar primeiro a habilidade que pode gerar o maior ganho imediato de compatibilidade com a vaga analisada.

Exemplo:

```text
React      = peso 25
TypeScript = peso 15
```

A recomendação será:

```text
Priorize o estudo de React.
```

---

# Métodos de array utilizados

O projeto utiliza diversos métodos de array.

## map()

Utilizado para:

- gerar resultados de compatibilidade;
- converter valores digitados;
- organizar dados de novas vagas.

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

Utilizado para apresentar resultados de compatibilidade.

---

## every()

Utilizado para verificar se todos os pesos informados são valores numéricos válidos.

---

## includes()

Utilizado para verificar se determinada habilidade está presente na lista de habilidades do candidato.

---

# Estruturas de repetição

O projeto utiliza estrutura tradicional:

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

# Funções

O projeto utiliza funções tradicionais, por exemplo:

```js
function calcularCompatibilidade() {
}
```

e também arrow functions:

```js
(vaga) => {
}
```

As duas formas aparecem em situações diferentes ao longo do código.

---

# Objetos

O candidato é representado como objeto.

As vagas também utilizam objetos.

Exemplo:

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

---

# Arquitetura cliente-servidor

O projeto não utiliza um servidor real nem uma API externa.

A comunicação é simulada com JavaScript.

O fluxo conceitual é:

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

O atraso com `setTimeout()` representa o tempo que poderia existir em uma comunicação real.

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
mini-projeto-ifsc/
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
- do acompanhamento do desenvolvimento.

Assim, além do quadro Trello público, o repositório mantém evidências visuais do processo de organização.

---

# Organização pelo Kanban

O projeto foi organizado utilizando Trello.

As colunas principais foram:

```text
Backlog
A Fazer
Em Andamento
Concluído
```

Também foram criadas áreas relacionadas às diferentes etapas do projeto.

O Kanban foi atualizado durante o desenvolvimento, acompanhando o trabalho efetivamente realizado.

---

# Etapas do projeto

O desenvolvimento foi dividido em etapas.

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

Isso facilita a interpretação do percentual.

---

## Melhor vaga

É escolhida a vaga com maior percentual de compatibilidade.

Em caso de empate, permanece a primeira vaga encontrada.

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

Minha participação envolveu explicar conceitos, discutir alternativas, revisar trechos de código, apoiar a organização das etapas e auxiliar na documentação.

As decisões finais, testes, execução do código e condução do projeto foram realizados pelo autor.

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
- aplicação em React.

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
- cálculo de compatibilidade;
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
- possíveis melhorias futuras.

---

## Link do vídeo

**PENDENTE — adicionar após a gravação.**

---

# Links do projeto

## Repositório no GitHub

https://github.com/Clovis-Mariano-Costa/mini-projeto-ifsc

---

## GitHub Pages

https://clovis-mariano-costa.github.io/mini-projeto-ifsc/

> Observação: a execução interativa completa do sistema utiliza Node.js e `prompt-sync`, portanto deve ser realizada pelo terminal com `node skillmatch.js`.

---

## Kanban no Trello

https://trello.com/b/3ZZNHAub/mini-projeto-ifsc

---

# Autor

**Clovis Mariano da Costa**

Mini-Projeto Avaliativo do Módulo 01  
Programação Front-End React — IFSC

---

# Colaboração técnica, educacional e documental

**ChatGPT — GPT-5.6 Sol**  
**OpenAI**

Apoio durante o estudo, desenvolvimento, revisão, documentação e organização do SkillMatch JS.

---

## Situação final

```text
SISTEMA CONCLUÍDO
```

Pendência:

```text
Adicionar somente o link do vídeo de apresentação.
```

---

**SkillMatch JS — Mini-Projeto Avaliativo — IFSC**
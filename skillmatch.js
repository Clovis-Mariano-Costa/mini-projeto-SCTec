/*
 * ============================================================
 * SKILLMATCH JS
 * Mini-Projeto Avaliativo - Módulo 01
 * Programação Front-End React - IFSC
 * ============================================================
 *
 * Este arquivo contém a lógica principal do projeto SkillMatch JS.
 *
 * O objetivo do sistema é comparar as habilidades de uma pessoa
 * candidata com os requisitos de vagas fictícias.
 *
 * O programa analisa:
 * - habilidades que o candidato possui;
 * - requisitos exigidos pelas vagas;
 * - habilidades faltantes;
 * - percentual de compatibilidade técnica;
 * - classificação da compatibilidade;
 * - bônus de experiência profissional;
 * - pontuação final;
 * - vaga com maior pontuação;
 * - recomendação de estudo.
 *
 * Autor: Clovis Mariano da Costa
 * Status: Sistema concluído - vídeo de apresentação pendente
 */


/*
 * ============================================================
 * PERFIL DO CANDIDATO
 * ============================================================
 */

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


/*
 * ============================================================
 * VAGAS
 * ============================================================
 */

const vagas = [
    {
        tituloVaga: "Desenvolvedor Front-End Júnior",
        empresa: "Tech Namor Solutions Ltda.",
        modalidade: "Remoto",
        localizacao: "Florianópolis/SC",
        requisitos: [
            { habilidade: "HTML", peso: 25 },
            { habilidade: "CSS", peso: 25 },
            { habilidade: "JavaScript", peso: 50 }
        ],
        salario: 3500
    },

    {
        tituloVaga: "Analista de Sistemas",
        empresa: "Inovação Digital e Comportamental Ltda.",
        modalidade: "Remoto",
        localizacao: "Florianópolis/SC",
        requisitos: [
            { habilidade: "HTML", peso: 20 },
            { habilidade: "CSS", peso: 20 },
            { habilidade: "JavaScript", peso: 40 },
            { habilidade: "Git", peso: 20 }
        ],
        salario: 4500
    },

    {
        tituloVaga: "Desenvolvedor Front-End Júnior",
        empresa: "CodeWave Sistemas Ltda.",
        modalidade: "Remoto",
        localizacao: "Florianópolis/SC",
        requisitos: [
            { habilidade: "HTML", peso: 15 },
            { habilidade: "CSS", peso: 15 },
            { habilidade: "JavaScript", peso: 30 },
            { habilidade: "React", peso: 25 },
            { habilidade: "TypeScript", peso: 15 }
        ],
        salario: 4500
    }
];


/*
 * ============================================================
 * CLASSES E HERANÇA
 * ============================================================
 */


/*
 * ============================================================
 * CLASSE PRINCIPAL
 * ============================================================
 */

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
        return `${this.tituloVaga} - ${this.empresa} - ${this.modalidade} - R$ ${this.salario}`;
    }
}


/*
 * ============================================================
 * CLASSE FILHA
 * ============================================================
 */

class VagaFrontEnd extends Vaga {

    constructor(
        tituloVaga,
        empresa,
        modalidade,
        localizacao,
        requisitos,
        salario,
        frameworkPrincipal
    ) {

        super(
            tituloVaga,
            empresa,
            modalidade,
            localizacao,
            requisitos,
            salario
        );

        this.frameworkPrincipal = frameworkPrincipal;
    }

    exibirTecnologiaPrincipal() {
        return `Tecnologia principal da vaga: ${this.frameworkPrincipal}`;
    }
}


/*
 * ============================================================
 * INSTÂNCIA DA CLASSE FILHA
 * ============================================================
 */

const vagaJus9 = new VagaFrontEnd(
    "Desenvolvedor Front-End Júnior",
    "Jus 9 Tecnologia Jurídica",
    "Remoto",
    "São José/SC",
    [
        { habilidade: "HTML", peso: 25 },
        { habilidade: "CSS", peso: 25 },
        { habilidade: "JavaScript", peso: 50 }
    ],
    5250,
    "JavaScript"
);

vagas.push(vagaJus9);


/*
 * ============================================================
 * CÁLCULO DE COMPATIBILIDADE TÉCNICA
 * ============================================================
 *
 * A compatibilidade técnica permanece entre 0% e 100%.
 *
 * Cada habilidade possui um peso.
 *
 * Fórmula:
 *
 * compatibilidade =
 * (pontos obtidos / peso total da vaga) * 100
 *
 * O bônus de experiência NÃO altera este percentual.
 * Ele será acrescentado separadamente na pontuação final.
 */

function calcularCompatibilidade(
    candidato,
    vaga
) {

    const pesoTotal = vaga.requisitos.reduce(
        (total, requisito) => {
            return total + requisito.peso;
        },
        0
    );

    const pontosObtidos = vaga.requisitos.reduce(
        (total, requisito) => {

            const possuiHabilidade =
                candidato.habilidades.includes(
                    requisito.habilidade
                );

            if (possuiHabilidade) {
                return total + requisito.peso;
            }

            return total;
        },
        0
    );

    const percentual =
        (pontosObtidos / pesoTotal) * 100;

    return percentual;
}


/*
 * ============================================================
 * BÔNUS DE EXPERIÊNCIA PROFISSIONAL
 * ============================================================
 *
 * A experiência profissional entra como um bônus.
 *
 * Ela não modifica o percentual técnico de 0 a 100%.
 *
 * Tabela:
 *
 * 0 meses             = +0 pontos
 * 1 a 5 meses         = +5 pontos
 * 6 a 11 meses        = +10 pontos
 * 12 a 23 meses       = +15 pontos
 * 24 a 47 meses       = +21 pontos
 * 48 meses ou mais    = +27 pontos
 */

function calcularBonusExperiencia(
    tempoExperienciaMeses
) {

    if (tempoExperienciaMeses >= 48) {

        return 27;

    } else if (tempoExperienciaMeses >= 24) {

        return 21;

    } else if (tempoExperienciaMeses >= 12) {

        return 15;

    } else if (tempoExperienciaMeses >= 6) {

        return 10;

    } else if (tempoExperienciaMeses >= 1) {

        return 5;

    } else {

        return 0;
    }
}


/*
 * ============================================================
 * PONTUAÇÃO FINAL
 * ============================================================
 *
 * A pontuação final é:
 *
 * compatibilidade técnica + bônus de experiência
 *
 * Exemplo:
 *
 * Compatibilidade técnica: 100%
 * Bônus de experiência: +27 pontos
 * Pontuação final: 127 pontos
 *
 * A pontuação final pode ultrapassar 100.
 */

function calcularPontuacaoFinal(
    candidato,
    vaga
) {

    const compatibilidadeTecnica =
        calcularCompatibilidade(
            candidato,
            vaga
        );

    const bonusExperiencia =
        calcularBonusExperiencia(
            candidato.tempoExperienciaMeses
        );

    const pontuacaoFinal =
        compatibilidadeTecnica +
        bonusExperiencia;

    return pontuacaoFinal;
}


/*
 * ============================================================
 * CLASSIFICAÇÃO DA COMPATIBILIDADE
 * ============================================================
 *
 * A classificação continua baseada somente na
 * COMPATIBILIDADE TÉCNICA.
 *
 * 80 a 100 = Alta
 * 50 a 79  = Média
 * 0 a 49   = Baixa
 */

function classificarCompatibilidade(
    percentual
) {

    if (percentual >= 80) {

        return "Alta compatibilidade";

    } else if (percentual >= 50) {

        return "Média compatibilidade";

    } else {

        return "Baixa compatibilidade";
    }
}


// Testes manuais da classificação
// console.log(classificarCompatibilidade(100));
// console.log(classificarCompatibilidade(60));
// console.log(classificarCompatibilidade(30));


/*
 * ============================================================
 * HABILIDADES FALTANTES
 * ============================================================
 */

function identificarHabilidadesFaltantes(
    candidato,
    vaga
) {

    const habilidadesFaltantes =
        vaga.requisitos.filter(
            (requisito) => {

                return !candidato.habilidades.includes(
                    requisito.habilidade
                );
            }
        );

    return habilidadesFaltantes;
}


/*
 * ============================================================
 * MELHOR VAGA
 * ============================================================
 *
 * A melhor vaga passa a considerar a pontuação final:
 *
 * compatibilidade técnica + bônus de experiência.
 *
 * Para um mesmo candidato, o bônus de experiência é igual
 * em todas as vagas, mas ele agora faz parte formalmente
 * da pontuação utilizada pelo sistema.
 *
 * Em caso de empate, permanece a primeira vaga encontrada.
 */

function encontrarMelhorVaga(
    candidato,
    vagas
) {

    const melhorVaga = vagas.reduce(
        (melhor, vagaAtual) => {

            const pontuacaoAtual =
                calcularPontuacaoFinal(
                    candidato,
                    vagaAtual
                );

            const pontuacaoMelhor =
                calcularPontuacaoFinal(
                    candidato,
                    melhor
                );

            if (
                pontuacaoAtual >
                pontuacaoMelhor
            ) {
                return vagaAtual;
            }

            return melhor;
        }
    );

    return melhorVaga;
}


/*
 * ============================================================
 * RECOMENDAÇÃO DE ESTUDO
 * ============================================================
 *
 * O critério permanece:
 *
 * recomendar a habilidade faltante de maior peso.
 */

function criarRecomendacaoEstudo(
    candidato,
    vaga
) {

    const habilidadesFaltantes =
        identificarHabilidadesFaltantes(
            candidato,
            vaga
        );

    if (
        habilidadesFaltantes.length === 0
    ) {
        return "O candidato já possui todas as habilidades exigidas pela vaga.";
    }

    const habilidadePrioritaria =
        habilidadesFaltantes.reduce(
            (
                maisImportante,
                habilidadeAtual
            ) => {

                if (
                    habilidadeAtual.peso >
                    maisImportante.peso
                ) {
                    return habilidadeAtual;
                }

                return maisImportante;
            }
        );

    return `Priorize o estudo de ${habilidadePrioritaria.habilidade}, pois essa habilidade possui peso ${habilidadePrioritaria.peso} nesta vaga.`;
}


/*
 * ============================================================
 * RESULTADOS DE COMPATIBILIDADE
 * ============================================================
 *
 * Cada resultado agora contém:
 *
 * - compatibilidade técnica;
 * - classificação;
 * - habilidades faltantes;
 * - bônus de experiência;
 * - pontuação final.
 */

function gerarResultadosCompatibilidade(
    candidato,
    vagas
) {

    return vagas.map(
        (vaga) => {

            const percentual =
                calcularCompatibilidade(
                    candidato,
                    vaga
                );

            const classificacao =
                classificarCompatibilidade(
                    percentual
                );

            const habilidadesFaltantes =
                identificarHabilidadesFaltantes(
                    candidato,
                    vaga
                );

            const bonusExperiencia =
                calcularBonusExperiencia(
                    candidato.tempoExperienciaMeses
                );

            const pontuacaoFinal =
                calcularPontuacaoFinal(
                    candidato,
                    vaga
                );

            return {
                empresa: vaga.empresa,
                tituloVaga: vaga.tituloVaga,
                percentual: percentual,
                classificacao: classificacao,
                habilidadesFaltantes: habilidadesFaltantes,
                bonusExperiencia: bonusExperiencia,
                pontuacaoFinal: pontuacaoFinal
            };
        }
    );
}


/*
 * ============================================================
 * CLOSURE
 * ============================================================
 */

function criarContadorAnalises() {

    let totalAnalises = 0;

    return function () {

        totalAnalises++;

        return totalAnalises;
    };
}

const contarAnalise =
    criarContadorAnalises();


/*
 * ============================================================
 * CALLBACK
 * ============================================================
 */

function analisarVaga(
    candidato,
    vaga,
    callback
) {

    const percentual =
        calcularCompatibilidade(
            candidato,
            vaga
        );

    const classificacao =
        classificarCompatibilidade(
            percentual
        );

    const bonusExperiencia =
        calcularBonusExperiencia(
            candidato.tempoExperienciaMeses
        );

    const pontuacaoFinal =
        calcularPontuacaoFinal(
            candidato,
            vaga
        );

    const numeroAnalise =
        contarAnalise();

    callback(
        vaga,
        percentual,
        classificacao,
        bonusExperiencia,
        pontuacaoFinal,
        numeroAnalise
    );
}


function exibirResultadoVaga(
    vaga,
    percentual,
    classificacao,
    bonusExperiencia,
    pontuacaoFinal,
    numeroAnalise
) {

    console.log(
        `Análise ${numeroAnalise}: ${vaga.empresa}`
    );

    console.log(
        `Compatibilidade técnica: ${percentual}%`
    );

    console.log(
        `Classificação: ${classificacao}`
    );

    console.log(
        `Bônus de experiência: +${bonusExperiencia} pontos`
    );

    console.log(
        `Pontuação final: ${pontuacaoFinal} pontos`
    );
}


/*
 * ============================================================
 * FUNÇÃO DE EXIBIÇÃO DO HISTÓRICO
 * ============================================================
 */

function exibirHistorico(
    candidatoAnalisado,
    vagasAnalisadas,
    titulo = "SKILLMATCH JS"
) {

    console.log(
        "\n=============================="
    );

    console.log(
        `        ${titulo}`
    );

    console.log(
        "==============================\n"
    );


    /*
     * ========================================================
     * DADOS DO CANDIDATO
     * ========================================================
     */

    console.log(
        `Candidato: ${candidatoAnalisado.nome}`
    );

    console.log(
        `Área de interesse: ${candidatoAnalisado.areaInteresse}`
    );

    console.log(
        `Experiência profissional: ${candidatoAnalisado.tempoExperienciaMeses} meses`
    );

    console.log(
        `Habilidades: ${candidatoAnalisado.habilidades.join(", ")}`
    );


    /*
     * ========================================================
     * EXIBIÇÃO DAS VAGAS
     * ========================================================
     */

    console.log(
        "\n=== VAGAS CADASTRADAS ===\n"
    );

    for (
        let i = 0;
        i < vagasAnalisadas.length;
        i++
    ) {

        console.log(
            `${i + 1}. ${vagasAnalisadas[i].tituloVaga} - ${vagasAnalisadas[i].empresa}`
        );
    }


    /*
     * ========================================================
     * RESULTADOS DE COMPATIBILIDADE
     * ========================================================
     */

    console.log(
        "\n=== RESULTADOS DE COMPATIBILIDADE ===\n"
    );

    const resultadosCompatibilidade =
        gerarResultadosCompatibilidade(
            candidatoAnalisado,
            vagasAnalisadas
        );

    resultadosCompatibilidade.forEach(
        (resultado) => {

            console.log(
                `Empresa: ${resultado.empresa}`
            );

            console.log(
                `Vaga: ${resultado.tituloVaga}`
            );

            console.log(
                `Compatibilidade técnica: ${resultado.percentual}%`
            );

            console.log(
                `Classificação: ${resultado.classificacao}`
            );

            console.log(
                `Bônus de experiência: +${resultado.bonusExperiencia} pontos`
            );

            console.log(
                `Pontuação final: ${resultado.pontuacaoFinal} pontos`
            );


            /*
             * =================================================
             * HABILIDADES FALTANTES POR VAGA
             * =================================================
             */

            if (
                resultado.habilidadesFaltantes.length === 0
            ) {

                console.log(
                    "Habilidades faltantes: nenhuma"
                );

            } else {

                const nomesHabilidadesFaltantes =
                    resultado.habilidadesFaltantes.map(
                        (requisito) => {
                            return requisito.habilidade;
                        }
                    );

                console.log(
                    `Habilidades faltantes: ${nomesHabilidadesFaltantes.join(", ")}`
                );
            }

            console.log(
                "------------------------------"
            );
        }
    );


    /*
     * ========================================================
     * MELHOR VAGA
     * ========================================================
     */

    const melhorVaga =
        encontrarMelhorVaga(
            candidatoAnalisado,
            vagasAnalisadas
        );

    const melhorCompatibilidade =
        calcularCompatibilidade(
            candidatoAnalisado,
            melhorVaga
        );

    const melhorBonus =
        calcularBonusExperiencia(
            candidatoAnalisado.tempoExperienciaMeses
        );

    const melhorPontuacao =
        calcularPontuacaoFinal(
            candidatoAnalisado,
            melhorVaga
        );

    console.log(
        "\n=== MELHOR VAGA ===\n"
    );

    console.log(
        `${melhorVaga.tituloVaga} - ${melhorVaga.empresa}`
    );

    console.log(
        `Compatibilidade técnica: ${melhorCompatibilidade}%`
    );

    console.log(
        `Bônus de experiência: +${melhorBonus} pontos`
    );

    console.log(
        `Pontuação final: ${melhorPontuacao} pontos`
    );


    /*
     * ========================================================
     * RECOMENDAÇÃO DE ESTUDO
     * ========================================================
     *
     * Mantemos a CodeWave como vaga de referência para a
     * recomendação porque ela possui React e TypeScript entre
     * seus requisitos e permite demonstrar a identificação
     * de habilidades faltantes.
     */

    const vagaParaEstudo =
        vagasAnalisadas[2];

    const recomendacao =
        criarRecomendacaoEstudo(
            candidatoAnalisado,
            vagaParaEstudo
        );

    console.log(
        "\n=== RECOMENDAÇÃO DE ESTUDO ===\n"
    );

    console.log(
        `Vaga analisada: ${vagaParaEstudo.tituloVaga} - ${vagaParaEstudo.empresa}`
    );

    console.log(
        recomendacao
    );


    /*
     * ========================================================
     * CALLBACK
     * ========================================================
     */

    console.log(
        "\n=== ANÁLISE COM CALLBACK ===\n"
    );

    analisarVaga(
        candidatoAnalisado,
        melhorVaga,
        exibirResultadoVaga
    );
}


/*
 * ============================================================
 * HISTÓRICO INICIAL
 * ============================================================
 */

exibirHistorico(
    candidato,
    vagas,
    "SKILLMATCH JS"
);


/*
 * ============================================================
 * DEMONSTRAÇÃO DE CLASSE E HERANÇA
 * ============================================================
 */

console.log(
    "\n=== CLASSE E HERANÇA ===\n"
);

console.log(
    vagaJus9.exibirResumo()
);

console.log(
    vagaJus9.exibirTecnologiaPrincipal()
);


/*
 * ============================================================
 * PROMISE E ASYNC/AWAIT
 * ============================================================
 */


/*
 * ============================================================
 * PROMISE
 * ============================================================
 */

function carregarVagas() {

    return new Promise(
        (resolve, reject) => {

            setTimeout(
                () => {

                    /*
                     * Altere para false
                     * para testar o tratamento de erro.
                     */

                    const carregamentoComSucesso =
                        true;

                    if (
                        carregamentoComSucesso
                    ) {

                        resolve(vagas);

                    } else {

                        reject(
                            "Erro ao carregar as vagas."
                        );
                    }

                },
                2000
            );
        }
    );
}


/*
 * ============================================================
 * FUNÇÃO ASYNC
 * ============================================================
 */

async function iniciarCarregamento() {

    console.log(
        "\n=== CARREGAMENTO ASSÍNCRONO ===\n"
    );

    try {

        const vagasCarregadas =
            await carregarVagas();

        console.log(
            "Vagas carregadas com sucesso."
        );

        console.log(
            `Total de vagas carregadas: ${vagasCarregadas.length}`
        );

    } catch (erro) {

        console.log(
            "Ocorreu um erro:",
            erro
        );
    }
}


/*
 * ============================================================
 * ETAPA 5 - PROMPT DO USUÁRIO
 * ============================================================
 */


/*
 * ============================================================
 * IMPORTAÇÃO DO PROMPT-SYNC
 * ============================================================
 */

const prompt =
    require("prompt-sync")();


/*
 * ============================================================
 * FUNÇÃO PARA CONVERTER E VALIDAR NÚMEROS
 * ============================================================
 */

function solicitarNumero(
    mensagem
) {

    let numero;

    do {

        const resposta =
            prompt(mensagem);

        numero =
            Number(resposta);

        if (
            Number.isNaN(numero)
        ) {

            console.log(
                "Digite um valor numérico válido."
            );
        }

    } while (
        Number.isNaN(numero)
    );

    return numero;
}


/*
 * ============================================================
 * CADASTRO DE CANDIDATO
 * ============================================================
 */

function cadastrarCandidato() {

    console.log(
        "\n=== CADASTRO DE CANDIDATO ===\n"
    );

    const nome =
        prompt(
            "Nome do candidato: "
        );

    const areaInteresse =
        prompt(
            "Área de interesse: "
        );

    const habilidadesDigitadas =
        prompt(
            "Habilidades separadas por vírgula: "
        );

    const tempoExperienciaMeses =
        solicitarNumero(
            "Tempo de experiência profissional em meses: "
        );

    const habilidades =
        habilidadesDigitadas
            .split(",")
            .map(
                (habilidade) =>
                    habilidade.trim()
            )
            .filter(
                (habilidade) =>
                    habilidade !== ""
            );

    const novoCandidato = {

        nome:
            nome,

        areaInteresse:
            areaInteresse,

        habilidades:
            habilidades,

        tempoExperienciaMeses:
            tempoExperienciaMeses
    };

    console.log(
        "\nCandidato cadastrado com sucesso."
    );

    console.log(
        `Bônus de experiência: +${calcularBonusExperiencia(tempoExperienciaMeses)} pontos`
    );

    return novoCandidato;
}


/*
 * ============================================================
 * CADASTRO DE VAGA
 * ============================================================
 */

function cadastrarVaga() {

    console.log(
        "\n=== CADASTRO DE VAGA ===\n"
    );

    const tituloVaga =
        prompt(
            "Título da vaga: "
        );

    const empresa =
        prompt(
            "Empresa: "
        );

    const modalidade =
        prompt(
            "Modalidade: "
        );

    const localizacao =
        prompt(
            "Localização: "
        );

    const salario =
        solicitarNumero(
            "Salário: "
        );

    let requisitosValidos =
        false;

    let requisitos = [];

    while (
        !requisitosValidos
    ) {

        const habilidadesDigitadas =
            prompt(
                "Habilidades exigidas separadas por vírgula: "
            );

        const pesosDigitados =
            prompt(
                "Pesos correspondentes separados por vírgula: "
            );

        const habilidades =
            habilidadesDigitadas
                .split(",")
                .map(
                    (habilidade) =>
                        habilidade.trim()
                )
                .filter(
                    (habilidade) =>
                        habilidade !== ""
                );

        const pesos =
            pesosDigitados
                .split(",")
                .map(
                    (peso) =>
                        Number(
                            peso.trim()
                        )
                );

        const quantidadeCompativel =
            habilidades.length ===
            pesos.length;

        const pesosNumericos =
            pesos.every(
                (peso) =>
                    !Number.isNaN(peso)
            );

        const somaPesos =
            pesos.reduce(
                (total, peso) =>
                    total + peso,
                0
            );

        if (
            !quantidadeCompativel
        ) {

            console.log(
                "\nA quantidade de habilidades deve ser igual à quantidade de pesos."
            );

        } else if (
            !pesosNumericos
        ) {

            console.log(
                "\nTodos os pesos devem ser números."
            );

        } else if (
            somaPesos !== 100
        ) {

            console.log(
                `\nOs pesos devem somar 100. Soma atual: ${somaPesos}.`
            );

        } else {

            requisitos =
                habilidades.map(
                    (
                        habilidade,
                        indice
                    ) => {

                        return {
                            habilidade:
                                habilidade,

                            peso:
                                pesos[indice]
                        };
                    }
                );

            requisitosValidos =
                true;
        }
    }

    const novaVaga =
        new Vaga(
            tituloVaga,
            empresa,
            modalidade,
            localizacao,
            requisitos,
            salario
        );

    vagas.push(
        novaVaga
    );

    console.log(
        "\nVaga cadastrada com sucesso."
    );

    return novaVaga;
}


/*
 * ============================================================
 * MENU INICIAL
 * ============================================================
 */

console.log(
    "\n=============================="
);

console.log(
    "     PROMPT DO USUÁRIO"
);

console.log(
    "==============================\n"
);

console.log(
    "O que você deseja fazer?\n"
);

console.log(
    "1 - Inserir candidato"
);

console.log(
    "2 - Inserir vaga"
);

console.log(
    "0 - Continuar sem inserir dados"
);

const opcaoUsuario =
    prompt(
        "\nEscolha uma opção: "
    );


/*
 * ============================================================
 * ESCOLHA DA OPERAÇÃO
 * ============================================================
 */

if (
    opcaoUsuario === "1"
) {

    const novoCandidato =
        cadastrarCandidato();

    console.log(
        "\nCadastro concluído."
    );

    console.log(
        "A seguir será exibido o histórico atualizado com o novo candidato."
    );

    exibirHistorico(
        novoCandidato,
        vagas,
        "HISTÓRICO ATUALIZADO"
    );

} else if (
    opcaoUsuario === "2"
) {

    const novaVaga =
        cadastrarVaga();

    console.log(
        "\nCadastro concluído."
    );

    console.log(
        `Nova vaga: ${novaVaga.tituloVaga} - ${novaVaga.empresa}`
    );

    console.log(
        "A seguir será exibido o histórico atualizado com a nova vaga."
    );

    exibirHistorico(
        candidato,
        vagas,
        "HISTÓRICO ATUALIZADO"
    );

} else if (
    opcaoUsuario === "0"
) {

    console.log(
        "\nNenhum novo cadastro foi realizado."
    );

    console.log(
        "O histórico inicial permanece válido."
    );

} else {

    console.log(
        "\nOpção inválida."
    );

    console.log(
        "Nenhum dado foi alterado."
    );
}


/*
 * ============================================================
 * EXECUÇÃO ASSÍNCRONA
 * ============================================================
 */

iniciarCarregamento();

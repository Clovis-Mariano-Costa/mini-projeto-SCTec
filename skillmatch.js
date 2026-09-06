/*
 * SkillMatch JS
 * Mini-Projeto Avaliativo - Módulo 01
 * Programação Front-End React - IFSC
 *
 * Este arquivo contém a lógica principal do projeto SkillMatch JS.
 *
 * O objetivo do sistema é comparar as habilidades de uma pessoa candidata
 * com os requisitos de vagas fictícias para Front-End Júnior.
 *
 * O programa deverá analisar:
 * - habilidades que o candidato possui;
 * - requisitos exigidos pelas vagas;
 * - habilidades faltantes;
 * - percentual de compatibilidade;
 * - classificação da compatibilidade;
 * - vaga com maior compatibilidade;
 * - recomendação de estudo.
 *
 * Autor: Clovis Mariano da Costa
 * Status: Em desenvolvimento
 */

// ==============================
// PERFIL DO CANDIDATO
// ==============================

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
tempoExperienciaMeses: 0 // experiência profissional formal
};

// ==============================
// VAGAS
// ==============================

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

// ==============================
// CLASSES E HERANÇA
// ==============================

// ==============================
// CLASSE PRINCIPAL
// ==============================

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

// ==============================
// CLASSE FILHA
// ==============================

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

// ==============================
// INSTÂNCIA DA CLASSE FILHA
// ==============================

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

// ==============================
// CÁLCULO DE COMPATIBILIDADE
// ==============================

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

// ==============================
// CLASSIFICAÇÃO DA COMPATIBILIDADE
// ==============================

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

// ==============================
// HABILIDADES FALTANTES
// ==============================

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

// ==============================
// MELHOR VAGA
// ==============================

function encontrarMelhorVaga(
    candidato,
    vagas
) {

    const melhorVaga = vagas.reduce(
        (melhor, vagaAtual) => {

            const compatibilidadeAtual =
                calcularCompatibilidade(
                    candidato,
                    vagaAtual
                );

            const compatibilidadeMelhor =
                calcularCompatibilidade(
                    candidato,
                    melhor
                );

            if (
                compatibilidadeAtual >
                compatibilidadeMelhor
            ) {
                return vagaAtual;
            }

            return melhor;
        }
    );

    return melhorVaga;
}

// ==============================
// RECOMENDAÇÃO DE ESTUDO
// ==============================

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

// ==============================
// RESULTADOS DE COMPATIBILIDADE
// ==============================

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

            return {
                empresa: vaga.empresa,
                tituloVaga:
                    vaga.tituloVaga,
                percentual:
                    percentual,
                classificacao:
                    classificacao
            };
        }
    );
}

// ==============================
// CLOSURE
// ==============================

function criarContadorAnalises() {

    let totalAnalises = 0;

    return function () {

        totalAnalises++;

        return totalAnalises;
    };
}

const contarAnalise =
    criarContadorAnalises();

// ==============================
// CALLBACK
// ==============================

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

    const numeroAnalise =
        contarAnalise();

    callback(
        vaga,
        percentual,
        classificacao,
        numeroAnalise
    );
}

function exibirResultadoVaga(
    vaga,
    percentual,
    classificacao,
    numeroAnalise
) {

    console.log(
        `Análise ${numeroAnalise}: ${vaga.empresa} - ${percentual}% - ${classificacao}`
    );
}

// ==============================
// FUNÇÃO DE EXIBIÇÃO DO HISTÓRICO
// ==============================

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

    // ==============================
    // EXIBIÇÃO DAS VAGAS
    // ==============================

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

    // ==============================
    // EXIBIÇÃO DOS RESULTADOS
    // ==============================

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
                `${resultado.empresa} - ${resultado.percentual}% - ${resultado.classificacao}`
            );
        }
    );

    // ==============================
    // MELHOR VAGA
    // ==============================

    const melhorVaga =
        encontrarMelhorVaga(
            candidatoAnalisado,
            vagasAnalisadas
        );

    console.log(
        "\n=== MELHOR VAGA ===\n"
    );

    console.log(
        `${melhorVaga.tituloVaga} - ${melhorVaga.empresa}`
    );

    // ==============================
    // RECOMENDAÇÃO DE ESTUDO
    // ==============================

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
        recomendacao
    );

    // ==============================
    // CALLBACK
    // ==============================

    console.log(
        "\n=== ANÁLISE COM CALLBACK ===\n"
    );

    analisarVaga(
        candidatoAnalisado,
        melhorVaga,
        exibirResultadoVaga
    );
}
    );
}

// ==============================
// HISTÓRICO INICIAL
// ==============================

exibirHistorico(
    candidato,
    vagas,
    "SKILLMATCH JS"
);
    candidato,
    vagas,
    "SKILLMATCH JS"
);

// ==============================
// DEMONSTRAÇÃO DE CLASSE E HERANÇA
// ==============================

console.log(
    "\n=== CLASSE E HERANÇA ===\n"
);

console.log(
    vagaJus9.exibirResumo()
);

console.log(
    vagaJus9.exibirTecnologiaPrincipal()
);

// ==============================
// PROMISE E ASYNC
// ==============================

// ==============================
// PROMISE
// ==============================

function carregarVagas() {

    return new Promise(
        (resolve, reject) => {

            setTimeout(
                () => {

                    // Altere para false
                    // para testar o erro
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

// ==============================
// FUNÇÃO ASYNC
// ==============================

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

// ==============================
// ETAPA 5 - PROMPT DO USUÁRIO
// ==============================

// ==============================
// IMPORTAÇÃO DO PROMPT-SYNC
// ==============================

const prompt =
    require("prompt-sync")();

// ==============================
// FUNÇÃO PARA CONVERTER NÚMEROS
// ==============================

function solicitarNumero(mensagem) {

    let numero;

    do {

        const resposta =
            prompt(mensagem);

        numero =
            Number(resposta);

        if (Number.isNaN(numero)) {

            console.log(
                "Digite um valor numérico válido."
            );
        }

    } while (
        Number.isNaN(numero)
    );

    return numero;
}

// ==============================
// CADASTRO DE CANDIDATO
// ==============================

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

    return novoCandidato;
}

// ==============================
// CADASTRO DE VAGA
// ==============================

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

// ==============================
// MENU INICIAL
// ==============================

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

// ==============================
// ESCOLHA DA OPERAÇÃO
// ==============================

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

// ==============================
// EXECUÇÃO ASSÍNCRONA
// ==============================

iniciarCarregamento();

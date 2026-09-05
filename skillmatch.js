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
    tempoExperienciaMeses: 0 // em meses - experiência profissional formal

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
// CÁLCULO DE COMPATIBILIDADE
// ==============================

function calcularCompatibilidade(candidato, vaga) {

    const pesoTotal = vaga.requisitos.reduce((total, requisito) => {
        return total + requisito.peso;
    }, 0);

    const pontosObtidos = vaga.requisitos.reduce((total, requisito) => {

        const possuiHabilidade = candidato.habilidades.includes(
            requisito.habilidade
        );

        if (possuiHabilidade) {
            return total + requisito.peso;
        }

        return total;

    }, 0);

    const percentual = (pontosObtidos / pesoTotal) * 100;

    return percentual;
}
// ==============================
// CLASSIFICAÇÃO DA COMPATIBILIDADE
// ==============================

function classificarCompatibilidade(percentual) {

    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

console.log(classificarCompatibilidade(100));
console.log(classificarCompatibilidade(60));
console.log(classificarCompatibilidade(30));




// ==============================
// HABILIDADES FALTANTES
// ==============================

function identificarHabilidadesFaltantes(candidato, vaga) {

    const habilidadesFaltantes = vaga.requisitos.filter((requisito) => {
        return !candidato.habilidades.includes(requisito.habilidade);
    });

    return habilidadesFaltantes;
}

// ==============================
// MELHOR VAGA
// ==============================

function encontrarMelhorVaga(candidato, vagas) {

    const melhorVaga = vagas.reduce((melhor, vagaAtual) => {

        const compatibilidadeAtual = calcularCompatibilidade(
            candidato,
            vagaAtual
        );

        const compatibilidadeMelhor = calcularCompatibilidade(
            candidato,
            melhor
        );

        if (compatibilidadeAtual > compatibilidadeMelhor) {
            return vagaAtual;
        }

        return melhor;

    });

    return melhorVaga;
}

// ==============================
// RECOMENDAÇÃO DE ESTUDO
// ==============================

function criarRecomendacaoEstudo(candidato, vaga) {

    const habilidadesFaltantes = identificarHabilidadesFaltantes(
        candidato,
        vaga
    );

    if (habilidadesFaltantes.length === 0) {
        return "O candidato já possui todas as habilidades exigidas pela vaga.";
    }

    const habilidadePrioritaria = habilidadesFaltantes.reduce(
        (maisImportante, habilidadeAtual) => {

            if (habilidadeAtual.peso > maisImportante.peso) {
                return habilidadeAtual;
            }

            return maisImportante;
        }
    );

    return `Priorize o estudo de ${habilidadePrioritaria.habilidade}, pois essa habilidade possui peso ${habilidadePrioritaria.peso} nesta vaga.`;
}


const recomendacao = criarRecomendacaoEstudo(
    candidato,
    vagas[2]
);

console.log(recomendacao);


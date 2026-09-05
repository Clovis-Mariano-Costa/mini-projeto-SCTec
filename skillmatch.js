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
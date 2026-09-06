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
// COMPATIBILIDADE
// ==============================








// ==============================
// Classes e Heranças
// ==============================








// ==============================
// Promise e Async
// ==============================

// ==============================
// PROMISE
// ==============================

function carregarVagas() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Altere para false para testar o tratamento de erro
            const carregamentoComSucesso = true;

            if (carregamentoComSucesso) {
                resolve(vagas);
            } else {
                reject("Erro ao carregar as vagas.");
            }

        }, 2000);

    });
}


// ==============================
// FUNÇÃO ASYNC
// ==============================

async function iniciarCarregamento() {

    try {

        const vagasCarregadas = await carregarVagas();

        console.log(
            "Vagas carregadas com sucesso:",
            vagasCarregadas
        );

    } catch (erro) {

        console.log(
            "Ocorreu um erro:",
            erro
        );

    }
}

iniciarCarregamento();
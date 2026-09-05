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

console.log(vagaJus9.exibirResumo());
console.log(vagaJus9.exibirTecnologiaPrincipal());


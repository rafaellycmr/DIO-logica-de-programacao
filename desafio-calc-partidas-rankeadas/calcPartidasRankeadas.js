// Chamando as funções
let saldoFinal = pontuacaoJogo(38, 8);
let rankingFinal = rankingJogo(saldoFinal);

console.log(
    "O Herói tem o saldo de " +
        saldoFinal +
        " e está no nível de " +
        rankingFinal
);

function pontuacaoJogo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

function rankingJogo(saldoFinal) {
    let nivel;

    switch (true) {
        case saldoFinal < 10:
            nivel = "Ferro";
            break;
        case saldoFinal >= 10 && saldoFinal <= 20:
            nivel = "Bronze";
            break;
        case saldoFinal > 20 && saldoFinal <= 50:
            nivel = "Prata";
            break;
        case saldoFinal > 50 && saldoFinal <= 80:
            nivel = "Ouro";
            break;
        case saldoFinal > 80 && saldoFinal <= 90:
            nivel = "Diamante";
            break;
        case saldoFinal > 90 && saldoFinal <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return nivel;
}

import { pop, sertanejo, mpb } from "./functions.js";

const nomeJogador = prompt("Bem vindo(a) ao meu Quiz!\nQual é o seu nome?");

let opcao = 4;
let pontuacao = 0;

while (opcao != 0) {
    opcao = parseInt(prompt("Qual tema você deseja jogar?\n1 - Pop\n2 - Sertanejo\n3 - MPB\n0 - Sair"));

    switch (opcao) {
        case 1:
            pontuacao = pop(pontuacao);
            break;
        case 2:
            pontuacao = sertanejo(pontuacao);
            break;
        case 3:
            pontuacao = mpb(pontuacao);
            break;
        case 0:
            alert("Você saiu!");
            break;
        default:
            alert("Digite uma opção válida!");
            break;
    }
}

alert(`Obrigado por jogar, ${nomeJogador}!\nSua pontuação final foi: ${pontuacao}`);
let respostaJogador;

function pop(pontuacao) {
    respostaJogador = prompt("Katy Perry vem dando indícios de um possível novo álbum em 2024.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta.");
    }

    respostaJogador = prompt("Lana Del Rey é considerada uma cantora indie/pop.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta.");
    }

    respostaJogador = prompt("Taylor Swift é a indústria da música.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta. Claro que ela é!");
    }

    return pontuacao;
}

function sertanejo(pontuacao) {
    respostaJogador = prompt("Atualmente, o sertanejo raiz perdeu espaço para o sertanejo universitário.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta.");
    }

    respostaJogador = prompt("Elis Regina é considerada um fenômeno da música sertaneja.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "F") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta. Elis Regina é um grande nome da Música Popular Brasileira (MPB).");
    }

    respostaJogador = prompt("A dupla Simone e Simaria anunciou sua separação no ano de 2022.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta.");
    }

    return pontuacao;
}

function mpb(pontuacao) {
    respostaJogador = prompt("A cantora Rita Lee, um grande nome da Música Popular Brasileira (MPB), faleceu no ano de 2022.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "F") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta. Rita Lee faleceu no ano de 2023.");
    }

    respostaJogador = prompt("Um sucesso do supergrupo Tribalistas é a música 'Doce Infância'.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "F") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta. O nome correto da música é 'Velha Infância'.");
    }

    respostaJogador = prompt("Cazuza é considerado um fenômeno da Música Popular Brasileira (MPB) e, infelizmente, veio a falecer no ano de 1990.\n\nDigite (V) para Verdadeiro ou (F) para falso:");
    if (respostaJogador.toUpperCase() === "V") {
        alert("Resposta correta. Parabéns!");
        pontuacao++;
    } else {
        alert("Resposta incorreta.");
    }

    return pontuacao;
}

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
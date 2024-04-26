// Mostra uma mensagem de boas-vindas em uma janela pop-up.
alert('Boas vindas ao jogo do número secreto');

// Define o número máximo que pode ser escolhido no jogo.
let numeroMaximo = 5000;

// Gera um número aleatório entre 1 e `numeroMaximo` e armazena como o número secreto do jogo.
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Exibe o número secreto no console do navegador para fins de depuração.
console.log(numeroSecreto);

// Declara uma variável para armazenar o chute do jogador.
let chute;

// Inicializa o contador de tentativas como 1.
let tentativas = 1;

// Inicia um loop que continuará enquanto o chute do jogador for diferente do número secreto.
while (chute != numeroSecreto) {
    // Pede ao jogador para inserir um número entre 1 e `numeroMaximo` e armazena o valor na variável `chute`.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Verifica se o chute do jogador é igual ao número secreto.
    if (chute == numeroSecreto) {
        // Se o chute for igual ao número secreto, interrompe o loop.
        break;
    } else {
        // Se o chute do jogador não for igual ao número secreto, executa o bloco de código abaixo.

        // Verifica se o chute do jogador é maior que o número secreto.
        if (chute > numeroSecreto) {
            // Mostra uma mensagem indicando que o número secreto é menor que o chute do jogador.
            alert(`O número secreto é menor que ${chute}`);
        } else {
            // Se o chute do jogador não for maior que o número secreto, executa o bloco de código abaixo.

            // Mostra uma mensagem indicando que o número secreto é maior que o chute do jogador.
            alert(`O número secreto é maior que ${chute}`);
        }
        
        // Incrementa o contador de tentativas.
        tentativas++;
    }
}

// Define a palavra "tentativa" ou "tentativas" com base no número de tentativas feitas.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Mostra uma mensagem parabenizando o jogador por descobrir o número secreto e informa o número de tentativas realizadas.
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


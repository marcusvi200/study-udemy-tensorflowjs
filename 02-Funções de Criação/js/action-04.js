/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("04 - Função Linspace para Iniciar e Terminar Elementos");

function executar() {
    let txt = '';

    const linspace0 = tf.linspace(0, 9, 10);
    const linspace1 = tf.linspace(1, 10, 10);
    const linspace2 = tf.linspace(1, 15, 20);

    SUBSECAO.setAjuda(
        "linspace",
        `Inicializa um tensor de 1 dimensão com a sequência desejada, podendo determinar quantos elementos no intervalo!`
    );

    txt += `<b><i class="text-danger">tf.linspace</i></b>\n`;
    txt += `Linspace 0: \n ${linspace0.toString()} \n\n`;
    txt += `Linspace 1: \n ${linspace1.toString()} \n\n`;
    txt += `Linspace 2: \n ${linspace2.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
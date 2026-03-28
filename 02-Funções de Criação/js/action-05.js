/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("05 - Função Range para Sequências Numéricas Controladas");

function executar() {
    let txt = '';

    const range0 = tf.range(1, 11, 1);
    const range1 = tf.range(0, 21, 2);
    const range2 = tf.range(0, 101, 10);

    SUBSECAO.setAjuda(
        "range",
        `Inicializa um tensor de 1 dimensão com a sequência desejada, podendo determinar salto!`
    );

    txt += `<b><i class="text-danger">tf.range</i></b>\n`;
    txt += `Range 0: \n ${range0.toString()} \n\n`;
    txt += `Range 1: \n ${range1.toString()} \n\n`;
    txt += `Range 2: \n ${range2.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
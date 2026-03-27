/** @type {import('@tensorflow/tfjs')} */
const tf = window.tf;

window.SUBSECAO = "01 - Função Fill para Inicialização de Elementos";

function exibir(str = '') {
    $('#result').text(str);
}

function executar() {
    let txt = '';

    const fill0 = tf.fill([1], 0);
    const fill1 = tf.fill([2, 2], 1);
    const fill2 = tf.fill([2, 2], 2);

    txt += `Fill 1x1: \n ${fill0.toString()} \n\n`;
    txt += `Fill 2x2 com valor 1: \n ${fill1.toString()} \n\n`;
    txt += `Fill 2x2 com valor 2: \n ${fill2.toString()} \n\n`;

    exibir(txt);
}
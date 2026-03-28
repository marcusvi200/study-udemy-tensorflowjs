/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("01 - Função Fill para Inicialização de Elementos");

function executar() {
    let txt = '';

    const fill0 = tf.fill([1], 0);
    const fill1 = tf.fill([2, 2], 1);
    const fill2 = tf.fill([2, 2], 2);

    SUBSECAO.setAjuda(
        "fill",
        `Inicializa um tensor com o respectivo valor!`
    );

    txt += `<b><i class="text-danger">tf.fill</i></b>\n`;
    txt += `Fill 1x1 com valor 0: \n ${fill0.toString()} \n\n`;
    txt += `Fill 2x2 com valor 1: \n ${fill1.toString()} \n\n`;
    txt += `Fill 2x2 com valor 2: \n ${fill2.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
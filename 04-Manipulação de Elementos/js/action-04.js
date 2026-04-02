/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("04 - Invertendo a Posição dos Elementos com Reverse");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2]);
    const reverse = tensor1.reverse();
    SUBSECAO.setAjuda(
        "reverse",
        `Inverte os valores do tensor!`
    );

    txt += `<b><i class="text-danger">tf.tensor.reverse</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `reverse: \n ${reverse.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
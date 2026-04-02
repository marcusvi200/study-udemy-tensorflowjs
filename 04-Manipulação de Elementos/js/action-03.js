/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("03 - Concatenando Tensores em um Tensor Multidimensional com Stack");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2]);
    const tensor2 = tf.tensor([3, 4]);
    const stack = tf.stack([tensor1, tensor2]);
    SUBSECAO.setAjuda(
        "stack",
        `Concatena tensores, e pode construir um tensor de múltipla dimensão!`
    );

    txt += `<b><i class="text-danger">tf.stack</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `stack: \n ${stack.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
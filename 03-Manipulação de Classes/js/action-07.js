/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("07 - Redimensionando Tensores com Reshape e ReshapeAs");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const reshape = tensor1.reshape([2, 2]);
    SUBSECAO.setAjuda(
        "reshape",
        `Altera a dimensão do tensor!`
    );

    txt += `<b><i class="text-danger">tf.tensor.reshape</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `reshape: \n ${reshape.toString()}`;
    txt += `<hr/>`;

    const tensor2 = tf.tensor([[1, 2], [3, 4]]);
    const tensor3 = tf.tensor([1, 2, 3, 4]);
    const reshapeAs = tensor2.reshapeAs(tensor3);
    SUBSECAO.setAjuda(
        "reshapeAs",
        `Copia a dimensão de um tensor para o tensor do contexto!`
    );

    txt += `<b><i class="text-danger">tf.tensor.reshapeAs</i></b>\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `Tensor 3: \n ${tensor3.toString()} \n\n`;
    txt += `reshapeAs: \n ${reshapeAs.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
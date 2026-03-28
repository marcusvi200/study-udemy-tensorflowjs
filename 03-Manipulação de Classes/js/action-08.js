/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("08 - Funções expandDims, Cumsum e Squeeze");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const expandDims = tensor1.expandDims(1);
    SUBSECAO.setAjuda(
        "expandDims",
        `Aumenta a quantidade de dimensões de um tensor!`
    );

    txt += `<b><i class="text-danger">tf.tensor.expandDims</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `expandDims: \n ${expandDims.toString()}`;
    txt += `<hr/>`;

    const tensor2 = tf.tensor([[1], [2], [3], [4]]);
    const squeeze = tensor2.squeeze(1);
    SUBSECAO.setAjuda(
        "squeeze",
        `Diminui a quantidade de dimensões de um tensor!`
    );

    txt += `<b><i class="text-danger">tf.tensor.squeeze</i></b>\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `squeeze: \n ${squeeze.toString()}`;
    txt += `<hr/>`;

    const tensor3 = tf.tensor([1, 2, 3, 4]);
    const cumsum = tensor3.cumsum();
    SUBSECAO.setAjuda(
        "cumsum",
        `Cada elemento do tensor será composto pela soma dos elementos anteriores, com o valor do elemento na posição!`
    );

    txt += `<b><i class="text-danger">tf.tensor.cumsum</i></b>\n`;
    txt += `Tensor 3: \n ${tensor2.toString()} \n\n`;
    txt += `cumsum: \n ${cumsum.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
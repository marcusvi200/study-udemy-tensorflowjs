/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("02 - Concatenando Tensores com o Recurso Concat");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2]);
    const tensor2 = tf.tensor([3, 4]);
    const concat1 = tensor1.concat(tensor2);
    const concat2 = tensor1.concat([tensor1, tensor2]);
    SUBSECAO.setAjuda(
        "concat",
        `Concatena um tensor ao outro, de mesma dimensão!`
    );

    txt += `<b><i class="text-danger">tf.tensor.concat</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `concat 1: \n ${concat1.toString()} \n\n`;
    txt += `concat 2: \n ${concat2.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
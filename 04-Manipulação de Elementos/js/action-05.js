/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("05 - Dividindo um Tensor em Vários Tensores com Split");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    // const [tensor2, tensor3] = tf.split(tensor1, 2, 1);
    const [tensor2, tensor3, tensor4] = tf.split(tensor1, [1, 2, 1], 1);
    SUBSECAO.setAjuda(
        "split",
        `Transforma um único tensor em um ou mais tensores, dependendo da configuração!`
    );

    txt += `<b><i class="text-danger">tf.split</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `split: \n (tensor1, [1, 2, 1], 1) \n\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `Tensor 3: \n ${tensor3.toString()} \n\n`;
    txt += `Tensor 4: \n ${tensor4.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("02 - Convertendo um Tensor Multidimensional para Unidimensional com Flatten");

function executar() {
    let txt = '';

    const tensor2d = tf.tensor([1, 2, 3, 4], [2, 2]);
    const flatten = tensor2d.flatten();
    SUBSECAO.setAjuda(
        "flatten",
        `Converte o tensor em uma dimensão!`
    );

    txt += `<b><i class="text-danger">tf.tensor.flatten</i></b>\n`;
    txt += `Tensor: \n ${tensor2d.toString()} \n\n`;
    txt += `flatten: \n ${flatten.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
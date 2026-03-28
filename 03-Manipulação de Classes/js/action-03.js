/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("03 - Convertendo um Tensor Multidimensional para Unidimensional com as1D");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2]);
    const as1D = tensor1.as1D();
    SUBSECAO.setAjuda(
        "as1D",
        `Converte o tensor em uma dimensão!`
    );

    txt += `<b><i class="text-danger">tf.tensor.as1D</i></b>\n`;
    txt += `Tensor: \n ${tensor1.toString()} \n\n`;
    txt += `as1D: \n ${as1D.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
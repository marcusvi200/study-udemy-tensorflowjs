/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("01 - Transformando um Tensor Unidimensional em Escalar com asScalar");

function executar() {
    let txt = '';

    const tensor1d = tf.tensor([1.5]);
    const asScalar = tensor1d.asScalar();
    SUBSECAO.setAjuda(
        "asScalar",
        `Converte o tensor em escalar!`
    );

    txt += `<b><i class="text-danger">tf.tensor.asScalar</i></b>\n`;
    txt += `Tensor: \n ${tensor1d.toString()} \n\n`;
    txt += `asScalar: \n ${asScalar.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
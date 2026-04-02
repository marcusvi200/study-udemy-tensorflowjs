/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("05 - Conversão de Tipos com a Função asType");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1.5, 2.7, 3.1, 4.8, 5.2, 6.9, 7.3, 8.7]);
    const asType = tensor1.asType('int32');

    SUBSECAO.setAjuda(
        "asType",
        `Converte o tensor em um dos tipos:`,
        '- bool',
        '- complex64',
        '- string',
        '- float32',
        '- int32',
    );

    txt += `<b><i class="text-danger">tf.tensor.asType</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `asType: \n ${asType.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
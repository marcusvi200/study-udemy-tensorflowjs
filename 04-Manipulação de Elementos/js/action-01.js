/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("01 - Inserindo Zeros Antes e Depois dos Elementos com Pad");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const pad = tensor1.pad([[1, 2]]);
    console.log('pad', [[1, 2]]);
    SUBSECAO.setAjuda(
        "pad",
        `Insere zeros no início ou no final, a denpender do que foi configurado!`
    );

    txt += `<b><i class="text-danger">tf.tensor.pad</i></b>\n`;
    txt += `Tensor: \n ${tensor1.toString()} \n\n`;
    txt += `pad: \n ${pad.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
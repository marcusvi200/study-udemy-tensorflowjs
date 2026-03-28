/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("09 - Clonando Tensores Através do Recurso Clone");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const clone = tf.clone(tensor1);
    SUBSECAO.setAjuda(
        "tf.clone",
        `Clona tensores, gerando novo tensor na memória!`
    );

    txt += `<b><i class="text-danger">tf.clone</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `clone: \n ${clone.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
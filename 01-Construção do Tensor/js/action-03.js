/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("03 - Tensor Padrão do TensorFlow");

function executar() {
    let txt = '';

    const tensor0 = tf.tensor([1, 2, 3, 4]);
    const tensor1 = tf.tensor([[1, 2], [3, 4]]);
    const tensor2 = tf.tensor([1, 2, 3, 4], [2, 2]);

    SUBSECAO.setAjuda(
        "tensor",
        `Inicializa um tensor padrão, podendo ser de até 6 dimensões, permitindo informar a dimensão ou permitindo que o tensorflow "descubra" qual foi repassado!`
    );

    tensor0.print();
    tensor1.print();
    tensor2.print();

    txt += `<b><i class="text-danger">tf.tensor</i></b>\n`;
    txt += `Tensor Padrão de 1 Dimensão: \n ${tensor0.toString()} \n\n`;
    txt += `Tensor Padrão de 2 Dimensões: \n ${tensor1.toString()} \n\n`;
    txt += `Tensor Padrão com Dimensionalidade: \n ${tensor2.toString()} \n\n`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
/** @type {import('@tensorflow/tfjs')} */
const tf = window.tf;

window.SUBSECAO = "03 - Tensor Padrão do TensorFlow";

function exibir(str = '') {
    $('#result').text(str);
}

function executar() {
    let txt = '';

    const tensor0 = tf.tensor([1, 2, 3, 4]);
    const tensor1 = tf.tensor([[1, 2], [3, 4]]);
    const tensor2 = tf.tensor([1, 2, 3, 4], [2, 2]);

    tensor0.print();
    tensor1.print();
    tensor2.print();

    txt += `Tensor Padrão de 1 Dimensão: \n ${tensor0.toString()} \n\n`;
    txt += `Tensor Padrão de 2 Dimensões: \n ${tensor1.toString()} \n\n`;
    txt += `Tensor Padrão com Dimensionalidade: \n ${tensor2.toString()} \n\n`;

    exibir(txt);
}
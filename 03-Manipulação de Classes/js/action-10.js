/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("10 - Convertendo Classes do TensorFlow para Variáveis do JavaScript");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const tensor2 = tf.tensor([[1, 2], [3, 4]]);
    const scalar1 = tf.scalar(2);

    const dataSync1 = tensor1.dataSync();
    const dataSync2 = tensor2.dataSync();
    const dataSync3 = scalar1.dataSync();

    SUBSECAO.setAjuda(
        "dataSync",
        `Converte o tensor para o formato de objeto, com chave referente a posição, e valor!`
    );

    const tensor4 = tf.tensor([1, 2, 3, 4]);
    const tensor5 = tf.tensor([[1, 2], [3, 4]]);
    const scalar2 = tf.scalar(2);

    const arraySync4 = tensor4.arraySync();
    const arraySync5 = tensor5.arraySync();
    const arraySync6 = scalar2.arraySync();

    SUBSECAO.setAjuda(
        "arraySync",
        `Converte o tensor para o formato de array!`
    );

    console.log('tensor1d -> dataSync', dataSync1);
    console.log('tensor2d -> dataSync', dataSync2);
    console.log('scalar -> dataSync', dataSync3);

    console.log('tensor1d -> arraySync', arraySync4);
    console.log('tensor2d -> arraySync', arraySync5);
    console.log('scalar -> arraySync', arraySync6);

    txt += `<b><i class="text-danger">tf.tensor.dataSync</i></b>\n`;
    txt += `Tensor 1 dimensão: \n ${tensor1.toString()}\n\n`;
    txt += `Tensor 2 dimensões: \n ${tensor2.toString()}\n\n`;
    txt += `Tensor scalar: \n ${scalar1.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor.arraySync</i></b>\n`;
    txt += `Tensor 1 dimensão: \n ${tensor4.toString()}\n\n`;
    txt += `Tensor 2 dimensões: \n ${tensor5.toString()}\n\n`;
    txt += `Tensor scalar: \n ${scalar2.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
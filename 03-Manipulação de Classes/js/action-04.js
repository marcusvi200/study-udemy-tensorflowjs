/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("04 - Funções as2D, as3D, as4D e as5D para a Manipulação de Dimensionalidade");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2, 1]);
    const as2D = tensor1.as2D(2, 2);
    SUBSECAO.setAjuda(
        "as2D",
        `Converte o tensor em duas dimensões!`
    );

    const tensor2 = tf.tensor([1, 2, 3, 4], [1, 2, 2, 1]);
    const as3D = tensor2.as3D(2, 2, 1);
    SUBSECAO.setAjuda(
        "as3D",
        `Converte o tensor em três dimensões!`
    );

    const tensor3 = tf.tensor([1, 2, 3, 4]);
    const as4D = tensor3.as4D(1, 2, 2, 1);
    SUBSECAO.setAjuda(
        "as4D",
        `Converte o tensor em quatro dimensões!`
    );

    const tensor4 = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8]);
    const as5D = tensor4.as5D(1, 2, 2, 2, 1);
    SUBSECAO.setAjuda(
        "as5D",
        `Converte o tensor em cinco dimensões!`
    );

    txt += `<b><i class="text-danger">tf.tensor.as2D</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `as2D: \n ${as2D.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor.as3D</i></b>\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `as3D: \n ${as3D.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor.as4D</i></b>\n`;
    txt += `Tensor 3: \n ${tensor3.toString()} \n\n`;
    txt += `as4D: \n ${as4D.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor.as5D</i></b>\n`;
    txt += `Tensor 4: \n ${tensor4.toString()} \n\n`;
    txt += `as5D: \n ${as5D.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
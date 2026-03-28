/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("02 - Função Zeros para Atribuir Zeros ao Tensor");

function executar() {
    let txt = '';
    
    const zeros0 = tf.zeros([1]);
    const zeros1 = tf.zeros([2, 2]);
    const zeros2 = tf.zeros([2, 4]);

    SUBSECAO.setAjuda(
        "zeros",
        `Inicializa um tensor com o valor 0!`
    );
    
    txt += `<b><i class="text-danger">tf.zeros</i></b>\n`;
    txt += `Zeros 1x1: \n ${zeros0.toString()} \n\n`;
    txt += `Zeros 2x2: \n ${zeros1.toString()} \n\n`;
    txt += `Zeros 2x4: \n ${zeros2.toString()}`;
    txt += `<hr/>`;
    
    exibir(txt);
}

SUBSECAO.setExecutar(executar);
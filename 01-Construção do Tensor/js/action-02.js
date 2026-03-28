/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("02 - Tipagem Explícita na Construção do Tensor");

function executar() {
    let txt = '';

    const int32 = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    SUBSECAO.setAjuda(
        "tensor2d(?, ?, 'int32')",
        `Inicializa um tensor com 2 dimensões, mas informando o tipo de dado como int32!`
    );

    const float32 = tf.tensor2d([1.5, 2.7, 3.1, 4.8], [2, 2], 'float32');
    SUBSECAO.setAjuda(
        "tensor2d(?, ?, 'float32')",
        `Inicializa um tensor com 2 dimensões, mas informando o tipo de dado como float32!`
    );

    const bool = tf.tensor2d([true, false, true, false], [2, 2], 'bool');
    SUBSECAO.setAjuda(
        "tensor2d(?, ?, 'bool')",
        `Inicializa um tensor com 2 dimensões, mas informando o tipo de dado como booleano!`
    );

    const string = tf.tensor2d(['aaa', 'bbb', 'ccc', 'ddd'], [2, 2], 'string');
    SUBSECAO.setAjuda(
        "tensor2d(?, ?, 'string')",
        `Inicializa um tensor com 2 dimensões, mas informando o tipo de dado como string!`
    );

    txt += `<b><i class="text-danger">tf.tensor2d(*, *, 'int32')</i></b>\n`;
    txt += `Tensor do Tipo int32: \n ${int32.toString()} `;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor2d(*, *, 'float32')</i></b>\n`;
    txt += `Tensor do Tipo float32: \n ${float32.toString()} `;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor2d(*, *, 'bool')</i></b>\n`;
    txt += `Tensor do Tipo bool: \n ${bool.toString()} `;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor2d(*, *, 'string')</i></b>\n`;
    txt += `Tensor do Tipo string: \n ${string.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
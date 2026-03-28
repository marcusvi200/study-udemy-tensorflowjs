/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("06 - Funções Dispose, toFloat, toInt e toBool");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([[1, 2], [3, 4]]);

    txt += `<b><i class="text-danger">tf.tensor.dispose</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;

    tensor1.dispose();
    SUBSECAO.setAjuda(
        "dispose",
        `Elimina o tensor da memória!`
    );

    // tensor1.print();
    txt += `dispose 1: \n ${'Memória liberada'.toString()}`;
    txt += `<hr/>`;
    
    const tensor2 = tf.tensor([true, false, true, false]);
    const toFloat = tensor2.toFloat();
    SUBSECAO.setAjuda(
        "toFloat",
        `Converte o tensor em números reais!`
    );
    
    const tensor3 = tf.tensor([1.2, 2.5, 3.7, 4.8]);
    const toInt = tensor3.toInt();
    SUBSECAO.setAjuda(
        "toInt",
        `Converte o tensor em números inteiros!`
    );
    
    const tensor4 = tf.tensor([1, 0, 1, 0]);
    const toBool = tensor4.toBool();
    SUBSECAO.setAjuda(
        "toBool",
        `Converte o tensor em booleanos!`
    );
    
    txt += `<b><i class="text-danger">tf.tensor.toFloat</i></b>\n`;
    txt += `Tensor 2: \n ${tensor2.toString()} \n\n`;
    txt += `toFloat: \n ${toFloat.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor.toInt</i></b>\n`;
    txt += `Tensor 3: \n ${tensor3.toString()} \n\n`;
    txt += `toInt: \n ${toInt.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor.toBool</i></b>\n`;
    txt += `Tensor 4: \n ${tensor4.toString()} \n\n`;
    txt += `toBool: \n ${toBool.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
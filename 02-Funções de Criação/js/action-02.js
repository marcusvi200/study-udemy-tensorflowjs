SUBSECAO.setTitle("02 - Função Zeros para Atribuir Zeros ao Tensor");

function exibir(str = '') {
    $('#result').text(str);
}

function executar() {
    let txt = '';
    
    const zeros0 = tf.zeros([1]);
    const zeros1 = tf.zeros([2, 2]);
    const zeros2 = tf.zeros([2, 4]);
    
    txt += `Zeros 1x1: \n ${zeros0.toString()} \n\n`;
    txt += `Zeros 2x2: \n ${zeros1.toString()} \n\n`;
    txt += `Zeros 2x4: \n ${zeros2.toString()} \n\n`;
    
    exibir(txt);
}

SUBSECAO.setExecutar(executar);
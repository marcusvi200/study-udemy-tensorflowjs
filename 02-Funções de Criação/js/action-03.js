SUBSECAO.setTitle("03 - Função Ones para Atribuir Números Um ao Tensor");

function exibir(str = '') {
    $('#result').text(str);
}

function executar() {
    let txt = '';

    const ones0 = tf.ones([1]);
    const ones1 = tf.ones([2, 2]);
    const ones2 = tf.ones([2, 4]);

    txt += `Ones 1x1: \n ${ones0.toString()} \n\n`;
    txt += `Ones 2x2: \n ${ones1.toString()} \n\n`;
    txt += `Ones 2x4: \n ${ones2.toString()} \n\n`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
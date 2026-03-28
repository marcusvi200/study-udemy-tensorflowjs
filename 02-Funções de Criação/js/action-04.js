SUBSECAO.setTitle("04 - Função Linspace para Iniciar e Terminar Elementos");

// SUBSESSAO['04'] = {};
// SUBSESSAO['title'] = "04 - Função Linspace para Iniciar e Terminar Elementos";

function exibir(str = '') {
    $('#result').text(str);
}

function executar() {
    let txt = '';

    const linspace0 = tf.linspace(0, 9, 10);

    txt += `Linspace 0: \n ${linspace0.toString()} \n\n`;

    exibir(txt);
}

// SUBSESSAO['executar'] = executar;
SUBSECAO.setExecutar(executar);
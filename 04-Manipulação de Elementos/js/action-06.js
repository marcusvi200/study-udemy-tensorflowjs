/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("06 - Repetindo Elementos com a Função Tile");

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2]);
    const tile = tensor1.tile([10]);
    SUBSECAO.setAjuda(
        "tile",
        `Repete os valores dos tensores, conforme configuração!`,
        `Algumas observações:`,
        `-Ao que parece, aceita apenas 1 dimensão!`,
        `-Testado com mais de uma dimensão ou scalar, e deu erro!`,
        `*Faça mais testes!`,
    );

    txt += `<b><i class="text-danger">tf.tensor.tile</i></b>\n`;
    txt += `Tensor 1: \n ${tensor1.toString()} \n\n`;
    txt += `tile: \n ${tile.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
/** @type {import('@tensorflow/tfjs')} */
var tf = window.tf;

SUBSECAO.setTitle("01 - Tensores de Uma, Duas, Três, Quatro, Cinco e Seis Dimensões");

function executar() {
    let txt = '';

    const escalar = tf.scalar(1.5);

    SUBSECAO.setAjuda(
        "scalar",
        `Inicializa um tensor escalar, ou seja, com um valor!`
    );

    const tensor1d = tf.tensor1d([1, 2, 3]);

    SUBSECAO.setAjuda(
        "tensor1d",
        `Inicializa um tensor com 1 dimensão!`
    );

    const tensor2d = tf.tensor2d([
        [1, 2], [3, 4]
    ]);
    // const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
    SUBSECAO.setAjuda(
        "tensor2d",
        `Inicializa um tensor com 2 dimensões!`
    );

    const tensor3d = tf.tensor3d(
        [
            [
                [1, 2], [3, 4]
            ],
            [
                [5, 6], [7, 8]
            ]
        ]
    );
    // const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
    SUBSECAO.setAjuda(
        "tensor3d",
        `Inicializa um tensor com 3 dimensões!`
    );

    const tensor4d = tf.tensor4d([
        [
            [
                [1], [2]
            ],
            [
                [3], [4]
            ]
        ]
    ]);
    // const tensor4d = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
    SUBSECAO.setAjuda(
        "tensor4d",
        `Inicializa um tensor com 4 dimensões!`
    );

    const tensor5d = tf.tensor5d([
        [
            [
                [
                    [1], [2]
                ],
                [
                    [3], [4]
                ]
            ]
        ]
    ]);
    // const tensor5d = tf.tensor5d([1, 2, 3, 4], [1, 1, 2, 2, 1]);
    SUBSECAO.setAjuda(
        "tensor5d",
        `Inicializa um tensor com 5 dimensões!`
    );

    const tensor6d = tf.tensor6d([
        [
            [
                [
                    [
                        [1], [2]
                    ],
                    [
                        [3], [4]
                    ]
                ]
            ]
        ]
    ]);
    // const tensor6d = tf.tensor6d([1, 2, 3, 4], [1, 1, 1, 2, 2, 1]);
    SUBSECAO.setAjuda(
        "tensor6d",
        `Inicializa um tensor com 6 dimensões!`
    );

    txt += `<b><i class="text-danger">tf.scalar</i></b>\n`;
    txt += `Tensor Escalar: \n ${escalar.toString()}`;
    txt += `<hr/>`;
    
    txt += `<b><i class="text-danger">tf.tensor1d</i></b>\n`;
    txt += `Tensor de 1 Dimensão: \n ${tensor1d.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor2d</i></b>\n`;
    txt += `Tensor de 2 Dimensões: \n ${tensor2d.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor3d</i></b>\n`;
    txt += `Tensor de 3 Dimensões: \n ${tensor3d.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor4d</i></b>\n`;
    txt += `Tensor de 4 Dimensões: \n ${tensor4d.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor5d</i></b>\n`;
    txt += `Tensor de 5 Dimensões: \n ${tensor5d.toString()}`;
    txt += `<hr/>`;

    txt += `<b><i class="text-danger">tf.tensor6d</i></b>\n`;
    txt += `Tensor de 6 Dimensões: \n ${tensor6d.toString()}`;
    txt += `<hr/>`;

    exibir(txt);
}

SUBSECAO.setExecutar(executar);
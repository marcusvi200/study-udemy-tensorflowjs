$('#result').text('');
$('#ajuda').html('');

function populateAjuda() {
    $('#ajuda').html('');
    for (const [keyword, help] of Object.entries(SUBSECAO.help)) {
        $('#ajuda').append(`${help}<hr/>`);
    }
}

$('button[name="action"]').on('click', () => {
    if (window.EXECUTAR) {
        SUBSECAO.help = {};
        window.EXECUTAR();
        populateAjuda();
    } else {
        alert('Selecione uma action para executar!');
    }
})

function exibir(str = '') {
    $('#result').html(str.replaceAll('\n', '<br/>'));
}

const SUBSECAO = {
    values: {},
    help: {},
    lastKey: undefined,
    setTitle: (title) => {
        let values = title.split('-');
        let key = values[0].trim();
        this.lastKey = key;

        SUBSECAO.values[key] = { title: title };
        SUBSECAO.help = {};
    },
    setAjuda: (keyword, ...helpHtml) => {
        const header = `<h3><b>${keyword}</b></h3><br/>`;
        if (Array.isArray(helpHtml) && helpHtml.length > 0) {
            SUBSECAO.help[keyword] = `${header}<div class="content-help">`;
            let appliedUL = false;
            let appliedB = false;
            let appliedI = false;
            let appliedU = false;
            for (let [index, help] of Object.entries(helpHtml)) {
                // Para lista
                if (appliedUL && help.substr(0, 1) != '-') { SUBSECAO.help[keyword] += `</ul>`; appliedUL = false; }

                SUBSECAO.help[keyword] += index > 0 && !appliedUL && help.substr(0, 1) != '!' ? '\n' : '';

                // Para lista
                SUBSECAO.help[keyword] += help.substr(0, 1) == '-' && !appliedUL ? '\n<ul>' : '';
                if (!appliedUL && help.substr(0, 1) == '-') appliedUL = true;
                SUBSECAO.help[keyword] += help.substr(0, 1) == '-' && appliedUL ? '<li>' : '';
                if (appliedUL && help.substr(0, 1) == '-') help = help.substr(1);

                // Para a mesma linha
                if (help.substr(0, 1) === '!') {
                    help = help.substr(1);
                }

                // Para negrito
                if (help.substr(0, 1) == '*') {
                    SUBSECAO.help[keyword] += '<b>';
                    help = help.substr(1);
                    appliedB = true;
                }

                // Para itálico
                if (help.substr(0, 1) == '#') {
                    SUBSECAO.help[keyword] += '<i>';
                    help = help.substr(1);
                    appliedI = true;
                }

                // Para sublinhado
                if (help.substr(0, 1) == '_') {
                    SUBSECAO.help[keyword] += '<u>';
                    help = help.substr(1);
                    appliedU = true;
                }

                SUBSECAO.help[keyword] += `${help}`;

                // Para negrito
                if (appliedB) {
                    SUBSECAO.help[keyword] += '</b>';
                    appliedB = false;
                }

                // Para itálico
                if (appliedI) {
                    SUBSECAO.help[keyword] += '</i>';
                    appliedI = false;
                }

                // Para sublinhado
                if (appliedU) {
                    SUBSECAO.help[keyword] += '</u>';
                    appliedU = false;
                }

                // Para lista
                SUBSECAO.help[keyword] += appliedUL ? '</li>' : '';
            }
            // Para lista
            if (appliedUL) SUBSECAO.help[keyword] += `</ul>`;

            SUBSECAO.help[keyword] += `</div>`;
            return;
        }
        SUBSECAO.help[keyword] = `${header}<div class="content-help">${helpHtml}</div>`;
        return;
    },
    setExecutar: (fn, key = undefined) => {
        SUBSECAO.values[key || this.lastKey]['executar'] = fn
    }
}

let testSubsecao = setInterval(() => {
    if (window.SUBSECAO && window.SUBSECAO !== undefined && window.SUBSECAO !== null && typeof window.SUBSECAO === 'string') {
        document.querySelector('.badge.text-bg-secondary').innerHTML = window.SUBSECAO;
        window.EXECUTAR = executar;
        clearInterval(testSubsecao);
    }

    if (SUBSECAO && SUBSECAO !== undefined && SUBSECAO !== null && typeof SUBSECAO === 'object' && typeof SUBSECAO.values === 'object') {
        let multiAction = document.querySelector('#multiAction');
        let badge = document.querySelector('.badge.text-bg-secondary');
        let select = multiAction.querySelector('select');

        for (const option of Object.keys(SUBSECAO.values).sort((a, b) => (Number(a) < Number(b)) ? -1 : (Number(a) < Number(b)) ? 1 : 0)) {
            let newOption = document.createElement('option');
            newOption.value = option;
            newOption.innerHTML = SUBSECAO.values[option]['title'];
            select.appendChild(newOption);
        }

        if (localStorage.getItem('key') && Object.keys(SUBSECAO.values).indexOf(localStorage.getItem('key')) > -1) {
            select.value = localStorage.getItem('key');
            select.querySelectorAll('option').forEach((v) => {
                v.selected = false;
                if (v.value == localStorage.getItem('key')) {
                    v.selected = true;
                }
            })
            badge.innerHTML = SUBSECAO.values[localStorage.getItem('key')]['title'];
            window.EXECUTAR = SUBSECAO.values[localStorage.getItem('key')]['executar'];
        }

        multiAction.classList.remove('d-none');

        select.addEventListener('change', (ev) => {
            $('#result').text('');
            $('#ajuda').html('');
            badge.innerHTML = SUBSECAO.values[ev.currentTarget.value]['title'];
            window.EXECUTAR = SUBSECAO.values[ev.currentTarget.value]['executar'];
            localStorage.setItem('key', ev.currentTarget.value);
        });

        clearInterval(testSubsecao);
    }
}, 100);

(function () {
    var oldLog = console.log;
    var oldError = console.error;
    var $logger = $('#console-log-div');

    console.error = function () {
        oldError.apply(console, arguments);
        var args = Array.from(arguments).join(' ');
        $logger.append('<div class="text-danger border-bottom border-secondary mb-1 pb-1"><strong>ERRO:</strong> ' + args + '</div>');
        $logger.scrollTop($logger[0].scrollHeight);
    };

    // Sobrescrevendo o console.log
    console.log = function () {
        // Mantém o log original no F12
        oldLog.apply(console, arguments);

        // Transforma múltiplos argumentos em uma string amigável
        var args = Array.from(arguments).map(arg => {
            return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg;
        }).join(' ');

        // Adiciona à div com uma estrutura de linha
        $logger.append('<div class="border-bottom border-secondary mb-1 pb-1 text-info">> ' + args + '</div>');

        // Auto-scroll
        $logger.scrollTop($logger[0].scrollHeight);
    };

    // Ação do Botão Limpar
    $('#clear-console').on('click', function () {
        $logger.empty();
    });
})();
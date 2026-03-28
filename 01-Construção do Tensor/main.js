/** @type {import('@tensorflow/tfjs')} */
const tf = window.tf;

$('#result').text('');

$('button[name="action"]').on('click', () => {
    window.EXECUTAR();
})

const SUBSECAO = {
    values: {},
    lastKey: undefined,
    setTitle: (title) => {
        let values = title.split('-');
        let key = values[0].trim();
        this.lastKey = key;

        SUBSECAO.values[key] = { title: title }
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
        try {
            let multiAction = document.querySelector('#multiAction');
            let badge = document.querySelector('.badge.text-bg-secondary');
            let select = multiAction.querySelector('select');

            for (const option of Object.keys(SUBSECAO.values)) {
                let newOption = document.createElement('option');
                newOption.value = option;
                newOption.innerHTML = SUBSECAO.values[option]['title'];
                select.appendChild(newOption);
            }

            multiAction.classList.remove('d-none');

            select.addEventListener('change', (ev) => {
                $('#result').text('');
                badge.innerHTML = SUBSECAO.values[ev.currentTarget.value]['title'];
                window.EXECUTAR = SUBSECAO.values[ev.currentTarget.value]['executar'];
            });
        } catch (error) {
            console.error(error);
        } finally {
            clearInterval(testSubsecao);
        }

    }
}, 100);
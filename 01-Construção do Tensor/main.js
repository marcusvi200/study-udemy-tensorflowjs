$('#result').text('');

$('button[name="action"]').on('click', () => {
    executar();
})

if (window.SUBSECAO && window.SUBSECAO !== undefined && window.SUBSECAO !== null && typeof window.SUBSECAO === 'string') {
    document.querySelector('.badge.text-bg-secondary').innerHTML = window.SUBSECAO;
}
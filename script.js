document.getElementById('btn-simular').addEventListener('click', function() {
    const nucleosIniciais = parseInt(document.getElementById('nucleos').value) || 5;
    const taxaReacao = parseFloat(document.getElementById('taxa').value) || 2.2;
    const geracoes = parseInt(document.getElementById('geracoesInput').value) || 8;

    let ativoAtual = nucleosIniciais;
    let htmlOutput = `<p><strong>Estado Inicial:</strong> ${nucleosIniciais} elementos ativos.</p><ul>`;

    let explosao = false;
    for (let i = 1; i <= geracoes; i++) {
        let fatorAleatorio = 0.5 + (Math.random() * 1.0);
        let novosAtivos = Math.floor(ativoAtual * taxaReacao * fatorAleatorio);
        ativoAtual += novosAtivos;

        htmlOutput += `<li><strong>Geração ${i}:</strong> +${novosAtivos} novos ativados &rarr; <strong>Total acumulado: ${ativoAtual.toLocaleString('pt-BR')}</strong></li>`;

        if (ativoAtual > 1000000) {
            htmlOutput += `</ul><p class="alert-text">⚠️ <strong>Alerta Crítico:</strong> Limite de reação exponencial massiva atingido na geração ${i}!</p>`;
            explosao = true;
            break;
        }
    }

    if (!explosao) {
        htmlOutput += `</ul><p class="success-text">✅ Simulação concluída com estabilidade controlada ao final de ${geracoes} gerações.</p>`;
    }

    const container = document.getElementById('resultado-container');
    const textoDiv = document.getElementById('resultado-texto');
    textoDiv.innerHTML = htmlOutput;
    container.classList.remove('hidden');
});

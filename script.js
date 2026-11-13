document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.chapter-card');
    const nextPhaseBtn = document.getElementById('next-phase-btn');
    const aronaQuote = document.getElementById('arona-quote');

    const phases = ['fase-1', 'fase-2', 'fase-3'];
    const quotes = {
        'fase-1': '"Fase 01: Da formatura do EM direto para Ciência da Computação na UNICENTRO — e soltando a criatividade na arte e na música!"',
        'fase-2': '"Fase 02: Trabalhando com TI, com espaço de sobra no apê (zero aperto de 10m²!) e mandando ver no FL Studio."',
        'fase-3': '"Fase 03: Família formada, carreira evoluindo e aproveitando cada conquista. Missão cumprida!"'
    };

    let currentIndex = 0;

    function switchPhase(targetId) {
        // Atualiza índice atual
        currentIndex = phases.indexOf(targetId);

        // Atualiza botões do menu superior
        navButtons.forEach(btn => {
            if (btn.dataset.target === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Atualiza exibição das seções
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add('active-section');
            } else {
                sec.classList.remove('active-section');
            }
        });

        // Atualiza mensagem no rodapé
        aronaQuote.textContent = quotes[targetId];

        // Atualiza texto do botão de avançar
        if (currentIndex === phases.length - 1) {
            nextPhaseBtn.textContent = 'Voltar ao Início ↺';
        } else {
            nextPhaseBtn.textContent = 'Avançar Linha do Tempo ➔';
        }
    }

    // Evento nos botões superiores
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.target;
            switchPhase(target);
        });
    });

    // Evento no botão de avançar no rodapé
    nextPhaseBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % phases.length;
        switchPhase(phases[nextIndex]);
    });
});
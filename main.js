const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "O que é um anticorpo?",
        alternativas: [
            {
                texto: 'Uma proteína produzida pelo sistema imunológico.',
                afirmacao: 'Correto! Anticorpos são proteínas que ajudam a identificar e neutralizar patógenos.'
            },
            {
                texto: 'Uma célula do sistema nervoso.',
                afirmacao: 'Incorreto. Anticorpos são proteínas, não células do sistema nervoso.'
            }
        ]
    },
    {
        enunciado: "Qual é a função principal das vacinas?",
        alternativas: [
            {
                texto: 'Prevenir doenças ao estimular o sistema imunológico.',
                afirmacao: 'Correto! Vacinas ajudam o sistema imunológico a reconhecer e combater patógenos.'
            },
            {
                texto: 'Curar doenças já existentes.',
                afirmacao: 'Incorreto. Vacinas são usadas para prevenir doenças, não para curá-las.'
            }
        ]
    },
    {
        enunciado: "O que são células T?",
        alternativas: [
            {
                texto: 'Células do sistema imunológico que ajudam a coordenar a resposta imune.',
                afirmacao: 'Correto! Células T são cruciais para coordenar a resposta imunológica e matar células infectadas.'
            },
            {
                texto: 'Células que produzem hormônios.',
                afirmacao: 'Incorreto. Células T são parte do sistema imunológico e não produzem hormônios.'
            }
        ]
    },
    {
        enunciado: "O que é a genética?",
        alternativas: [
            {
                texto: 'O estudo dos genes e como eles são passados de pais para filhos.',
                afirmacao: 'Correto! Genética é o estudo dos genes e da hereditariedade.'
            },
            {
                texto: 'A ciência que estuda as plantas.',
                afirmacao: 'Incorreto. O estudo das plantas é conhecido como botânica, não genética.'
            }
        ]
    },
    {
        enunciado: "Qual é o papel dos antibióticos?",
        alternativas: [
            {
                texto: 'Eliminar bactérias que causam infecções.',
                afirmacao: 'Correto! Antibióticos são usados para matar ou inibir o crescimento de bactérias patogênicas.'
            },
            {
                texto: 'Curar infecções virais.',
                afirmacao: 'Incorreto. Antibióticos são eficazes contra bactérias, mas não contra vírus.'
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + ' ';
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = 'Quiz concluído!';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = '';
}

mostraPergunta();

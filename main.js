const caixaPrincipal= document.querySelector('.caixa-principal');
const caixaPerguntas= document.querySelector('.caixa-perguntas');
const caixaAlternativas= document.querySelector('.caixa-alternativas');
const caixaResultado= document.querySelector('.caixa-resultado');
const textoResultado= document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "De acordo com a OMS muitas mulheres morrem e milhões são hospitalizadas em todo o mundo anualmente com complicações causadas por abortos inseguras, você é afavor da legalizção do aborto?",
        alternativas: [
            {
                texto:"Sou afavor da legalização pois todas mulheres deveriam ter direito sobre seu corpo e se quer gerar",
                afirmacao: "Eu acho que todas mulheres deveriam sim ter controle sobre o que faz com seu corpo, se quer gerar ou não, esta mulher não deveria passar a ser julgada por sua escolha"
            },
            {
                texto:"Não sou afavor da legalização pois muitas mulheres se submetem a fazer relação sexual mesmo sabendo da possibilidade de uma gestação.",
                afirmacao: "Eu não sou afavor da legalização pois existem metodos contraceptivos para evitar uma gravidez s"
            }
            
            
        ]
    },
    {
        enunciado: "Enunciado 02",
        alternativas: [
            {
                texto:"alternativa 3",
                afirmacao: "resultado 3"
            },
                {
                    texto:"alternativa 4",
                    afirmacao: "resultado 4"
                }
            
            
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            {
                texto:"alternativa 5",
                afirmacao:"resultado 5"
            },
            {
                texto:"alternativa 6",
                afirmacao:"resultado 6"
            }
            
            
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto:"alternativa 7",
                afirmacao:"resultado 7"
            },
            {
                texto:"alternativa 8",
                afirmacao:"resultado 8"
            }
            
            
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
        {
            texto:"alternativa 9",
            afirmacao:"resultado 9"
        },
        {
            texto:"alternativa 10",
            afirmacao:"resultado 10"
        }
           
            
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostrarPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "inicio do texto...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

mostrarPergunta();
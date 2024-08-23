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
                afirmacao: "Eu acho que todas mulheres deveriam sim ter controle sobre o que faz com seu corpo, se quer gerar ou não, esta mulher não deveria passar a ser julgada por sua escolha."
            },
            {
                texto:"Não sou afavor da legalização pois muitas mulheres se submetem a fazer relação sexual mesmo sabendo da possibilidade de uma gestação.",
                afirmacao: "Eu não sou afavor da legalização do aborto pois existem metodos contraceptivos para evitar uma gravidez e pessoas que se submetem fazer relação sem preservativo não deveria ter responsabilidade em acabar com uma vida."
            }
            
            
        ]
    },
    {
        enunciado: "No Brasil, o debate enfrenta o conservadorismo e limitações da lei ja que somente é permitido em apenas 3 situações. Mas nos últimos tempo esta sendo levantando muito em pauta a condenação para mulheres que abortam em caso de estrupo. Você é afavor da legalização do aborto em caso de violência?",
        alternativas: [
            {
                texto:"Sou afavor em caso de estrupo pois a mulher já passou por uma violentação e deve ter direito de escolha.",
                afirmacao: "Quando ocorre casos de estrupo sou afavor do aborto onde a mulher já tem que lidar com os transtornos da violação e tem que ser direito dela se ela quer ou não gerar e demais ser condenada por sua escolha é algo sem cabimento."
            },
                {
                    texto:"Não sou afavor do aborto pois o feto não tem culpa sobre o que ocorreu e quem acaba interrompendo deveria sim ser condenado",
                    afirmacao: "Não deveria ocorrer o aborto mesmo em caso de estrupo pois o feto não teve culpa sobre o que ocorreu e acho que a mulher que interrompe uma gestação deve ser condenada"
                }
            
            
        ]
    },
    {
        enunciado: "O grande problema do aborto clandestino esta na realizaçção de procedimentos invasores e sem segurança mas para pessoas com boas condições conseguem achar uma 'clínica top' enquanto mulheres de baixa renda morrem constantemente. Você acha que esta diferença social iria ocorer se fosse liberado a legalização do aborto?",
        alternativas: [
            {
                texto:"Sou afavor que seja liberado e com isso a taxa de morte de mulheres que tentam o aborto cairiam porque teriam oportunidade de acesso com boas condições.",
                afirmacao:"Com a liberação do aborto seria uma causa pública isso ajudaria para mulheres terem segurança sobre suas escolhas."
            },
            {
                texto:"Não sou afavor e acho isso um absurdo pois se fez filho tem obrigação de criar e cuidar.",
                afirmacao:"Defendo a proteção do direito a vida mesmo de um feto e sendo iberado muits mulheres estariam violando os direito de vida deste feto pois cada ser humano tem seu valor e direito a vida."
            }
            
            
        ]
    },
    {
        enunciado: "O aborto espontâneo e comum entre as mulheres e a grande taxa sempre são mulheres que perdem o bebê antes da vigésima semana e isso pode causar dor física eemocional e muitos acreditam que isso ocorre por negligência da gestante, Você acredita nisso?",
        alternativas: [
            {
                texto:"Acredito que a mulher não tem culpa quando ocorre aborto espontâneo",
                afirmacao:"Em casos de abortos espontâneos a mulher não deveria ser acusada como responsável pois pode ocorrer por diversos motivos como problemas no feto ou envolvendo problemas na saúde da gestante. "
            },
            {
                texto:"Acredito que seja sim negligência da gestante",
                afirmacao:"È negliência da mulher que ocorre o aborto espontâneo pois deveria ter tomado devidos cuidados sabendo que carrega uma vida dentro de si e deveria ter responsabilidade sobre."
            }
            
        
        ]
    },
    {
        enunciado: "Depois de todos esses trechos onde o aborto esta envolvido em várias situações Quais das situações abaixo você seria afavor?",
        alternativas: [
        {
            texto:"Sou afavor do aborto em qualquer situação",
            afirmacao:"O aborto deveria ser liberado em todas estas situações, acredito que a mulher deve controlar sobre o que quer ou não fazer com seu proprio corpo"
        },
        {
            texto:"Ainda  sendo contra o aborto somente em alguns casos como o de estrupo",
            afirmacao: "Não apoio o aborto mas em situação somente envolvendo estrupos pois além disso todos que se relacionam sabe que existe a possibilidade de engravidar e não devem ter direito em acabar com uma vida."
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
        caixaPerguntas.textContent = "...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

mostrarPergunta();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que responde todas as dúvidas que uma pessoa pode ter. Qual o seu primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Quis saber como usar IA no seu dia a dia imediatamente."
      }
    ]
  },
  {
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora decidiu fazer uma sequência de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA na sala de aula. Como você se posiciona?",
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de IA para buscar dados e ajudar na pesquisa do trabalho.",
        afirmacao: "Conseguiu utilizar a IA para buscar informações úteis e otimizar seu tempo."
      },
      {
        texto: "Escreve o trabalho com base nas conversas com seus colegas e pesquisas tradicionais.",
        afirmacao: "Preferiu confiar na sua própria capacidade de pesquisa e reflexão pessoal."
      }
    ]
  },
  {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre o futuro do trabalho com a IA. Como você se posiciona?",
    alternativas: [
      {
        texto: "Defende que a IA cria novas oportunidades de trabalho e melhora habilidades humanas.",
        afirmacao: "Vem impulsionando o debate sobre como a IA pode criar novos empregos."
      },
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a proteção do trabalho humano.",
        afirmacao: "Se tornou uma voz ativa na defesa dos direitos dos trabalhadores afetados pela automação."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

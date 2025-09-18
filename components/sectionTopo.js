const BASE_URL_TOPO = 'https://apps.univesp.br/100-conceitos-contabilidade/';

let sectionTopo = document.querySelector("#topo");
sectionTopo.setAttribute("id", "topo")

// Ilustração da calculadora
let divCalculadora = document.createElement("div");
divCalculadora.classList.add("calculadora");
sectionTopo.appendChild(divCalculadora);

let figureCalculadora = document.createElement("figure");
figureCalculadora.setAttribute("id", "imagemCalculadora");
divCalculadora.appendChild(figureCalculadora);

let imgCalculadora = document.createElement("img");
imgCalculadora.setAttribute("id", "imgCalculadora");
imgCalculadora.src = `${BASE_URL_TOPO}/assets/ilustracao_calculadora.svg`;
figureCalculadora.appendChild(imgCalculadora);

// Título e subtítulo
let divTituloEsubtilulo = document.createElement("div");
divTituloEsubtilulo.classList.add("tituloEsubtitulo");
sectionTopo.appendChild(divTituloEsubtilulo);

// Div Título
let divTitulo = document.createElement("div");
divTitulo.classList.add("divTitulo");
divTituloEsubtilulo.appendChild(divTitulo);

// Ilustração Título
let figureTitulo = document.createElement("figure");
divTitulo.appendChild(figureTitulo);

let imgTitulo = document.createElement("img");
imgTitulo.setAttribute("id", "imgTitulo");
if (window.matchMedia("(min-width:768px)").matches){
  imgTitulo.src = `${BASE_URL_TOPO}/assets/titulo_contabilidade_desktop_e_tablet.svg`;
}else{
  imgTitulo.src = `${BASE_URL_TOPO}/assets/titulo_contabilidade_celular.svg`;
}

figureTitulo.appendChild(imgTitulo);

// Div Subtítulo
let divSubtitulo = document.createElement("div");
divSubtitulo.classList.add("divSubtitulo");
divTituloEsubtilulo.appendChild(divSubtitulo)

// Parágrafo do Subtítulo
let paragrafoSubtitulo = document.createElement('p');
paragrafoSubtitulo.classList.add("subtitulo");
paragrafoSubtitulo.innerHTML = `Baseado no livro <em>Contabilidade ambiental: relato integrado e
 sustentabilidade</em>, de José Roberto Kassai, Nelson Carvalho e José Rubens Seyiti Kassai`;
 divSubtitulo.appendChild(paragrafoSubtitulo);


// Div Pilhas de moedas
let divPilhaDeMoedas = document.createElement("div");
divPilhaDeMoedas.classList.add("moedas");
sectionTopo.appendChild(divPilhaDeMoedas);

// Ilustração da pilha de moedas
let figurePilhaMoedas = document.createElement("figure");
divPilhaDeMoedas.appendChild(figurePilhaMoedas);

let imgPilhaMoedas = document.createElement("img");
imgPilhaMoedas.setAttribute("id", "imgMoedas");
imgPilhaMoedas.src = `${BASE_URL_TOPO}/assets/ilustracao_moedas.svg`;
figurePilhaMoedas.appendChild(imgPilhaMoedas);
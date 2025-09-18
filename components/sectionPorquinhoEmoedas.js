const BASE_URL_MOEDAS = 'https://apps.univesp.br/100-conceitos-contabilidade';

let sectionPorquinho = document.querySelector(".moedasEporquinho");
let figurePorquinhoEmoedas = document.createElement("figure");
let imgPorquinhoEmoedas = document.createElement("img");
imgPorquinhoEmoedas.src = `${BASE_URL_MOEDAS}/assets/ilustracao_moedas_e_porquinho.svg`;
imgPorquinhoEmoedas.classList.add("imgMoedasEporquinho");

sectionPorquinho.appendChild(figurePorquinhoEmoedas);
figurePorquinhoEmoedas.appendChild(imgPorquinhoEmoedas);
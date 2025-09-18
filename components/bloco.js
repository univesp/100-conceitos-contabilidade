const BASE_URL_BLOCO = 'https://apps.univesp.br/100-conceitos-contabilidade';

//Criando Blocos das perguntas
let criaBloco = function(linkId, nameBloco, moeda, numID, questoesRespondidas, certo, colorBloco, qtdeQuestoesBloco, classBloco, borderBloco){
  let areaBlocos = document.createElement("div");

  let linkBloco = document.createElement("a");
  linkBloco.classList.add(`${classBloco}`);
  linkBloco.setAttribute('href', `${BASE_URL_BLOCO}/pages/bloco-questoes-${linkId}.html`);
  linkBloco.setAttribute('style', 'text-decoration: none');

  let areaBloco = document.createElement("div");
  areaBloco.classList.add("bloco");
  areaBloco.setAttribute('id', `bloco${numID}`);
  areaBloco.setAttribute('style', `background-color: ${colorBloco}; border: ${borderBloco}`);


  let nomeBloco = document.createElement("p");
  nomeBloco.classList.add("tituloDoBloco");
  nomeBloco.innerHTML = nameBloco;


  let imagemBloco = document.createElement("div");
  imagemBloco.classList.add("imgBloco");

  let moedaFigure = document.createElement("figure");
  moedaFigure.classList.add("moeda");

  let moedaImg = document.createElement("img");
  moedaImg.setAttribute('src', `${moeda}`);

  moedaFigure.appendChild(moedaImg);
  imagemBloco.appendChild(moedaFigure);


  let rodapeBlocoArea = document.createElement("div");
  rodapeBlocoArea.classList.add("rodapeBloco");

  let questoesFeitas = document.createElement("div");
  questoesFeitas.classList.add("qtdQuestoesRespondidas");
  questoesFeitas.innerText = `${questoesRespondidas}/${qtdeQuestoesBloco}`;

  let respostaCerta = document.createElement("div");
  respostaCerta.classList.add("divImgCerto");

  let respostaCertaFigure = document.createElement("figure");
  respostaCertaFigure.classList.add("certo");

  let certoImg = document.createElement("img");
  certoImg.setAttribute('src', `${certo}`);

  respostaCertaFigure.appendChild(certoImg);
  respostaCerta.appendChild(respostaCertaFigure);
  rodapeBlocoArea.appendChild(questoesFeitas);
  rodapeBlocoArea.appendChild(respostaCerta);

  areaBloco.appendChild(nomeBloco);
  areaBloco.appendChild(imagemBloco);
  areaBloco.appendChild(rodapeBlocoArea);

  linkBloco.appendChild(areaBloco);

  areaBlocos.appendChild(linkBloco);

  return areaBlocos;
}

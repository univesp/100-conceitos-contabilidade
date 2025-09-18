let criaConceito = function(conceitoQuestao){
  let questaoConceito = document.createElement("div");
  questaoConceito.classList.add("textoBlocoConceitoCentro");
  questaoConceito.setAttribute('id', 'conceitoQuestaoId')
  questaoConceito.innerHTML = conceitoQuestao;

  return questaoConceito;
}

let criaIlustra = function(ilustra){
  let ilustraContainer = document.createElement("div");
  ilustraContainer.classList.add('ilustra-questoes');
  ilustraContainer.setAttribute('id', 'ilustraQuestaoContainer');
  ilustraContainer.innerHTML = `<img src="${ilustra}">`;

  return ilustraContainer;
}

let criaAlternativasContainer = function(){
  let alternativasArea = document.createElement("div");
  alternativasArea.classList.add("divAlternativasQuestao");
  alternativasArea.setAttribute('id', 'alternativasContainer');

  return alternativasArea;
}

let criaAlternativas = function(alternativaID, textoAlternativa, checkCorreta, inputId, labelId, dataValue, checkNumero, dataLabel){
  let alternativasContentArea = document.createElement("div");
  alternativasContentArea.classList.add("alternativasNumeros");
  alternativasContentArea.setAttribute('data-value', dataValue);

  let numeroAlternativa = document.createElement("div");
  numeroAlternativa.classList.add("numeroDaAlternativa");
  numeroAlternativa.setAttribute('data-check', checkNumero)
  numeroAlternativa.innerHTML = alternativaID;

  let alternativaText = document.createElement("div");
  alternativaText.classList.add("alternativa");
  alternativaText.setAttribute('data-label', dataLabel)

  let inputAlternativa = document.createElement("input");
  inputAlternativa.classList.add("isHidden");
  inputAlternativa.setAttribute('type', 'radio');
  inputAlternativa.setAttribute('name', 'alternativas');
  inputAlternativa.setAttribute('value', `${checkCorreta}`);
  inputAlternativa.setAttribute('id', `input${inputId}`);

  let labelInputAlternativa = document.createElement("label");
  labelInputAlternativa.classList.add("label-texto-alternativa");
  labelInputAlternativa.setAttribute('for', `input${labelId}`)
  labelInputAlternativa.innerHTML = textoAlternativa;

  alternativaText.appendChild(inputAlternativa);
  alternativaText.appendChild(labelInputAlternativa);


  alternativasContentArea.appendChild(numeroAlternativa);
  alternativasContentArea.appendChild(alternativaText);

  return alternativasContentArea;
}
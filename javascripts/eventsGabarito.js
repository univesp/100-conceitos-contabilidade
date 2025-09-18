// Ajusta posicionamento da Tela em dispositivos menores
if (window.matchMedia("(max-width:575px)").matches){
  window.scrollTo({
    top: 650,
    behavior: 'smooth'
  });
}

const getButtonIdStorage = localStorage.getItem('buttonIdStorage');
const tabelaGabaritoContainer = document.querySelector('#bodyTable');
const areaQtdeQuestoesCertas = document.querySelector('.pIntroducaoAsQuestoes');
const areaSubtitulo = document.querySelector('.subtituloPerguntas');
const buttonReiniciarBloco = document.querySelector('#buttonReiniciarBloco');
const buttonImprimirGabarito = document.querySelector('#botaoImprimirGabarito');

let currentQuestoes;

for (let i = 1; i < blocosData.length + 1; i++) {
  if(getButtonIdStorage === `${i}`){
    currentQuestoes = i;
  }
}

const getQtdeQuestoesCertas = localStorage.getItem(`questoesCorretasBloco${currentQuestoes}`);
let qtdeQuestoesCorretas = JSON.parse(getQtdeQuestoesCertas);
let questoesCorretas = JSON.stringify(qtdeQuestoesCorretas);

//Printando na tela frases e botoes de acordo com as questões acertadas
if(questoesCorretas === '10'){
  areaQtdeQuestoesCertas.innerHTML = `VOCÊ ACERTOU TODOS OS CONCEITOS DO BLOCO ${getButtonIdStorage}!`;
  areaSubtitulo.innerHTML = 'Confira abaixo o gabarito completo.';
  buttonReiniciarBloco.style.display = 'none';
  buttonImprimirGabarito.style.display = 'block';
}else{
  areaQtdeQuestoesCertas.innerHTML = `VOCÊ ACERTOU ${questoesCorretas} DOS 10 CONCEITOS APRESENTADOS NO BLOCO ${getButtonIdStorage}!`;
  areaSubtitulo.innerHTML = 'Você pode melhorar e a tabela abaixo pode ajudá-lo! Que tal consultá-la?';
  buttonReiniciarBloco.style.display = 'block';
  buttonReiniciarBloco.setAttribute('href', `https://apps.univesp.br/100-conceitos-contabilidade/pages/bloco-questoes-${currentQuestoes}.html`);
  buttonImprimirGabarito.style.display = 'none';
}



const getInicioQuestoesStorage = localStorage.getItem(`questoesStorage${currentQuestoes}`);
let inicioQuestoesStorageGabarito = JSON.parse(getInicioQuestoesStorage);

const getModifiedQuestoesStorage = localStorage.getItem(`modifiedQuestoes${currentQuestoes}`);
let modifiedQuestoesStorage = JSON.parse(getModifiedQuestoesStorage);

//Defininco array que armazena os icones certos e errados
let arrIcones = [];

//alimenta array de icones de acordo com os acertos ou erros do usuário
modifiedQuestoesStorage.map((item)=>{
  if(item.questaoFeitaCorreta === 'true'){
    let itemsObject = {
      "icone": "icone_certo"
    };
    arrIcones.push(itemsObject)
  }else{
    let itemsObject = {
      "icone": "icone_errado"
    };
    arrIcones.push(itemsObject)
  }
})

// Renderizando informações do gabarito de acordo com os acertos ou erros do usuário
for (let i = 0; i < inicioQuestoesStorageGabarito.length; i++) {

  if(arrIcones[i].icone === "icone_certo"){
    let itemGabarito = criaGabarito(arrIcones[i].icone, inicioQuestoesStorageGabarito[i].titulo, inicioQuestoesStorageGabarito[i].alternativas[0].questaoText);

    tabelaGabaritoContainer.appendChild(itemGabarito);

  }else if(arrIcones[i].icone === "icone_errado"){
    let itemGabarito = criaGabarito(arrIcones[i].icone, inicioQuestoesStorageGabarito[i].titulo, 'Esta questão você não acertou, mas pode refazer.');

    tabelaGabaritoContainer.appendChild(itemGabarito);
  }
  
}


const gabaritoMobileContainer = document.querySelector(".tabela-mobile");
const arrRomanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

if (window.matchMedia("(max-width:767px)").matches){

  for (let i = 0; i < inicioQuestoesStorageGabarito.length; i++){

    if(arrIcones[i].icone === "icone_certo"){
      let itemMobileGabarito = criaGabaritoMobile(arrIcones[i].icone, arrRomanNumbers[i], inicioQuestoesStorageGabarito[i].alternativas[0].questaoText);

      gabaritoMobileContainer.appendChild(itemMobileGabarito);
    }else if(arrIcones[i].icone === "icone_errado"){
      let itemMobileGabarito = criaGabaritoMobile(arrIcones[i].icone, arrRomanNumbers[i], 'Esta questão você não acertou, mas pode refazer.');
  
      gabaritoMobileContainer.appendChild(itemMobileGabarito);
    }

  }

}

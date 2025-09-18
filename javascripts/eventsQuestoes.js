const questaoContainer = document.querySelector("#conceitoContainer");
const conceitoArea = document.querySelector("#conceitoArea");

$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  localStorage.setItem('ilustras', JSON.stringify(ilustrasURL));
  const getIlustras = localStorage.getItem('ilustras');
  const ilustras = JSON.parse(getIlustras);


  // Criando variável que armazenará o numero do bloco atual
  let currentBloco;

  // Definindo qual o caminho da URL atual
  const { pathname } = window.location;

  console.log(pathname)


  // Cria array vazio que irá conter os dados trazidos do array de objetos na primeira vez que a página carregar
  let arrQuestoes = [];

  // Define de qual bloco iremos trazer os dados de acordo com a URL atual para armazenar dentro de arrQuetoes
  let arrayBlocos = [ questoes1, questoes2, questoes3, questoes4, questoes5, questoes6, questoes7, questoes8, questoes9, questoes10, ];
  for (let i = 1; i < blocosData.length + 1; i++) {
    if(pathname === `/100-conceitos-contabilidade/pages/bloco-questoes-${i}.html`){
      currentBloco = `${i}`;

      // Chama e percorre array de objetos das questões e alimenta arrQuestoes
      arrayBlocos[i - 1].map((questao)=>{
        arrQuestoes.push(questao)
      });
    }
  }
  

  // Define de qual localStorage iremos trazer os dados quando a página é carregada
  let inicioQuestoesStorage;

  // Se ainda não existir localStorage, cria 'questoesStorage' com os dados do arrQuestoes e traz os dados dele
  if(!localStorage.getItem(`questoesStorage${currentBloco}`)){
    localStorage.setItem(`questoesStorage${currentBloco}`, JSON.stringify(arrQuestoes));
    inicioQuestoesStorage = localStorage.getItem(`questoesStorage${currentBloco}`);
  }

  // Se já existir localStorage 'questoesStorage' traz os dados dele
  else if(localStorage.getItem(`questoesStorage${currentBloco}`) && !localStorage.getItem(`modifiedQuestoes${currentBloco}`)){
    inicioQuestoesStorage = localStorage.getItem(`questoesStorage${currentBloco}`);
  }
  
  // Se existir localStorage com as questoes modificadas (exercício já foi feito ao menos uma vez), traz dados de 'modifiedQuestoes'
  else{
    inicioQuestoesStorage = localStorage.getItem(`modifiedQuestoes${currentBloco}`);
  }

  // Armazena questoes trazidas do localStorage
  let questoesStorage = JSON.parse(inicioQuestoesStorage);

  // Cria Array que irá armazenar questões nao feitas ou questões que foram marcadas erradas
  let currentQuestoes = [];

  // Mapeia questões do localStorage e armazena questões erradas ou que não foram feitas
  questoesStorage.map((item)=>{
  
      currentQuestoes.push(item);
    
  });


  const botaoAvancarContainer = document.querySelector(`#botaoAvancar${currentBloco}`);
  const botaoAvancar = document.querySelector(`#buttonContinuar`);
  const buttonAvancarDisabledStyle = `pointer-events: none; background-color: #8C8B8E`;
  const buttonAvancarEnabledStyle = `pointer-events: auto; background-color: #625690`;

  botaoAvancarContainer.style.display = 'flex';
  botaoAvancar.style = buttonAvancarDisabledStyle;
  


    // Printa na tela apenas a 1ª questão não feita ou errada.
    let conceitoContent = criaConceito(currentQuestoes[0].titulo);
    conceitoArea.appendChild(conceitoContent);

    //Inserindo ilustras de forma aleatória
    const randomIlustra = getRandomItem(ilustras);
    let ilustraQuestao = criaIlustra(randomIlustra.ilustra)
    questaoContainer.appendChild(ilustraQuestao);

    let alternativasContainer = criaAlternativasContainer();
    questaoContainer.appendChild(alternativasContainer);

    const getAlternativasContainer = document.querySelector("#alternativasContainer");

    let numAlternativa = 0;

    let copiaSemEmbaralhar = [...currentQuestoes[0].alternativas]
    currentQuestoes[0].alternativas.sort((a,b) => a.ordem - b.ordem).map((alternativas)=>{         
      
      numAlternativa++
      
      let alternativasContent = criaAlternativas(currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoText, alternativas.questaoCorreta, currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoCorreta, alternativas.questaoCorreta, alternativas.questaoCorreta);

      getAlternativasContainer.appendChild(alternativasContent);
  
  });


  
  // Definindo variáveis
  let conceito = document.querySelector("#conceitoQuestaoId");
  let alternativasClick = document.querySelectorAll(".label-texto-alternativa");
  let numeroAlternativa = document.querySelectorAll(".numeroDaAlternativa");
  let divAlternativa = document.querySelectorAll(".alternativasNumeros");
  let eachLabelAlternativa = document.querySelectorAll(".alternativa");
  const radioButtons = document.querySelectorAll('input[name="alternativas"]');
  let questoesCorretasStorage = localStorage.getItem(`questoesCorretasBloco${currentBloco}`);
  let qtdeQuestoesCorretasStorage = parseInt(questoesCorretasStorage);
  let questoesCorretas;
  let click = 0;
  let inputsChecked = [];
  const styleAlternativaSelecionada = `border: 3px solid #E2B77A; background-color: #F2D6B5; transition: 0.4s; padding: 15px; border-radius: 10px; width: 98%;`;
  const styleAlternativaAcertada = `border: 3px solid #494672; background-color: #E3DCDE; transition: 0.4s; padding: 15px; border-radius: 10px; width: 98%;`;
  const styleAlternativasNaoSelecionadas = `border-color: transparent; background-color: transparent; transition: none`;
  const textQuestaoCertaContainer = document.querySelector('#questaoCertaTextContainer');


  let arrChecked = Array.from(radioButtons);
  let arrDivQuestao = Array.from(divAlternativa);
  let arrDivNumeros = Array.from(numeroAlternativa);
  let arrLabelsAlternativas = Array.from(eachLabelAlternativa);

  
  for (let i = 0; i < arrChecked.length; i++) {
    arrChecked[i].addEventListener('change', function(){

      botaoAvancar.style = buttonAvancarEnabledStyle;

      if(arrChecked[i].checked){

        switch(i){
          case 0:
            arrDivQuestao[0].style = styleAlternativaSelecionada;
            arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
            arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
            break;

          case 1:
            arrDivQuestao[1].style = styleAlternativaSelecionada;
            arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
            arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
            break;

          case 2:
            arrDivQuestao[2].style = styleAlternativaSelecionada;
            arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
            arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
            break;
        }
        
      }
    })    
  }


  let arrayInputs = Array.from(radioButtons);

  //Verifica se usuário já acertou a questão atual.
  if(currentQuestoes[0].questaoFeitaCorreta === 'true'){
    botaoAvancarContainer.style.display = 'flex';
    botaoAvancar.style = buttonAvancarEnabledStyle;

    arrLabelsAlternativas.map((item)=>{
      if(item.dataset.label === 'true'){
        item.style.backgroundColor = '#FFF';
      }else{
        item.style.backgroundColor = '#FBF3EC';
      }
    });
    arrayInputs.map((item)=>{
      if(item.value === 'true'){
        item.checked = true;
      }
    });
    arrDivQuestao.map((item)=>{
      item.style.pointerEvents = 'none';
      
      if(item.dataset.value === 'true'){
        item.style = styleAlternativaAcertada;
        item.style.pointerEvents = 'none';
      }
    });
    arrDivNumeros.map((item)=>{
      if(item.dataset.check === 'true'){
        item.innerHTML = `<img src="https://apps.univesp.br/100-conceitos-contabilidade/assets/icone_certo.svg" style="height: 30px">`;
        item.style = `border: 0;`
      }else{
        item.style = `border: 2px solid #000`;
      }
    })
  }else if(currentQuestoes[0].questaoFeitaCorreta === 'false'){
    textQuestaoCertaContainer.style.display = 'none';
    numeroAlternativa.forEach(e=>{
      e.style = `border: 2px solid #000`;
    });
    eachLabelAlternativa.forEach(e=>{
      e.style.backgroundColor = '#FFF';
    });

      // Selecionando alternativas com os numeros do teclado
      document.addEventListener("keyup", function(event) {
        if (event.key === "1") {
          arrChecked[0].checked = true;
          arrChecked[1].checked = false;
          arrChecked[2].checked = false;
          botaoAvancar.style = buttonAvancarEnabledStyle;
          arrDivQuestao[0].style = styleAlternativaSelecionada;
          arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
        }

        if (event.key === "2") {
          arrChecked[1].checked = true;
          arrChecked[0].checked = false;
          arrChecked[2].checked = false;
          botaoAvancar.style = buttonAvancarEnabledStyle;
          arrDivQuestao[1].style = styleAlternativaSelecionada;
          arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
        }

        if (event.key === "3") {
          arrChecked[2].checked = true;
          arrChecked[0].checked = false;
          arrChecked[1].checked = false;
          botaoAvancar.style = buttonAvancarEnabledStyle;
          arrDivQuestao[2].style = styleAlternativaSelecionada;
          arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
        }
    });
  }


  function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

  //Questões corretas sempre inica com 0 quando o bloco é iniciado
  if(!questoesCorretasStorage || questoesCorretasStorage){
    questoesCorretas = 0; 
  }

  let arrayModifiedQuestoes = [];


  //Função que troca o conceito e as alternativas
  function chamaProximaQuestao(evt){

// Ajusta posicionamento da Tela em dispositivos menores
    if (window.matchMedia("(max-width:575px)").matches){
      window.scrollTo({
        top: 700,
        behavior: 'smooth'
      });
    }

    botaoAvancarContainer.style.display = 'flex';
    botaoAvancar.style = buttonAvancarDisabledStyle;
    textQuestaoCertaContainer.style.display = 'none';

    // Define inputsChecked como um Array vazio
    inputsChecked.splice([]);

    // Se alguma alternativa estiver selecionada alimenta inputsChecked
    arrayInputs.map((items)=>{
      if(items.checked){
        inputsChecked.push(items.checked)
      }
    })


    // Se NÃO houver alguma alternativa selecionada
    if(inputsChecked.length === 0){
      evt.preventDefault();
    }

    // Se houver alguma alternativa selecionada
    else{

      // Aimenta qtde de click
      click++;

      // verifica questao correta e cria e atualiza array das questões erradas
      for (let i = 0; i < radioButtons.length; i++) {

        if(radioButtons[i].checked){
  
          if(radioButtons[i].value === 'true'){
            questoesCorretas++;
            currentQuestoes[click - 1].questaoFeitaCorreta = 'true';
            
          }else{
            currentQuestoes[click - 1].questaoFeitaCorreta = 'false';
          }
          
          radioButtons[i].checked = false;
          arrDivQuestao[i].style = styleAlternativasNaoSelecionadas;
  
          let modifiedQuestoes = [
            {
              "questaoId": currentQuestoes[click - 1].questaoId,
              "titulo": currentQuestoes[click - 1].titulo,
              "questaoFeitaCorreta": currentQuestoes[click - 1].questaoFeitaCorreta,
  
              "numeros": [
                {"alternativaId": 1},
                {"alternativaId": 2},
                {"alternativaId": 3},
              ],
  
              "alternativas":[
                {
                  "ordem": Math.floor(Math.random() * 1000000),
                  "alternativaId": 1,
                  "questaoCorreta": currentQuestoes[click - 1].alternativas[0].questaoCorreta,
                  "questaoText": currentQuestoes[click - 1].alternativas[0].questaoText,
  
                },
          
                {
                  "ordem": Math.floor(Math.random() * 1000000),
                  "alternativaId": 2,
                  "questaoCorreta": currentQuestoes[click - 1].alternativas[1].questaoCorreta,
                  "questaoText": currentQuestoes[click - 1].alternativas[1].questaoText,
                },
          
                {
                  "ordem": Math.floor(Math.random() * 1000000),
                  "alternativaId": 3,
                  "questaoCorreta": currentQuestoes[click - 1].alternativas[2].questaoCorreta,
                  "questaoText": currentQuestoes[click - 1].alternativas[2].questaoText,
                }              
              ]
            }
          ]
  
          arrayModifiedQuestoes.push(...modifiedQuestoes);
        }
  
      }
  
      
      //Chama a proxima questão até os objetos acabarem
      if(click < currentQuestoes.length){
        embaralhaQuestao(click);
        
        conceito.innerHTML = currentQuestoes[click].titulo;
        for(let i = 0; i < currentQuestoes[click].alternativas.length; i++){
            alternativasClick[i].innerHTML = currentQuestoes[click].alternativas[i].questaoText;
            numeroAlternativa[i].innerHTML = i+1;
            radioButtons[i].value = currentQuestoes[click].alternativas[i].questaoCorreta;
            arrDivQuestao[i].dataset.value = currentQuestoes[click].alternativas[i].questaoCorreta;
            arrDivNumeros[i].dataset.check = currentQuestoes[click].alternativas[i].questaoCorreta;
            arrLabelsAlternativas[i].dataset.label = currentQuestoes[click].alternativas[i].questaoCorreta;
        }

        //Inserindo ilustras de forma aleatória
        const randomIlustra = getRandomItem(ilustras);
        const ilustraQuestaoArea = document.querySelector("#ilustraQuestaoContainer");
        ilustraQuestaoArea.innerHTML = ` <img src="${randomIlustra.ilustra}"> `;


        //Verifica se usuário já acertou a questão atual. Se sim, seta checked do input para true e coloca estilo disabled nas alternativas
        if(currentQuestoes[click].questaoFeitaCorreta === 'true'){
          textQuestaoCertaContainer.style.display = 'flex';
          botaoAvancarContainer.style.display = 'flex';
          botaoAvancar.style = buttonAvancarEnabledStyle;

          arrLabelsAlternativas.map((item)=>{
            if(item.dataset.label === 'true'){
              item.style.backgroundColor = '#FFF';
            }else{
              item.style.backgroundColor = '#FBF3EC';
            }
          });
          arrayInputs.map((item)=>{
            if(item.value === 'true'){
              item.checked = true;
            }
          });
          arrDivQuestao.map((item)=>{
            item.style.pointerEvents = 'none';
            if(item.dataset.value === 'true'){
              item.style = styleAlternativaAcertada;
              item.style.pointerEvents = 'none';
            }
          });
          arrDivNumeros.map((item)=>{
            if(item.dataset.check === 'true'){
              item.innerHTML = `<img src="https://apps.univesp.br/100-conceitos-contabilidade/assets/icone_certo.svg" style="height: 30px">`;
              item.style = `border: 0;`
            }else{
              item.style = `border: 2px solid #000`;
            }
          });
          
        }else if(currentQuestoes[click].questaoFeitaCorreta === 'false'){
          textQuestaoCertaContainer.style.display = 'none';

          numeroAlternativa.forEach(e=>{
            e.style = `border: 2px solid #000`;
          })

          arrDivQuestao.map((item)=>{
            item.style.pointerEvents = 'auto';
          });

          eachLabelAlternativa.forEach(e=>{
            e.style.backgroundColor = '#FFF';
          });
          
        }

      }

      // Quando objetos acabarem atualiza o localStorage de qtde de questoes certas e de questões (apenas com as respondidas erradas)
      if(click === currentQuestoes.length){
        localStorage.setItem(`questoesCorretasBloco${currentBloco}`, questoesCorretas);
        localStorage.setItem(`modifiedQuestoes${currentBloco}`, JSON.stringify(arrayModifiedQuestoes));
        localStorage.setItem('buttonIdStorage', currentBloco);
        localStorage.setItem(`blocoIniciado${currentBloco}`, true)
        window.location.href = 'https://apps.univesp.br/100-conceitos-contabilidade/pages/gabarito.html';
      }
      
    }
    
  }

  function embaralhaQuestao(n){
    currentQuestoes[n].alternativas.sort((a,b) => a.ordem - b.ordem);
  }
  
  //Setters
  botaoAvancar.addEventListener('click', chamaProximaQuestao);

  document.addEventListener('keyup', function(e){
    if(e.key === "Enter"){
      chamaProximaQuestao();
    }
  })


  // Selecionando alternativas com os numeros do teclado
  document.addEventListener("keyup", function(event) {
    if(currentQuestoes[click].questaoFeitaCorreta === 'false'){
      if (event.key === "1") {
        arrChecked[0].checked = true;
        arrChecked[1].checked = false;
        arrChecked[2].checked = false;
        botaoAvancar.style = buttonAvancarEnabledStyle;
        arrDivQuestao[0].style = styleAlternativaSelecionada;
        arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
        arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
      }
  
      if (event.key === "2") {
        arrChecked[1].checked = true;
        arrChecked[0].checked = false;
        arrChecked[2].checked = false;
        botaoAvancar.style = buttonAvancarEnabledStyle;
        arrDivQuestao[1].style = styleAlternativaSelecionada;
        arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
        arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
      }
  
      if (event.key === "3") {
        arrChecked[2].checked = true;
        arrChecked[0].checked = false;
        arrChecked[1].checked = false;
        botaoAvancar.style = buttonAvancarEnabledStyle;
        arrDivQuestao[2].style = styleAlternativaSelecionada;
        arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
        arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
      }
    }
    
});

});


const subtituloPagina = document.querySelector('.subtituloPerguntas');
if (window.matchMedia("(max-width:1199px)").matches){
  subtituloPagina.innerHTML = 'Você pode responder clicando.';
}

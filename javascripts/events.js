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

  //Variáveis constantes globais
  const areaBlocos = document.querySelector('#blocosArea');
  const btnReiniciarEimprimir = document.querySelector(".btnReiniciarEImprimir");
  const BASE_URL_IMG = "https://apps.univesp.br/100-conceitos-contabilidade/assets";


  // Define array que irá conter as qtdes de questoes corretas de cada bloco
  let arrQtdeQuestoesCorretas = [];

  // Percorre qtde de blocos existentes (iniciamos i valendo 1 para "i" valer de 1 a 10 e nao de 0 a 9)
  for (let i = 1; i < blocosData.length + 1; i++) {

    // Se não existir questoes corretas no localStorage, cria storage de questões corretas para cada bloco valendo 0 cada ums
    if(!localStorage.getItem(`questoesCorretasBloco${i}`)){
      localStorage.setItem(`questoesCorretasBloco${i}`, 0)
    }
    
    // Se existir, pega questoes corretas do storage, transforma em numero e alimenta array de questoes corretas
    else{
      let getQtdeQuestoesCorretas = localStorage.getItem(`questoesCorretasBloco${i}`);
      let QtdeQuestoesCorretas = parseInt(getQtdeQuestoesCorretas);
      arrQtdeQuestoesCorretas.push(QtdeQuestoesCorretas);
    }
  }

  // Printa na tela a qtde de questoes corretas de cada bloco de acordo com o array de qtde de questoes corretas criado acima
  for (let i = 0; i < blocosData.length; i++) {
    if(arrQtdeQuestoesCorretas[i] > 0){
      blocosData[i].questoes_certas = arrQtdeQuestoesCorretas[i];
    }

    if(localStorage.getItem(`blocoIniciado${i+1}`)){
      blocosData[i].iniciado = true;
    }
  }
  
  

  ////Arrays - Soma de questões////
  let somaQuestoesCertas = [];
  let arrTodasQuestoes = [];
  let somaQuestoesBlocosIniciados = [];

  //define a qtde de blocos totais de acordo com o json
  let blocosTotais = blocosData.length;
  
  //Definindo blocos iniciados no início da interação
  let blocosExplorados = 0;

  //Trazendo os dados do Array de blocos de questões
  blocosData.map((items)=>{
    //seta as moedas de acordo com as questões certas
    items.moeda_img = `${BASE_URL_IMG}/moeda_${items.questoes_certas}.svg`;

    // Aumenta qtde de bloco explorado quando usuário finaliza um bloco
    if(items.iniciado){
      blocosExplorados++;
    }

    // Muda cor de fundo do bloco quando explorado
    if(items.questoes_certas > 0){
      items.color_bloco = '#F4E6C7';
      items.border = '3px solid #E2B77A';
    }

    //Mostra icone certo quando atinge Totalidade de questões certas        
    if(items.questoes_certas === items.qtde_questoes){
      items.certo_img = 'https://apps.univesp.br/100-conceitos-contabilidade/assets/icone_certo.svg';
    }

    //alimentando array de qtde de questões certas
    somaQuestoesCertas.push(items.questoes_certas);

    //alimentando array de qtde de questões
    arrTodasQuestoes.push(items.qtde_questoes);

    //alimentando array de questões dos blocos iniciados
    //Se o bloco foi iniciado
    if(items.questoes_certas > 0){
      somaQuestoesBlocosIniciados.push(items.qtde_questoes);
    }

    //Mostra os blocos de questões na tela
    let allBlocos = criaBloco(items.bloco, items.name_bloco, items.moeda_img, items.bloco, items.questoes_certas, items.certo_img, items.color_bloco, items.qtde_questoes, items.class_bloco, items.border);
    areaBlocos.appendChild(allBlocos);
  })

  //Realiza soma das quesões certas
  let resultadoSomaQuestoesCertas = somaQuestoesCertas.reduce((soma, i) => soma + i, 0);

  //Realiza soma de todas as questões
  let totalQuestoes = arrTodasQuestoes.reduce((soma, i) => soma + i, 0);

  //Realiza soma de todas as questões dos blocos iniciados
  let questoesBlocosIniciados = somaQuestoesBlocosIniciados.reduce((soma, i) => soma + i, 0);

   //Definindo a frase da quantidade de questões certas
   let qtdeCertas = document.querySelector('.fraseQtdCertas');

   //1 a 99 questões certas
   if(resultadoSomaQuestoesCertas > 0 && resultadoSomaQuestoesCertas < totalQuestoes){
     qtdeCertas.innerText = `${resultadoSomaQuestoesCertas} DE ${questoesBlocosIniciados} ACERTOS NAS QUESTÕES RESPONDIDAS`;

    //100 questões certas
   }else if(resultadoSomaQuestoesCertas === totalQuestoes){
     qtdeCertas.innerText = `VOCÊ ACERTOU TODAS AS ${totalQuestoes} QUESTÕES!`;
   }

   //Definindo a frase de blocos explorados
   let blocosConcluidos = document.querySelector('.fraseBlocosConcluidos');
   let blocosFaltam = blocosTotais - blocosExplorados;

   //Se apenas 1 bloco foi explorado
   if(blocosExplorados > 0 && blocosExplorados < 2){
     blocosConcluidos.innerText = `${blocosExplorados} BLOCO EXPLORADO. AINDA FALTAM ${blocosFaltam}!`;

     //Se mais de 1 bloco foi explorado
   }else if(blocosExplorados > 1 && blocosExplorados < blocosTotais - 1){
     blocosConcluidos.innerText = `${blocosExplorados} BLOCOS EXPLORADOS. AINDA FALTAM ${blocosFaltam}!`;

     //Se 9 blocos foram explorados
   }else if(blocosExplorados === blocosTotais - 1){
    blocosConcluidos.innerText = `${blocosExplorados} BLOCOS EXPLORADOS. AINDA FALTA ${blocosFaltam}!`;

     //Se todos os blocos foram explorados
   }else if(blocosExplorados === blocosTotais){
     blocosConcluidos.innerText = 'TODOS OS BLOCOS FORAM EXPLORADOS!';
     
   }

   //mostra div dos botões
   const botaoImprimir = document.querySelector("#botaoImprimir");

   if(blocosExplorados > 0 && blocosExplorados <= blocosTotais){
    btnReiniciarEimprimir.style.display = 'flex';
   }

   if(blocosExplorados === blocosTotais){
    botaoImprimir.style.display = 'block';
   }

   //alimenta barra de progresso das questões certas
   let questoesProgress = document.querySelector("#questoesCertasProgress");
   let porcentagemQuestõesCertas = resultadoSomaQuestoesCertas / questoesBlocosIniciados * 100;
   questoesProgress.style.width = `${porcentagemQuestõesCertas}%`;

   //alimenta barra de progresso dos blocos finalizados
   let blocosProgress = document.querySelector("#blocosFinalizadosProgress");
   let porcentagemBlocos = blocosExplorados / blocosTotais * 100;
   blocosProgress.style.width = `${porcentagemBlocos}%`;

   //Reinicia todos os blocos
   $('#botaoReiniciar').click(function(){
    storages.map((items)=>{
      localStorage.removeItem(items);
    })
    
    document.location.reload(true);
   })


   // Mostra modal de cookies se ainda não existir no local storage
   if(!localStorage.getItem('cookiesStorage')){
    $("#exampleModalCenter").modal('show');
   }

   const cookies = document.querySelectorAll('.event-cookie');

   cookies.forEach(e=>{
    e.addEventListener('click', function(){
      localStorage.setItem('cookiesStorage', true);
    })
   })
   
  
})
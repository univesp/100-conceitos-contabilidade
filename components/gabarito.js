const BASE_URL_GABARITO = 'https://apps.univesp.br/100-conceitos-contabilidade/';

let criaGabarito = function(iconeResposta, nomeConceito, textoConceito){
  let itemGabarito = document.createElement("tr");
  itemGabarito.classList.add("trBorder");

  itemGabarito.innerHTML = `
    <td class="tdAcerto">
      <figure class="imgGabaritoCerto">
          <img src="${BASE_URL_GABARITO}/assets/${iconeResposta}.svg" alt="Ilustração do símbolo de resposta correta" class="imgGabaritoCerto">
      </figure>
    </td>
    <td class="tdConceito">${nomeConceito}</td>
    <td class="tdRespostaCerta">${textoConceito}</td>
  `;


  return itemGabarito;
}

let criaGabaritoMobile = function(iconeGabarito, numConceito, textConceito){
  let bodyMobileGabarito = document.createElement("div");
  bodyMobileGabarito.classList.add("gabarito-mobile-body");

  let iconeConceitoContainer = document.createElement("div");
  iconeConceitoContainer.classList.add("icone-conceito-mobile");
  iconeConceitoContainer.innerHTML = `
    <img src="${BASE_URL_GABARITO}/assets/${iconeGabarito}.svg" alt="">
    <span>Conceito ${numConceito}</span>
  `;

  let textConceitoContainer = document.createElement("div");
  textConceitoContainer.innerHTML = `<p class="texto-conceito-gabarito-mobile">${textConceito}</p>`;

  bodyMobileGabarito.appendChild(iconeConceitoContainer);
  bodyMobileGabarito.appendChild(textConceitoContainer);

  return bodyMobileGabarito;
}
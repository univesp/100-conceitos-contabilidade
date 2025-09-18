let footerPage = document.querySelector('#slotFooter');

let footerContainer = document.createElement("div");
footerContainer.classList.add("container");
footerContainer.classList.add("d-flex");
footerContainer.classList.add("justify-content-between");

footerContainer.innerHTML = `
  <div class="cred-rea">
  <!-- Comente em caso de adaptação do REA -->
    <div>Recurso Educacional Aberto (REA) desenvolvido pela <a href="https://univesp.br/" target="blank">Univesp</a>, disponível sob licença <a href="http://apps.univesp.br/common/license_MIT_2020.txt" target="_blank">MIT</a>.
    Você pode utilizá-lo, compartilhá-lo e modificá-lo.</div>
    <div><button class="btn btn-link" data-toggle="modal" data-target="#creditos">Créditos</button></div>
    <div><a href="#" target="_blank" aria-label="GitHub" style="white-space:nowrap;">GitHub <i class="fab fa-github"></i></a></div>
    <div>Compartilhe: <div class="sharing"></div></div>

  <!-- Descomente em caso de adaptação do REA -->
  <!-- <p>
        <span>Recurso Educacional Aberto (REA) adaptado por SEU NOME.</span>
        <span><a href="#">Versão original da Univesp</a></span>
<      /p> -->
  </div>

  <!-- FORMULÁRIOS DE AVALIAÇÃO -->
  <div class="aval-rea d-flex">
    <!-- AVALIAR RECURSO -->
    <!-- Atualizar "Nome+do+Recurso" -->
    <a class="btn btn-secondary" href="https://forms.office.com/r/auc9kbyuwA" target="_blank">Avaliar este recurso</a>
    <!-- REPORTAR ERRO -->
    <!-- Atualizar "Nome+do+Recurso" -->
    <a class="btn btn-secondary" href="https://forms.office.com/r/BU3heRJ9ZP" target="_blank">Reportar erro</a>
  </div>
`;

footerPage.appendChild(footerContainer);
let navPage = document.querySelector('#slotNav');

let navContainer = document.createElement("div");
navContainer.classList.add("container");
navContainer.setAttribute('style', `style="padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;`);
navContainer.setAttribute('id', 'containerNav')
navContainer.innerHTML = `
  <!-- Logo -->
  <div class="logo">
    <a class="pularNavegacao" href="#conteudoPrincipal">Pular para Conteúdo Principal</a>
    <a href="https://univesp.br/" target="_blank">
      <img src="https://apps.univesp.br/common/traco-negativa.svg" alt="Link para site institucional. Logotipo da universidade formado pela palavra Univesp, sendo a letra V estilizada.">
      <!-- outras opções de img src: colorida-negativa.svg, traco-positiva.svg, traco-negativa.svg -->
    </a>
  </div>
  <!-- Compartilhamento -->
  <ul class="nav justify-content-end">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <i class="material-icons" aria-label="Opções de Compartilhamento">share</i>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <div class="sharing"></div>
      </div>
    </li>
  </ul>
`;

navPage.appendChild(navContainer);
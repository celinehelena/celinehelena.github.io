/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

function Requisicao(){
    
    var email = document.getElementById("email").value;
    var nome = document.getElementById("name").value;
    var element = document.getElementById("sucess");
    console.log(email + "  "+nome)
    fetch(
        "https://0gu4q3l2o0.execute-api.sa-east-1.amazonaws.com/default/curso-incubatech",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            nome: nome,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          //alert(
          //  `${response.message}\nNome: ${response.dados.nome}\ne-mail: ${response.dados.email}\nMatricula: ${response.dados.matricula}`
          //);
          element.innerHTML = "<br>"+response.message + "<br> Nome: "+ response.dados.nome+ "<br>e-mail: "+response.dados.email + "<br> Matrícula: " + response.dados.matricula;
        });
}







window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




window.addEventListener('scroll', function() {
    let header = document.querySelector('header#cabecalho');
    let logo = document.querySelector('img#cabecalho-logo');
    let linkGithub = document.querySelector('a#nav-github');
    let linkLinkedin = document.querySelector('a#nav-linkedin')
    let linkCurriculo = document.querySelector('a#nav-curriculo')


    if (window.scrollY > 0){
        header.style.background = '#00A7C1';
        logo.src = 'css/img/logo.png';
        linkGithub.style.color = 'white'
        linkLinkedin.style.color = 'white'
        linkCurriculo.style.color = 'white'
    } else {
        header.style.background = 'transparent';
        logo.src = 'css/img/logo_azul.png';
        linkGithub.style.color = '#00A7C1';
        linkLinkedin.style.color = '#00A7C1';
        linkCurriculo.style.color = '#00A7C1';
    }
});
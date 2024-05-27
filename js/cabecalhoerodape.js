window.addEventListener('scroll', function() {
    let header = document.querySelector('header#cabecalho');
    let logo = document.querySelector('img#cabecalho-logo');
    let linkGithub = document.querySelector('a#nav-home');
    let linkLinkedin = document.querySelector('a#nav-sobremim');
    let linkCurriculo = document.querySelector('a#nav-projeto');
    
    // VARIAVEIS CSS
    let root = document.documentElement;
    let corfundoheader = getComputedStyle(root).getPropertyValue('--fundoheader').trim();
    let cortextobranco = getComputedStyle(root).getPropertyValue('--cortextobranco').trim();
    let cortextoazul = getComputedStyle(root).getPropertyValue('--cortextoazul').trim();

    if (window.scrollY > 0){
        header.style.background = corfundoheader;
        logo.src = 'css/img/logo.png';
        linkGithub.style.color = cortextobranco;
        linkLinkedin.style.color = cortextobranco;
        linkCurriculo.style.color = cortextobranco;
    } else {
        header.style.background = 'transparent';
        logo.src = 'css/img/logo_azul.png';
        linkGithub.style.color = cortextoazul;
        linkLinkedin.style.color = cortextoazul;
        linkCurriculo.style.color = cortextoazul;
    }
});
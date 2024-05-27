let botaoescuro = document.querySelector('button#modoescuro');
botaoescuro.addEventListener('click', escuro);

function escuro(){
        let botaoescuro = document.querySelector('button#modoescuro');
        let botaoclaro = document.querySelector('button#modoclaro');
        botaoescuro.style.display = 'none';
        botaoclaro.style.display = 'block';
        
        let body = document.querySelector('body')
        body.style.transition = '1s ease-in-out'
        body.style.backgroundColor = '#292929'
        
        let p = document.querySelectorAll('p')
        p.forEach(text => {
            text.style.color = 'white';  
        });

        let legenda = document.querySelector('label#projeto-legenda')
        let comentario = document.querySelector('p#projeto-comentario')
        legenda.style.color = 'black'
        comentario.style.color = 'black'
    }
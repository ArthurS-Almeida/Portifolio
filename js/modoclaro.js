let botaoclaro = document.querySelector('button#modoclaro');
botaoclaro.addEventListener('click', claro);

function claro(){
        let botaoescuro = document.querySelector('button#modoescuro');
        let botaoclaro = document.querySelector('button#modoclaro');
        botaoescuro.style.display = 'block';
        botaoclaro.style.display = 'none';
        
        let body = document.querySelector('body')
        body.style.transition = '1s ease-in-out'
        body.style.backgroundColor = '#ffffff'
        
        let p = document.querySelectorAll('p')
        p.forEach(text => {
            text.style.color = 'black';  
        });
    }

    

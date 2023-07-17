const buttons = document.querySelectorAll('.btn');
const pantalla = document.querySelector('#screen');

let last_oper = '';

buttons.forEach(button => (
    button.addEventListener('click', ()=>{

        botonApretado = button.textContent;

        if(botonApretado === '='){

            pantalla.textContent = eval(pantalla.textContent);

        }else if(botonApretado === 'C'){
            pantalla.textContent = '0';
        }else if(botonApretado === 'CE'){
            if(pantalla.textContent.length > 1){
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }else{
                pantalla.textContent = '0';
            }
        }else{
            if(pantalla.textContent === '0'){
                pantalla.textContent = botonApretado;
                console.log(botonApretado);
            }else{
                req_res = false;
                pantalla.textContent += botonApretado;
            }
        }
    }))
)
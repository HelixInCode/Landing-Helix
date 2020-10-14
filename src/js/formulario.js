//-----------------VARIABLES
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#correo');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#btnEnviar');
const img = document.querySelector('#img-enviado');

//-----------------EVENT LISTENERS
eventListeners();

function eventListeners() {
    //inicia la app y desabilita el boton enviar
    document.addEventListener('DOMContentLoaded', iniciaApp);

    //validar campos
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //habilitar boton enviar
    btnEnviar.addEventListener('click', enviarEmail);

}

//----------------FUNCIONES

function iniciaApp(){
    //desabilita btnEnviar
    btnEnviar.disabled = true;
}

function validarCampo(){
    validarLongitud(this);

    let correcto;

    //validar solo email
    if(this.type === 'email'){
        validarEmail(this);
    }

    if (email.value.length > 3 && nombre.value.length > 3 && mensaje.value.length > 3){
        btnEnviar.disabled = false;
    }
}

function enviarEmail(e){
    e.preventDefault();
    
    console.log('email enviado');
    setTimeout(function () {
        img.style.display = 'block';
    }, 2000);

    

}


function validarLongitud(campo){
    if(campo.value.length > 3){
        campo.style.borderBottom = '1px solid green';
    }else{
        campo.style.borderBottom = '1px solid red';
    }
}

function validarEmail(email){
    let position = email.value.indexOf('@');

    if(position !== -1){
        email.style.borderBottom = '1px solid green';
        correcto = true;
    }else{
        email.style.borderBottom = '1px solid red';
    }
}
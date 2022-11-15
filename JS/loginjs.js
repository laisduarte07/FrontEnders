/* VALIDAÇÃO DO EMAIL */

/*const validaEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};  */


const btn = document.querySelector("btn-login");
let email = document.querySelector("email");
let senha = document.querySelector("senha");

btn.addEventListener('click', function(e){
    e.preventDefault()

    let senhas = senha.value;
    let emailp = email.value;
    if(email.includes("@") && emailp.includes(".com") && senhas.length >= 6){
        var url = new Array();
        url[0]="serviços.html";

        return window.location=url[0];
    } else {
        alert ("digite seu email com '@ e .com' e senha de no min 8 dígitos")
    }
})
 

/* Botão enviar - página de Recuperação */

function enviar(){
    alert('Email enviado')
}

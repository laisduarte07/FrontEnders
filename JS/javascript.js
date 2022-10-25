/* VALIDAÇÃO DO EMAIL */

const validaEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};
 

/* Botão enviar - página de Recuperação */

function enviar(){
    alert('Email enviado')
}

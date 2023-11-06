function validar(){
    const campoa = document.getElementById("Campo a");
    const campob = document.getElementById("Campo b");

if(campob.value>campoa.value){
    mensagem.textContent = "formulario validado";
    mensagem.style.color ="green";
}
else{
    mensagem.textContent = "formulario invalidado";
    mensagem.style.color ="red";
    limparCampos()
}

}

function limparCampos () {
    campoa.value = "";
    campob.value = "";
   
}
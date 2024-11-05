const validForm = function (event) {
    var inputName = document.querySelector('#name');
    var inputPhone = document.querySelector('#phone');
    var inputEmail = document.querySelector('#email')

    if (inputName.value === "") {
        alert("Preencha seu Nome");
        inputName.focus();
        return false;
    }

    if (inputPhone.value === "") {
        alert("Preencha seu telefone");
        inputName.focus();
        return false;
    }

    if (inputEmail.value === "") {
        alert("Preencha seu Email");
        inputName.focus();
        return false;
    }

    alert("Mensagem Enviada");
}
// Adicione esse código ao seu arquivo index.js

function validForm() {
    // Valide os campos do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name === '' || phone === '' || email === '') {
        alert('Preencha todos os campos!');
        return false;
    }

    // Enviar formulário
    // Implemente sua lógica de envio aqui
    return true;
}
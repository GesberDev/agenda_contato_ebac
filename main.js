const form = document.getElementById("form-agenda");
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");
    const inputEmailContato = document.getElementById("email-contato");

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputEmailContato.value}</td>`;
    linha += `<td><img src="./images/correto.png"></td>`;
    linha += '</tr>';

    linhas += linha;
    
    inputNomeContato.value = ''; //it cleans the form
    inputNumeroContato.value = '';
    inputEmailContato.value = '';
}

function atualizaAgenda() {
    const linhasAgenda = document.querySelector('tbody');
    linhasAgenda.innerHTML = linhas;
}

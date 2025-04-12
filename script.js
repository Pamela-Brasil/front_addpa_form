const formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); /* .preventDefault leva em consideração apenas o primeiro clique do usuário, desconsiderando outros cliques */
    let nome = formulario.nome.value;
    let celular = formulario.celular.value;

    console.log(nome, celular)
    alert("O nome é "+ nome +" e o contato é "+ celular);
    alert('O nome é ${nome} e o contato é ${celular}');
})
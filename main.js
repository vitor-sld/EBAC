
$('form').submit(function (e) {
    e.preventDefault();


    const tarefa = $('#nome-tarefa').val()
    const linha = $(`<li> ${tarefa} </li>`).appendTo('#tabela');
    
    $(linha).click(function () {
        $(linha).css('text-decoration', 'line-through');
})

});
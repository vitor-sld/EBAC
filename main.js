
const linhas = ``
$('document').ready(function () {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('form').submit(function (e) {
        e.preventDefault();

        $('form').validate({
            rules:
            {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                cpf: {
                    required: true
                },
                endereco: {
                    required: true
                },
                cep: {
                    required: true
                }
            },
            messages: {
                nome: `<h4 class="erroMensagem">Digite um nome válido</h4>`,
                email: `<h4 class="erroMensagem">Digite um email válido</h4>`,
                telefone: `<h4 class="erroMensagem">Digite um telefone válido</h4>`,
                cpf: `<h4 class="erroMensagem">Digite um CPF válido</h4>`,
                endereco: `<h4 class="erroMensagem">Digite um endereço válido</h4>`,
                cep: `<h4 class="erroMensagem">Digite um CEP válido</h4>`
            },
            submitHandler: function () {

                $('aside').css('display', 'block')
                const liInserida = $(`<ul>
                    <li>${$('#nome').val()}</li>
                    <li>${$('#telefone').val()}</li>
                    <li>${$('#email').val()}</li>
                    <li>${$('#cpf').val()}</li>
                    <li>${$('#endereco').val()}</li>
                    <li>${$('#cep').val()}</li>
                    <ul>`).appendTo('ul')

                $('#nome').val('')
                $('#telefone').val('')
                $('#email').val('')
                $('#cpf').val('')
                $('#endereco').val('')
                $('#cep').val('')
            }
        })
    })


})
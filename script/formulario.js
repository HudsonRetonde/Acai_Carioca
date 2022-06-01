function meuFormulario () {
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    const dados = [];

    function recebeEventoFormulario (evento) {
        evento.preventDefault();

        const nomesobrenome = form.querySelector('#nomesobrenome');
        const email = form.querySelector('#email');
        const telefone = form.querySelector('#telefone');
        const mensagem = form.querySelector('#mensagem');
        const radioEmail = form.querySelector('#radio-email');
        const radioTelefone = form.querySelector('#radio-telefone');
        const whatsappEmail = form.querySelector('#whatsapp-email');
        const manha = form.querySelector('#manha');
        const tarde = form.querySelector('#tarde');
        const noite = form.querySelector('#noite');
        const checbox = form.querySelector('#checbox');

        dados.push({
            nomesobrenome: nomesobrenome.value,
            email: email.value,
            telefone: telefone.value,
            mensagem: mensagem.value,
            radioEmail: radioEmail.value,
            radioTelefone: radioTelefone.value,
            whatsappEmail: whatsappEmail.value,
            manha: manha.value,
            tarde: tarde.value,
            noite: noite.value,
            checbox: checbox.value
        });

        console.log(dados);

        resultado.innerHTML += `<p>${nomesobrenome.value} ${email.value} ${telefone.value} ${mensagem.value} ${radioEmail.value} ${radioTelefone.value} ${whatsappEmail.value} ${manha.value} ${tarde.value} ${noite.value} ${checbox.value}</p>`
    }

    form.addEventListener('submit', recebeEventoFormulario);
}

meuFormulario();
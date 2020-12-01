var username = $("input[placeholder='username']")[0]
var email = $("input[placeholder='email']")[0]
var password = $("input[placeholder='password']")[0]

$(".alert-danger").hide();

$(".btn-primary").click(function () {
    if (username.value !== "" && email.value !== "" && password.value !== "") {
        $.post('/api/usuarios', { Nome: username.value, Login: username.value, Senha: password.value, Categoria: 'adm' })
            .done(_ => {
                $(".alert-danger").hide();
                location.href = "/login";
            })
            .fail(_ => $(".alert-danger").show());
    }
})
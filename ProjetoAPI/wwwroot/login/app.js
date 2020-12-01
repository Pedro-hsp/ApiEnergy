var username = $("input[placeholder='username']")[0]
var password = $("input[placeholder='password']")[0]

$(".alert-danger").hide();

$(".btn-primary").click(function() {
    $.get("/api/usuarios", users => {
        for (let i = 0; i < users.length; i++) {
            const validate = users.find(user => user.login == username.value && user.senha == password.value)

            if (validate) {
                location.href = '../';
                $('.alert-danger').hide();
                localStorage.setItem('username', username.value)
            } else {
                $('.alert-danger').show();
            }
        }
    })
})
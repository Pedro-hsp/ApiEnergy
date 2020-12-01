if (localStorage.getItem("username")) {
    $("#logado").show();
    $("#nao-logado").hide();
} else {
    $("#logado").hide();
    $("#nao-logado").show();
}

$(".btn-danger").click(_ => {
    localStorage.removeItem("username");
})
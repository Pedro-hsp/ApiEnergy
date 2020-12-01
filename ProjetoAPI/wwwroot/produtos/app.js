var prodNomes = new Array();
var prodPrecos = new Array();

function addToCart(prodNome, prodPreco) {
    var carrinhoProdutos = JSON.parse(localStorage.getItem('carrinho'))

    //if (localStorage.getItem('carrinho')) {
    //    for (let i = 0; i < carrinhoProdutos.prodNome.length; i++) {
    //        prodNomes.push(carrinhoProdutos.prodNome[i])
    //        prodPrecos.push(carrinhoProdutos.prodPreco[i])
    //    }
    //}

    prodNomes.push(prodNome.innerText);
    prodPrecos.push(prodPreco.innerText);

    var carrinho = {
        prodNome: prodNomes,
        prodPreco: prodPrecos
    };

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    console.log(carrinhoProdutos)
}

$(document).ready(function () {
    $.get("/api/produtos", produtos => {
        for (var i = 0; i < produtos.length; i++) {
            $(".row").append(`
            <div class="col-sm">
                <div class="card m-3" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="">
                    <div class="card-body">
                        <h5 class="card-title prodNome" id="prodNome">${produtos[i].nome}</h5>
                        <p class="card-text prodPreco" id="prodPreco">${produtos[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p

                        <div class="btn-group" role="group" aria-label="Basic example">
                            <a href="#" onclick="addToCart($('.prodNome')[${i}], $('.prodPreco')[${i}])" class="btn btn-primary" style="background-color: black">Add to cart</a>
                            <a href="#" class="btn btn-primary ml-2 pr-3">Detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
            `)
        }
    })
})
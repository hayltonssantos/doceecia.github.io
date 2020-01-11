var produto = document.querySelectorAll(".produtos");

var botaoAdicionar = document.querySelector("#adicionar-produto");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var produto = obtemDoForm(form);
    
    var produtoTr = criarTr(produto);

    var tabela = document.querySelector("#tabela-produtos");
    
    tabela.appendChild(produtoTr);
    
    form.reset();
});
    

function obtemDoForm (form){
    var produtos = {
        nome: form.nome.value,
        tamanho: form.tamanho.value,
        valor: form.valor.value
    }
    
    return produtos;
}

function criarTr (produto){
    
    var produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto");
    
    produtoTr.appendChild(criarTd(produto.nome, "info-nome"));
    produtoTr.appendChild(criarTd(produto.tamanho, "info-tamanho"));
    produtoTr.appendChild(criarTd(produto.valor, "info-valor"));
    
    return produtoTr;
}

function criarTd (dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
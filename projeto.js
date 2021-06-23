function mascara(src, mask) {
    var i = src.value.length;
    var saida = "#";
    var texto = mask.substring(i)
    console.log(texto.substring(0, 1));
    if (texto.substring(0, 1) != saida) {
       src.value += texto.substring(0, 1);
    }
}

function validarForm() {
    var nomeOk = true;
    var nascimentoOk = true;
    var rgOk = true;
    var cpfOk = true;
    var celularOk = true;
    var cidadeOk = true;
    var ufOk = true;

    var nome = document.getElementById("campoNome").value;
    var nascimento = document.getElementById("campoNascimento").value;
    var rg = document.getElementById("campoRG").value;
    var cpf = document.getElementById("campoCPF").value;
    var celular = document.getElementById("campoCelular").value;
    var cidade = document.getElementById("campoCidade").value;
    var uf = document.getElementById("campoUF").value;

    if (nome == null || nome == "" ){
        document.getElementById("spanNome").innerHTML = 'Campo obrigatório';
        nomeOk = false;
    }

    if (nascimento == null || nascimento == "" ){
        document.getElementById("spanNascimento").innerHTML = 'Campo obrigatório';
        nascimentoOk = false;
    }

    if (rg == null || rg == "" ){
        document.getElementById("spanRG").innerHTML = 'Campo obrigatório';
        rgOk = false;
    } 

    if (cpf == null || cpf == "" ){
        document.getElementById("spanCPF").innerHTML = 'Campo obrigatório';
        cpfOk = false;
    }

    if (celular == null || celular == "" ){
        document.getElementById("spanCelular").innerHTML = 'Campo obrigatório';
        celularOk = false;
    }

    if (cidade == null || cidade == "" ){
        document.getElementById("spanCidade").innerHTML = 'Campo obrigatório';
        cidadeOk = false;
    }

    if (uf == null || uf == "" ){
        document.getElementById("spanUF").innerHTML = 'Campo obrigatório';
        ufOk = false;
    }

    var idadeOk = validaIdade();

    return (nomeOk && nascimentoOk && rgOk && cpfOk && celularOk && cidadeOk && ufOk && idadeOk);
}


function calculaIdade(){
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var nascParts = (document.getElementById("campoNascimento").value).split('-');
    var diaNasc = nascParts[2];
    var mesNasc = nascParts[1];
    var anoNasc = nascParts[0];

    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 
    if(mesAtual < mesNasc){
        idade--; 
    } 
    else {
        if(mesAtual == mesNasc){ 
            if(dataAtual.getDate() < diaNasc ){ 
            idade--; 
            }
        }
    }
    return idade;

}

function validaIdade(){
    var idadeOk = true;
    var idade = calculaIdade();
    if (idade < 15 || idade > 25) {
        document.getElementById("spanIdade").innerHTML = 'O projeto é restrito para jovens de 15 a 25 anos';
        idadeOk = false;
    }
    return idadeOk;
}

function botaoLimpar() {
    document.getElementById("spanNome").innerHTML=null;
    document.getElementById("spanNascimento").innerHTML=null;
    document.getElementById("spanIdade").innerHTML=null;
    document.getElementById("spanRG").innerHTML=null;
    document.getElementById("spanCPF").innerHTML=null;
    document.getElementById("spanCelular").innerHTML=null;
    document.getElementById("spanCidade").innerHTML=null;
    document.getElementById("spanUF").innerHTML=null;
}

function limpaSpanNome(){
    document.getElementById("spanNome").innerHTML=null;
}

function limpaSpanNascimento(){
    document.getElementById("spanNascimento").innerHTML=null;
}

function limpaSpanRG(){
    document.getElementById("spanRG").innerHTML=null;
}

function limpaSpanCPF(){
    document.getElementById("spanCPF").innerHTML=null;
}

function limpaSpanCelular(){
    document.getElementById("spanCelular").innerHTML=null;
}

function limpaSpanNomeMae(){
    document.getElementById("spanCidade").innerHTML=null;
}

function limpaSpanNomePai(){
    document.getElementById("spanUF").innerHTML=null;
}

function limpaSpanIdade(){
    var idade = calculaIdade();
    if (idade > 15 && idade < 25) {
        document.getElementById("spanIdade").innerHTML=null;
    }
}

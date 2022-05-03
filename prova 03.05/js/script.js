function calc(){
    //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "manhã"){
        valor = 50;
    }
    else if (horario == "tarde"){
        valor = 100;
    }
    else{
        valor = 150;
    }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('filme').checked = false;
    document.getElementById('filmes').checked = false;
    document.getElementById('camiseta').checked = false;

   
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function trocafilme(){

    //entrada
    filme = document.getElementById('filme').value;
    

    //processamento
    if (filme == "sonic") {
        newFundo = "img/sonic.jpg";
        newFoto ="";
        titulo ="sonic";
        cor = "blue";

        altura = "85%";
        right = "0%";
        bottom = "-5%";
      }
    else if (filme == "vingadores") {
        newFundo = "img/vingadores.jpg";
        newFoto = "";    
        titulo = "vingadores";
        cor = "brown";

        altura = "90%";
        right = "5%";
        bottom = "-5%";
    }
    else if(filme == "titans"){
        newFundo = "img/jovenstitans.jpg";
        newFoto = "";    
        titulo = "jovens titans";
        cor = "green";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
    }

    else if(filme == "creed"){
        newFundo = "img/creed.jpg";
        newFoto = "";    
        titulo = "creed";
        cor = "white";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
    }

    else{
        newFundo = "";
        newFoto = "";    
        titulo = "";
        cor = "black";

        altura = "100%";
        right = "0%";
        bottom = "0%";
    }
 

    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;

}

function alerta(){
    alert("compra efetuada")
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}
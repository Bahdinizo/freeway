let yCarros= [36,90, 145, 200, 257, 310]
let xCarros= [525, 525, 525, 525, 525, 525]
let velocidadeCarros= [2, 4, 3, 2.5, 2, 4.5]
let comprimentoCarro= 65;
let alturaCarro= 48;
    
function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i],yCarros[i], comprimentoCarro, alturaCarro)
    }
}

function movimentaCarro(){
  for (let i = 0; i <imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicial(){
  for (let i = 0; i <imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}
function passouTodaTela (xCarros){
  return xCarros <-50;
}

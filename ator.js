let yAtor = 370;
let xAtor = 200;
let colisao = false;
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 25);
}

function podeSeMover (){
  return yAtor <370;
   
}
function movimentaAtor (){
  if (keyIsDown(UP_ARROW)){
      yAtor -=2;
    
      }
  if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
    yAtor +=2;
  } }
}
function voltaAtor(){
  if (yAtor < 14){
    yAtor = 363;
  }
}
function voltaParaPosicaoInicial (){
  yAtor=370;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i< imagemCarros.length; i = i+1){
    colisao = collideRectCircle(xCarros[i], yCarros[i],     comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
       if (colisao){
        voltaParaPosicaoInicial();
        somDaColisao.play();
        if (meusPontos > 0) {
        meusPontos -=1;
        } 
  } }
}


 function incluiPontos (){
   text (meusPontos, width/5, 28);
   textSize(30);
   fill (color(255,20,147));
   textAlign (CENTER);
   
 }

function marcaPontos(){
  if (yAtor < 16) { 
    meusPontos +=1;
    somDoPonto.play();
}
}

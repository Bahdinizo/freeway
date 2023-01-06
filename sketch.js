function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  voltaAtor();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}




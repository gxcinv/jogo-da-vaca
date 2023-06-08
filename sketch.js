function setup() {
  somDaTrilha.loop();
  createCanvas(600, 400);
}

 

function draw() {
  
  background(imagemEstrada);
  mostraAtor();
  movimentarCarros();
  mostraCarro();
  movimentarVaquinha();
  vefColisao ();
  exibaPontos();
}




  


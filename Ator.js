//Codigos do Ator

//Variaveis
let yAtor = 370;
let xAtor = 100;
let colisao = false;
let points = 0
//Função De Aparecer Ator
function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30, 30);
}

//Função Movimentar Ator
function movimentarVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (voltarAtor())
    yAtor += 3;
  }
  
  if (keyIsDown (LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown (RIGHT_ARROW)){
    xAtor += 3;
  }
}

//Função para verificar a colisao dos carros no personagem principal e suas consequencias. Foi pega do GitHub
function vefColisao (){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    colisao = collideRectCircle (xCarros [i], yCarros [i], 40, 25, xAtor, yAtor, 15 ) 
    if (colisao){
      xAtor = 100;
      yAtor = 370;
      somDaColisao.play ();
      if (points > 0){
      points -= 1;
      } 
    }
  }
}

//Função para exibir os pontos dos personagem principal
function exibaPontos () {
 textSize (25)
 textAlign (CENTER)
 fill (color (34,135,189))
 text (points, 112, 30) 
  if (yAtor <= 12) {
    points += 1
    somDoPonto.play ();
  } 

 if (yAtor <= 12) {
   yAtor = 370 
 }

} 
//Função para personagem nao sair da tela
function voltarAtor (){
  return yAtor < 370;
} 
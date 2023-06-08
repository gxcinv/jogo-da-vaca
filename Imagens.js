//Variaveis
let imagemEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;
//Pré Carregamento
function preload(){
  imagemEstrada = loadImage ("imagens/estrada.png")
  imagemDoAtor = loadImage ("imagens/ator-1.png")
  imagemCarro =  loadImage ("imagens/carro-1.png")
  imagemCarro2 = loadImage ("imagens/carro-2.png")
  imagemCarro3 = loadImage ("imagens/carro-3.png")
  imagemCarro4 = loadImage ("imagens/carro-2.png")
  imagemCarro5 = loadImage ("imagens/carro-1.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5];
  somDaTrilha = loadSound ("sons/trilha-1.mp3")
  somDaColisao = loadSound ("sons/colidiu.mp3")
  somDoPonto = loadSound ("sons/pontos.wav")
  
}
//Variaveis Carros
let yCarros = [265, 320, 50, 100, 210]
let xCarros = [600, 600, 600, 0 , 0]
let pontosCarrao = 0
//FUNÇÕES

//Função de Aparecer Carros
function mostraCarro(){
  for (let i = 0; i<imagemCarros.length; i += 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 40, 25);
  }
}
//Função de Movimentar os carros
function movimentarCarros(){
  
//Velocidade Carro 1
  xCarros[0] = xCarros[0] -3
  if (xCarros[0] <= 0) {
    xCarros[0] = 600 - xCarros[0]  
  }
  
//Velocidade Carro 2  
  xCarros[1] = xCarros[1] - 7
  if (xCarros[1] <= 0) {
    xCarros[1] = 600 - xCarros[1] 
  }
  
//Velocidade Carro 3  
  xCarros[2] -= 15
  if (xCarros[2] < -15) {
    xCarros[2] = 600 - xCarros[2]
  } 
  
//Velocidade Carro 4  
  xCarros[3] += 4.5
  if (xCarros[3] > 600) {
    xCarros[3] = 600 - xCarros[3] 
  }
  
//Velocidade Carro 5  
  xCarros[4] += 10
  if (xCarros[4] > 650) {
    xCarros[4] = 600 - xCarros[4]
  }
}


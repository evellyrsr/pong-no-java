// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25
let raioBolinha = diametroBolinha / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// desenho bolinha
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha); 
}

// movimentos da bolinha
function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

// colisão da bolinha com as bordas
  function colisãoBolinha(){
      if(xBolinha + raioBolinha > width ||
     xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1
}
  if(yBolinha + raioBolinha > height ||
     yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1
}
  }

// variáveis das raquetes
// minha raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

let colisao = false

// desenho raquetes
function mostraRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

// movimento da minha raquete
  function movimentoRaqueteMinha(){
  if(keyIsDown(UP_ARROW)){ 
  yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
  }
   }

// movimento da raquete oponente
// function movimentoRaqueteOpo(){

// }

// colisão bolinha com raquete
  function colisaoBolinhaRaquete(){
    if(xBolinha - raioBolinha < xRaquete + comprimentoRaquete
       && yBolinha - raioBolinha < yRaquete + alturaRaquete
       && yBolinha + raioBolinha > yRaquete){
      velocidadeXBolinha *= -1;
    }
  }
  
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  // movimentoBolinha();
  colisãoBolinha();
  mostraRaquete();
  movimentoRaqueteMinha();
  colisaoBolinhaRaquete();
  colisaoMinhaRaqueteBiblioteca();
  
}

function colisaoMinhaRaqueteBiblioteca(){
 colisao =
   collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if(colisao){
    velocidadeXBolinha *= -1
  }

}
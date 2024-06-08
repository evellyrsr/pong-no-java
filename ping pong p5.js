// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25
let raioBolinha = diametroBolinha / 2;

// velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

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

// variáveis da raquete
// minha raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

// raquete oponente
let xRaqueteOpo = 585
let yRaqueteOpo = 150
let comprimentoRaqueteOpo = 10
let alturaRaqueteOpo = 90

// desenho raquete
function mostraRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
  rect(xRaqueteOpo, yRaqueteOpo, comprimentoRaqueteOpo, alturaRaqueteOpo);
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
}

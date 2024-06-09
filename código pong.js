// BOLINHA

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
}}





// RAQUETES

// variáveis das raquetes
  // MINHA
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

// movimento da minha raquete
function movimentoRaqueteMinha(){
  if(keyIsDown(UP_ARROW)){ 
    yRaquete -= 8;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 8;
}}

  // OPONENTE
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// movimento da raquete oponente
function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

// desenho raquetes
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}





// COLISÃO

let colisao = false

function colisaoBolinhaRaquete(){
  if(xBolinha - raioBolinha < xRaquete + comprimentoRaquete
     && yBolinha - raioBolinha < yRaquete + alturaRaquete
     && yBolinha + raioBolinha > yRaquete){
    velocidadeXBolinha *= -1;
}}

function colisaoRaquetes(x, y){
 colisao =
   collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if(colisao){
    velocidadeXBolinha *= -1
}}





// SETUP JOGO

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentoBolinha();
  colisãoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaqueteMinha();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoBolinhaRaquete();
  colisaoRaquetes(xRaquete, yRaquete);
  colisaoRaquetes(xRaqueteOponente, yRaqueteOponente);
}

// nota
 console.log('nota: Há o mesmo bug (da bolinha quando colidi em uma certa parte da raquete), que acontecia no Scratch, acontecendo aqui. Ainda não sei o que é!');

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
// JOGADOR 1
function movimentoRaqueteMinha(){
  if(keyIsDown(87)){ 
    yRaquete -= 8;
  }
  if(keyIsDown(83)){
    yRaquete += 8;
}}

  // OPONENTE
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// movimento da raquete oponente
// JOGADOR 2 = LOCAL
function movimentoRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){ 
    yRaqueteOponente -= 8;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 8;
 }
}

// JOGADOR 2 = CPU
// function movimentoRaqueteOponente(){
//   velocidadeYOponente = yBolinha -yRaqueteOponente - comprimentoRaquete / 2 - 30;
//   yRaqueteOponente += velocidadeYOponente;
// }

// desenho raquetes
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

// COLISÃO

let colisao = false

// colisão bolinha com minha raquete
function colisaoBolinhaRaquete(){
  if(xBolinha - raioBolinha < xRaquete + comprimentoRaquete
     && yBolinha - raioBolinha < yRaquete + alturaRaquete
     && yBolinha + raioBolinha > yRaquete){
    velocidadeXBolinha *= -1;
    sRaquetada.play();
}}

function colisaoRaquetes(x, y){
 colisao =
   collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if(colisao){
    velocidadeXBolinha *= -1;
    sRaquetada.play();
}}

// SISTEMA DE PONTUAÇÃO
let meusPontos = 0;
let pontosOponente = 0;

// pontuação na tela
function mostrarPontos(){
  
//  stroke("white");
//prefiro deixar sem a borda, pelo visual do game
      fill("orange");
  rect(430, 10, 40, 20);
  rect(130, 10, 40, 20);

  fill("white");
  textAlign(CENTER);
  textSize(16);
  text(meusPontos, 150, 26);
  text(pontosOponente, 450, 26);
}

// atribuição de pontos
function atribuirPontos(){
  if(xBolinha > 585){
    meusPontos += 1;
    sPonto.play();
  }
  
  if(xBolinha < 15){
    pontosOponente += 1;
    sPonto.play();
  }
}

// SONS DO JOGO
let sRaquetada;
let sTrilhaSonora;
let sPonto;

function preload(){
  sRaquetada = loadSound("raquetada.mp3")
  sTrilhaSonora = loadSound("trilha.wav")
  sPonto = loadSound("ponto.mp3")
}

// SETUP JOGO
function setup() {
  createCanvas(600, 400);
  sTrilhaSonora.loop();

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
  mostrarPontos();
  atribuirPontos();
}

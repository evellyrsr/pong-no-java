let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha / 2;

function mostraBolinha(){
   fill("white");
  circle(xBolinha, yBolinha, diametroBolinha); 
}

function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

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

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentoBolinha();
  colisãoBolinha();
}

let bg, st, nd, rd, acc, ext, wh, bl;

function setup() {
  // Invece di 400x400, usiamo le dimensioni della finestra di Framer
  createCanvas(windowWidth, windowHeight);
  
  // Definizione colori originali
  bg = '#011C27';
  st = '#FAA6FF';
  nd = '#4F172A';
  rd = '#00E5E8';
  acc = '#E7EB90';
  ext = '#FE4A49';
  wh = '#ffffff';
  bl = '#000000';
}

function draw() {
  background(nd);

  // Rettangoli - Loop 1
  fill(ext);
  noStroke();
  rectMode(CORNER);
  
  for(let i = 0; i < mouseX * 2; i++){
    push();
    translate(width/2, height/2);
    rotate(radians(i * 32 + (i * frameCount * 0.0001)));
    
    fill(ext);
    rect(mouseX * 0.001 * i, 0, 50, 2);
    
    fill(rd);
    ellipse(mouseX * 0.001 * i + 5, 0, 2, 2);
    ellipse(mouseX * 0.001 * i + 5, height/2, 2, 2);
    pop();
  }
  
  // Rettangoli - Loop 2
  for(let i = 0; i < mouseX; i++){
    push();
    translate(width/2, height/2);
    rotate(radians(i * 10 + (i * -frameCount * 0.0001)));
    
    fill(rd);
    rect(mouseX * 0.001 * i, 0, 25, 1.5);
    
    fill(ext);
    ellipse(mouseX * 0.001 * i + 8, 0, 2, 2);
    ellipse(mouseX * 0.001 * i + 8, height/2, 3, 3);
    pop();
  }
  
  // Cerchio cursore
  push();
  translate(mouseX, mouseY);
  fill(rd);
  noStroke();
  circle(0, 0, 20);
  pop();
}

// Questa funzione è vitale per Framer: adatta lo sketch se ridimensioni il componente
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
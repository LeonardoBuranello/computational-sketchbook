// GLOBAL VARIABLES



// colors

let bg = '#011C27';
let st = '#FAA6FF';
let nd = '#4F172A';
let rd = '#00E5E8';
let acc = '#E7EB90';
let ext = '#FE4A49';
let wh = '#FFFFFF';
let bl = '#000000';


// Wave parameters

let phase = 0.0;
let speed = 0.03;
let ampl = 100;
let freq = 0.015;


// Numerical values

let sw = 8;
let step = 8;






function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  
}

function draw() {
  
  background(bl);
  

// line 1
  
    push();
    noFill();
    stroke(st);
    strokeWeight(sw);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(radians(-frameCount/1.5));
    
    line(0, 0, width/2, height);
    pop();
  
  
  
// line 2
    
    push();
    noFill();
    stroke(wh);
    strokeWeight(sw);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(radians(frameCount/1.5));
    
    line(0, 0, width/2, height);
    pop();
  
  
  
  
// acid ellipse 
  
    
    noFill();
    strokeWeight(sw);
    stroke(acc);
    
    // variabile ell
    
    let bgC = sin(radians(-frameCount));
    ellipse(width/2, height/2 + bgC * 200, width/3, height/3);
  
  
  

// pink ellipse 
    
    noFill();
    strokeWeight(sw);
    stroke(st);
    
    // variabile ell
    
    let ell = sin(radians(-frameCount));
    ellipse(width/2 + ell * 200, height/2, width/1.2, height/1.2);
  
  
  
  
// orange ellipse
    
    noFill();
    strokeWeight(sw);
    stroke(ext);
    
    // variabile wave
    
    let wave = sin(radians(frameCount));
    ellipse(width/2 + wave * 200, height/2, width/2, height/2);
  
  
  
  
  
  
  // sin() light-blue line
    
    noFill();
    stroke(rd);
    strokeWeight(sw);
    
    beginShape();
    
    for ( let i = 0; i < width; i += step){
      
      let y = height/2 + sin(i * freq + phase) * ampl;
      vertex (i, y);
    
    }
    
    endShape();
    
    phase += speed;
    
 
  
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// GLOBAL VARIABLES


// Colors

let bg = '#011C27';
let st = '#f90c71';
let nd = '#4F172A';
let rd = '#00E5E8';
let acc = '#E7EB90';
let acid = '#ccff33';
let ext = '#FE4A49';
let wh = '#FFFFFF';
let bl = '#000000';

let palette = [st, nd, rd, acc, ext, wh, acid];



// Wave parameters

let amount; 
let speed = 0.3;
let sw = 8;
let step = 8;



// Modular parameters for responsiveness

let currentStepLimit;
let currentSpacing;
let currentOffsetX;








function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  updateAmount();
  setupObserver();
}








function draw() {
  background(bl);
  noStroke();
  ellipseMode(CENTER);
  
  
  

  for (let i = 0; i <= amount; i++) {
    let dir = (i % 2 == 0) ? 1 : -1;
    let y = map(i, 0, amount, -windowHeight, windowHeight);
    
        
  let x = map(sin(radians(frameCount * 0.02 + mouseY / step + (i * step))), -1, 1,
  -width * speed, width * speed) * dir;

  push();
    translate(windowWidth / 2, windowHeight / 2);
    translate(x, y);

    


    
    // Loop responsive
    
    for (let r = 0; r < currentStepLimit; r++) {
      let offsetX = r * currentSpacing + currentOffsetX;
      fill(palette[(i + r) % palette.length]);
      circle(offsetX, 0, sw);
      
    }
    
  pop();
    
  }
}






// OPTIMIZATIONS


function updateAmount() {

// Mobile

  if (windowWidth < 600) {
 
    amount = 100;
    currentStepLimit = step;
    currentSpacing = step*2+4;
    currentOffsetX = -65;       
  } 
  
  
  else {
    
    amount = 110;
    currentStepLimit = step*2;
    currentSpacing = step*2 + 2; 
    currentOffsetX = -135;
  }




    // Desktop
  
  if(windowWidth > 1100){

   amount = 134;
    currentStepLimit = step*3;
    currentSpacing = step*2 + 4;
    currentOffsetX = -225;
    
    }
}





// The sketch works just when it's 10% visible

function setupObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach (entry => {
      if (entry.isIntersecting) loop();
      else noLoop();
    });
  }, { threshold: 0.1 });
  
  
  

// Observe reference

  let canvasElement = document.querySelector('canvas');
  if (canvasElement) observer.observe(canvasElement);
}



// 'Responsiveness'


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateAmount();
  
}


// GLOBAL VARIABLES

let bg, 
    st, 
    nd, 
    rd, 
    acc, 
    ext, 
    wh, 
    bl;



function setup() {
  
  
  // 'Responsiveness' 

  createCanvas(windowWidth, windowHeight);
  
  
  // Color-variables definition
  
  bg = '#011C27'; 
  st = '#FAA6FF'; 
  nd = '#4F172A';
  rd = '#00E5E8'; 
  acc = '#E7EB90'; 
  ext = '#FE4A49';
  wh = '#ffffff'; 
  bl = '#000000';
  
  
  noLoop();
  
  
//INTERSECTION OBSERVER
  
  // Sketch visibility starts from 10% of the canvas
 
  let options = { threshold: 0.1 };
  let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) loop(); 
  else noLoop();
    });
  }, options);

  observer.observe(document.querySelector('canvas'));
}




function draw() {
  
  background(bl);
  

  // RESPONSIVE LOGICS
  
  let initialValue; // device simulation
  
  
  // Mobile
  
  if (windowWidth < 600) {
    initialValue = width / 1.2;
    } 
  
  
  // Tablet
  
  else if (windowWidth < 1024) {
    initialValue = width / 1.95;
    }
  
  // Desktop
  
  else {
    initialValue = width / 2;
  }
  
  

  // if mouseX is equal to 0, then use initialValue, otherwise follow mouseX position
  
  let currentX = mouseX === 0 ? initialValue : mouseX;
  
  
  

  // SHAPES
  
// Rect - Loop 1
  
  noStroke();
  rectMode(CORNER);
  
  for(let i = 0; i < currentX * 2; i++){
    push();
    translate(width/2, height/2);
    rotate(radians(i * 32 + (i * frameCount * 0.00005)));
    
    fill(ext);
    rect(currentX * 0.001 * i, 0, 50, 2);
    
    
  // Light-blue ellipses inside Rect shapes
    
    fill(rd); 
    ellipse(currentX * 0.001 * i + 5, 0, 2, 2);
    ellipse(currentX * 0.001 * i + 5, height/2, 2, 2);
    pop();
  }
  
  
  
  // Rect - Loop 2
  
  for(let i = 0; i < currentX; i++){
    push();
    translate(width/2, height/2);
    rotate(radians(i * 10 + (i * -frameCount * 0.00005)));
    
    fill(rd);
    rect(currentX * 0.001 * i, 0, 25, 1.5);
    
    fill(ext);
    ellipse(currentX * 0.001 * i + 8, 0, 2, 2);
    ellipse(currentX * 0.001 * i + 8, height/2, 3, 3);
    pop();
  }
  
  
  
  
  // Cursor
  
  
  if(mouseX > 0) {
    push();
    translate(mouseX, mouseY);
    fill(rd);
    noStroke();
    circle(0, 0, 20);
    pop();
  }
}


// Responsive window when resized

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
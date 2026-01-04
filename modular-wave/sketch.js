


// GLOBAL VARIABLES


//Colors
   
    let bg = '#011C27';
    let st = '#f90c71';
    let nd = '#4F172A';
    let rd = '#00E5E8';
    let acc = '#E7EB90';
    let acid = '#ccff33';
    let ext = '#FE4A49';
    let wh = '#FFFFFF';
    let bl = '#000000';
    
// Color array

    let palette = [
      
      st,
      nd,
      rd,
      acc,
      ext,
      wh,
      acid
      
      ];
    
  
      
// Wave parameters
    
    let phase = 0.0;
    let speed = 0.3;
    let ampl = 100;
    let freq = 0.015;
    let amount = 100;
    

// Numerical values
    
    let sw = 8;
    let step = 8;
    
    

 function setup(){
    
      createCanvas (windowWidth, windowHeight);
      smooth();
    
    }
    
    
    
function draw (){
  
      
    background(bl);
    noStroke();
    ellipseMode(CENTER);
  
  

  // main loop
  
    for (let i = 0; i <= amount; i++) {
      

    // remapping values and change direction alternatively
    
    let dir = (i % 2 == 0) ? 1 : -1;
    let y = map(i, 0, amount, -windowHeight, windowHeight);
    let x = map(sin(radians(frameCount + mouseY/step + (i * step))), -1, 1,
    -width * speed, width * speed) * dir;
      
      

    push();

    // center the comp
    
    translate(windowWidth/2, windowHeight/2);
    
    // applico la sinusoide
    
    translate(x, y);
      
    
    // Increase the number of sin()
      
    for (let r = 0; r < step; r++) {

      let offsetX = r * 30 - 100;
      
    // colore da array
      fill(palette[(i + r) % palette.length]);
      circle(offsetX, 0, sw);
    }

    pop();
  }
}


// Responsive sketch

function windowResized(){
  
  resizeCanvas(windowWidth, windowHeight);
  
}
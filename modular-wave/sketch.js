


// GLOBAL VARIABLES


//Colors
   
    let bg = '#011C27';
    let st = '#FAA6FF';
    let nd = '#4F172A';
    let rd = '#00E5E8';
    let acc = '#E7EB90';
    let ext = '#FE4A49';
    let wh = '#FFFFFF';
    let bl = '#000000';
    
// Color array

    let palette = [
      
      st,
      nd,
      rd,
      ext,
      acc,
      wh
      
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
  
      
    background(bg);
    noStroke();
    ellipseMode(CENTER);
  
  

  // Main loop
  
    for (let i = 0; i <= amount; i++) {
      

    // Remapping values and change direction alternatively
    
    let dir = (i % 2 == 0) ? 1 : -1;
    let y = map(i, 0, amount, -height/2, height/2);
    let x = map(sin(radians(frameCount + (i * step))), -1, 1,
    -width * speed, width * speed) * dir;
      
      

    push();

    // Center the comp
    
    translate(width/2, height/2);
    
    // Wave axis 
    
    translate(x, y);
      
    
    // Increase the number of sin()
      
    for (let r = 0; r < 10; r++) {

      let offsetX = r * 20 -100;
      
    // Adding color array
      fill(palette[(i + r) % palette.length]);
      circle(offsetX, 0, width/24);
    }

    pop();
  }
}


// Responsive sketch

function windowResized(){
  
  resizeCanvas(windowWidth, windowHeight);
  
}
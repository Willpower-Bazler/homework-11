var x = 250;
var y = 250;
var mousex = 0;
var mousey = 0;
var redc1 = -50;
var redc2 = -50;
var bluec1 = -100;
var bluec2 = -100;
var random1;
var random2;
var random3;
var random4;

    function setup() 
    {
      createCanvas(500, 500);
      random1 = Math.floor(Math.random() * 10) + 1;
      random2 = Math.floor(Math.random() * 10) + 1;
      random3 = Math.floor(Math.random() * 10) + 1;
      random4 = Math.floor(Math.random() * 10) + 1;
      
    }

    function draw() 
    {
      background(0);
      //exit square
      fill(255,128,0);
      square(400,0,100);
      fill(0,0,0);
      text('exit',440,50);
      
      
      
      //blue circle
                      fill(0, 0, 255);
      circle(bluec1,bluec2,200);
     bluec1 += random3;
     bluec2 += random4;
     if(bluec1 >= 600 || bluec2 >=600)
     {
       bluec1=-100;
       bluec2=-100;
     }
       
      //red circle
                   fill(255, 0, 0);
      circle(redc1,redc2,100);
     redc1 += random1;
     redc2 += random2;
     if(redc1 >= 550 || redc2 >=550)
     {
       redc1=-50;
       redc2=-50;
       
       //green circle
       }
      fill(64, 255, 0);
      circle(x, y, 50);
      
      //green circle moves wasd
      if (x >= 500 || x <=0) 
      {
        x = 250;
        y = 250;
      }
      if (keyIsDown(83)) 
      {
        y += 5;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 5;
      }
      if (y >= 500 || y <=0) 
      {
        x = 250;
        y = 250;
      }
          if (keyIsDown(68)) 
      {
        x += 5;
      } 
      else if (keyIsDown(65)) 
      {
        x -= 5;
      }
 


      //mouse makes yellow dot
      fill(255,255,0);
      ellipse(mousex, mousey, 25, 25);
      
      if(x >= 400 && y <=100)
      {
        fill(255,255,255);
        text('you win boiii',250,250);
      }
      
 
     
    }

 function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }
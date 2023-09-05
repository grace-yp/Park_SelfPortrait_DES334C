let text_x, text_y;
  
let x_speed;
let y_speed;

let text_speed;

function setup() {
  
  createCanvas(600, 600);
  colorMode(HSB);
  rectMode(CENTER);
  
  background(189, 27, 15);
  
  //initializing variables for "WHY ARE YOU LOOKING"
  text_x  = 100;
  text_y = 100;
  
  x_speed = random(5, 30);
  y_speed = random(5, 30);
  
  //initilizes variables for scrolling text animation
  text_speed = 5;
  
  d_H = 32;
  o_H1 = 63;
  o_H2 = 375;
  o_H3 = 442;
  n_H = 100;
  apos_H = 151;
  t_H = 180;
  l_H = 312;
  k_H = 519;
}

function draw() {
  
  // Turns mouse into an "eraser." --------------------
  if (mouseIsPressed) {

    stroke(189, 27, 15);
    fill(189, 27, 15);
    
    textWidth(65)
    textSize(35)
    
    textStyle(BOLD);
    
    // Eraser "shape"
    text('I CAN SEE YOU', mouseX, mouseY);
    
    textStyle(NORMAL);
    text_speed = 5;
    
  }
  
  // Fills screen with the text "WHY ARE YOU LOOKING"--
  fill(360, 33, 99);
  noStroke();
  textSize(28);
  text('WHY ARE YOU LOOKING', text_x, text_y);
  
  // Bounces "WHY ARE YOU LOOKING"
  
  if(text_x >= width || text_x < -75){
    x_speed = -x_speed;
  }

  text_x += x_speed;
  
  if(text_y >= height || text_y < 0){
    y_speed = -y_speed;
  }

  text_y += y_speed;
  
  
  // Drawing the face ---------------------------------
  
  // Pupils and irises
  noStroke();
  fill(360, 33, 99);
  circle(222, 292, 30);
  circle(357, 283, 38);
  circle(214, 319, 7);
  fill(235);
  circle(357, 282, 10);
  circle(222, 292, 8);
  
  // right eye
  fill(360, 33, 99);
  beginShape();
  vertex(302, 291);
  bezierVertex(319, 261, 368, 263, 388, 288);
  vertex(397, 282);
  vertex(403, 272);
  vertex(389, 273);
  vertex(378, 269);
  bezierVertex(336, 248, 310, 266, 302, 291);
  endShape();
  
  // left eye
  beginShape();
  vertex(241, 292);
  bezierVertex(204, 271, 189, 281, 192, 295);
  vertex(189, 298);
  vertex(182, 298);
  vertex(175, 293);
  vertex(183, 290);
  bezierVertex(189, 260, 230, 277, 236, 284);
  endShape();
  
  // nose and mouth shadows
  beginShape();
  vertex(243, 316);
  bezierVertex(239, 333, 218, 352, 225, 364);
  vertex(225, 364);
  bezierVertex(230, 372, 244, 382, 257, 383);
  vertex(257, 383);
  bezierVertex(235, 370, 238, 337, 243, 316);
  endShape();
  
  beginShape();
  vertex(263, 446);
  bezierVertex(268, 450, 278, 452, 287, 453);
  vertex(297, 460);
  vertex(274, 462);
  bezierVertex(254, 453, 257, 448, 263, 446);
  endShape();
  
  //eyebrows
  
  beginShape();
  vertex(303, 246);
  vertex(287, 238);
  vertex(300, 231);
  bezierVertex(329, 218, 373, 227, 394, 247);
  vertex(359, 241);
  vertex(340, 240);
  vertex(303, 246);
  endShape();
  
  beginShape();
  vertex(237, 257);
  bezierVertex(196, 230, 183, 236, 180, 253);
  vertex(180, 253);
  bezierVertex(189, 247, 200, 247, 237, 257);
  endShape();
  
  //glasses
  beginShape();
  
  vertex(374, 312);
  vertex(365, 301);
  vertex(406, 296);
  vertex(430, 283);
  vertex(451, 277);
  vertex(435, 295);
  vertex(408, 309);
  endShape();
  
  stroke(360, 33, 99);
  line(449, 278, 506, 250);
  
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(274, 278);
  bezierVertex(312, 250, 360, 288, 376, 316);
  vertex(376, 316);
  bezierVertex(398, 375, 356, 398, 311, 372);
  vertex(311, 372);
  bezierVertex(245, 324, 263, 286, 274, 278);
  endShape();
  
  beginShape();
  vertex(168, 283);
  bezierVertex(203, 276, 234, 312, 236, 335);
  vertex(236, 335);
  bezierVertex(250, 394, 181, 387, 163, 346);
  vertex(163, 346);
  bezierVertex(155, 332, 142, 296, 168, 283);
  endShape();
  
  curve(350, 450, 227, 313, 265, 312, 380, 480);
  
  // lips
  curve(219, 406, 231, 408, 261, 418, 281, 441);
  curve(244, 424, 261, 418, 320, 425, 440, 477);
  curve(216, 403, 238, 410, 261, 425, 270, 442);
  curve(298, 442, 261, 425, 309, 422, 407, 423);
  
  // face outline
  curve(484, 18, 246, 104, 186, 291, 429, 508);
  curve(170, 70, 188, 310, 222, 424, 295, 506);
  curve(135, 302, 222, 424, 253, 469, 287, 548);
  curve(144, 213, 253, 470, 326, 512, 451, 471);
  curve(121, 480, 326, 512, 474, 438, 561, 300);
  curve(301, 492, 329, 512, 346, 601, 289, 689);
  
  curve(449, 630, 496, 272, 554, 271, 516, 360);
  curve(521, 79, 554, 271, 538, 363, 480, 589);
  curve(500, 270, 538, 363, 516, 397, 462, 370);
  
  // hair, right side, face framing
  curve(330, 0, 299, 0, 257, 100, 335, 193);
  curve(240, 110, 257, 100, 288, 99, 330, 130);
  curve(350, 10, 288, 99, 490, 225, 588, 123);
  curve(350, 10, 469, 221, 474, 442, 420, 470);
  curve(350, 10, 474, 442, 379, 535, 319, 275);
  curve(319, 200, 379, 540, 522, 484, 469, 200);
  curve(379, 540, 522, 484, 495, 274, 591, 222);
  curve(570, 490, 469, 552, 456, 631, 540, 670);
  
  // hair, right side, back and detail
  curve(550, 0, 565, 0, 600, 55, 700, 300);
  curve(350, -60, 323, 60, 489, 108, 470, -100);
  curve(317, 94, 529, 87, 519, 15, 400, -70);
  curve(600, 330, 593, 148, 447, 169, 410, 390);
  curve(50, 185, 564, 186, 554, 534, 850, 582);
  
  // hair, left side
  curve(294, 147, 246, 104, 292, 0, 365, 0);
  curve(600, -75, 202, 0, 136, 301, 300, 390);
  curve(400, 83, 126, 208, 198, 559, 600, 473);
  curve(114, 502, 177, 554, 189, 625, 153, 671);
  curve(75, 421, 168, 454, 221, 572, 200, 640);
  curve(199, 518, 224, 551, 228, 595, 210, 642);
  curve(300, -100, 157, 84, 216, 77, 400, -410);
  curve(119, 251, 138, 180, 186, 155, 242, 161);
  
  // Animating scrolling text ------------------------- 
  
  
  fill(189, 27, 15);
  stroke(235);
  rect(50 , 300, 92, 600);
  
  fill(360, 33, 99);
  noStroke();
  
  text('D', 20, d_H);
  if (d_H >= height + 15){
    d_H -= 610
  }
  d_H += text_speed
  
  text('O', 62, o_H1);
  if (o_H1 >= height + 15){
    o_H1 -= 610
  }
  o_H1 += text_speed
  
  text('N', 67, n_H);
  
  if (n_H >= height + 15){
    n_H -= 610
  }
  n_H += text_speed
  
  text('\'', 64,apos_H);
  if (apos_H >= height + 15){
    apos_H -= 610
  }
  apos_H += text_speed
  
  text('T', 40, t_H);
  if (t_H >= height + 15){
    t_H -= 610
  }
  t_H += text_speed

  text('L', 46, l_H);
  if (l_H >= height + 15){
    l_H -= 610
  }
  l_H += text_speed
  
  text('O', 59, o_H2);
  if (o_H2 >= height + 15){
    o_H2 -= 610
  }
  o_H2 += text_speed
  
  text('O', 28, o_H3);
  if (o_H3 >= height + 15){
    o_H3 -= 610
  }
  o_H3 += text_speed
  
  text('K', 64, k_H);
  if (k_H >= height + 15){
    k_H -= 610
  }
  k_H += text_speed
  

}
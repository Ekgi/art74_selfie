function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  
  fill(250, 203, 167);
  ellipse(400,400, 500, 620);  //face 

  noFill();
  
  
  fill(255, 255, 255);
  ellipse(280, 355, 100, 40, );  //left eye  
  
  fill(56, 31, 4);
  ellipse(282,353, 35,35);  //left pupil
  fill(18,10,1);
  ellipse(282,353, 15,15);//left iris
  fill(255,255,255);
  ellipse(289,348, 15,15);//left shine

  
  fill(255,255,255);
  quad(471, 358, 520, 337, 567, 348, 531, 374);  //right eye
  
  fill(56, 31, 4);
  ellipse(518, 353, 35, 35);//right pupil
  fill(18,10,1);
  ellipse(518, 353, 15, 15);//right iris
  fill(255,255,255);
  ellipse(525, 348, 15, 15);//right shine
  
  
  fill(250, 203, 167);
  //fill(252, 214, 184);
  rect(369,354,70,170);  //nosebridge
  
  //fill(247, 214, 188);
  
  ellipse(350,514,60,40);  //left nose
  ellipse(455,514,60,40);  //right nose

  //fill(252, 214, 184);
  ellipse(405,514,80,80);  //middle nose
  
  fill(250, 203, 167);
  arc(395,589,200,90,0, PI);  // smile
  
  fill(33, 17, 1);
  beginShape();  //custom hair shape
  vertex(278, 183,0);
  vertex(267, 290,0);
  vertex(151, 421,0);
  vertex(107, 166,0);
  vertex(290, 25,0);
  vertex(373, 32,0);
  vertex(475, 12,0);
  vertex(658, 195,0);
  vertex(651, 450,0);
  vertex(636, 376,0);
  vertex(474, 335,0);
  vertex(402, 270,0);
  vertex(341, 138,0);
  endShape(CLOSE);

}

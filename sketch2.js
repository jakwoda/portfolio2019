let n=0;
var c=5;

function setup() {
  createCanvas(1000, 1000);
	
	colorMode(HSB);
background(256);
}

function draw() {

	var a = n * mouseY;
	var r = c * sqrt(n);
	h = random (10,20)
	var x = r * cos(a) + width/2;
var y= r * sin(a) + height/3;
fill(64*n % 256+h, 200+h ,200+h);
	rect( x,y , (x+h)/4+(mouseX/10), (y+h)/4+(mouseX/10));

 n++ 
}

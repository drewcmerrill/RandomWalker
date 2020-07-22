var x;
var y;
let red = 0;
let green = 0;
let blue = 0;

function setup() {
	createCanvas(100, 100);
	background(51);
	x = width/2;
	y = height/2;
}

function draw() {
	stroke(red, green, blue); //colors it white
	strokeWeight(2);
	point(x,y);

	blue += 10;
	if(blue > 255)
	{
		green += 10;
		blue = 0;
	}
	if(green > 255)
	{
		red += 10;
		green = 0;
	}
	if(red > 255)
	{
		red = 0;
	}

	var r = floor(random(4)) ; //gives a max num of 4
	switch(r)
	{
		case 0:
		{
			x +=1;
			if(x > width)
			{
				x = floor(random(width));
				y = floor(random(height));
			}
			break;
		}
		case 1:
		{
			x -= 1;
			if(x < 0)
			{
				x = floor(random(width));
				y = floor(random(height));
			}
			break;
		}
		case 2:
		{
			y += 1;
			if(y > height)
			{
				x = floor(random(width));
				y = floor(random(height));
			}
			break;
		}
		case 3:
		{
			y -= 1;
			if(y < 0)
			{
				x = floor(random(width));
				y = floor(random(height));
			}
			break;
		}

}

}

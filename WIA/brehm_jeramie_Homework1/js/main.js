/*
     Name:Jeramie Brehm
     Date:06MAR2014
     Class & Section:  WIA-1403
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function(){
	if(Modernizr.canvas){


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

		var recTangle = document.getElementById("rectangle");
		if(recTangle){
			var tangle = recTangle.getContext('2d');
			if (tangle){

				tangle.strokeStyle = "#000";
				tangle.fillStyle = "lightblue";
				tangle.lineWidth = 10;

				tangle.fillRect(0,0,50,100);
				tangle.strokeRect(0,0,50,100); //stroke looks crazy due to top and left side being cut in half because it's being drawn outside of the canvas
			}
		}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/
		var circles = document.getElementById("circleArcs");
		if(circles){
			var arcs = circles.getContext('2d');
			if (arcs){

				arcs.fillStyle = 'rgba(255, 0, 0, .5)';
				arcs.lineWidth = 3;

				arcs.beginPath();
				arcs.arc(50,50,20,0,2*Math.PI,true);
				arcs.fill();

				arcs.strokeStyle = 'black';
				arcs.beginPath();
				arcs.arc(50,50,30,0,2*Math.PI,true);
				arcs.stroke();
			}
		}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

		var multiPaths = document.getElementById("path");
		if(circles){
			var star = multiPaths.getContext('2d');
			if (star){

				star.strokeStyle = 'blue';
				star.lineWidth = 5;
				star.lineJoin = 'round';

				star.beginPath();
				star.moveTo(100,100);
				star.lineTo(150,100);
				star.lineTo(170,50);
				star.lineTo(190,100);
				star.lineTo(240,100);
				star.lineTo(200,135);
				star.lineTo(220,185);
				star.lineTo(175,155);
				star.lineTo(137,185);
				star.lineTo(145,135);
				star.closePath();

				star.stroke();
			}
		}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

var bezier = document.getElementById("bezierCurves");
		if(bezier && bezier.getContext){
			var bzc = bezier.getContext('2d');
			if (bzc){

				bzc.strokeStyle='#000';
				bzc.lineWidth = 5;

				bzc.beginPath();
				bzc.moveTo(25,250);

				//bezierCurveTo(cx,cy,cx2,cy2,x,y)
				bzc.bezierCurveTo(75,140,175,140,225,250);
				bzc.bezierCurveTo(190,240,200,240,175,250);
				bzc.bezierCurveTo(140,240,150,240,125,250);
				bzc.bezierCurveTo(90,240,100,240,75,250);
				bzc.bezierCurveTo(40,240,50,240,25,250);
				bzc.closePath();
				bzc.stroke();

			}
		}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

var render = document.getElementById("textRender");
		if(render && render.getContext){
			var text = render.getContext('2d');
			if(text){

				var squishyFilling = 'UNLEASH THE FURY';

				text.font = '25pt Impact';
				text.fillStyle = 'red';
				text.fillText(squishyFilling,20,150);


			}
		}


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

var imgMat = document.getElementById("imgDraw");
		if(imgMat && imgMat.getContext){
			var pic = imgMat.getContext('2d');
			if(pic){

				var photo = document.getElementById('image1');

				pic.drawImage(photo, 0,0); //photo does not display well in canvas due to size being 3k x 1.1k without resizing but implemented "as is".
				pic.drawImage(photo,0,0,1650,550); //photo at 50 percent still way too big for formatted 300 x 300 box.
				pic.drawImage(photo,0,0,300,100);  //resized to fit box to fulfill spirit of assignment.
				pic.drawImage(photo,0,125,150,50); // resized to 50 percent of refitted img from line above.
				pic.drawImage(photo,1000,475,1650,300,5,225,290,50);//focused down on bouncing ball
			}
		}




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

var freestyle = document.getElementById("combo");
		if(freestyle && freestyle.getContext){
			var stuff = freestyle.getContext('2d');
			if (stuff){


				stuff.strokeStyle = "gray";
				stuff.fillStyle = "darkblue";
				stuff.lineWidth = 10;
				stuff.fillRect(200,75,300,150);
				stuff.strokeRect(200,75,300,150);


				stuff.strokeStyle='red';
				stuff.lineWidth = 10;
				stuff.beginPath();
				stuff.moveTo(50,275);

				stuff.bezierCurveTo(100,150,425,160,550,140);
				stuff.bezierCurveTo(600,275,800,240,880,60);
				stuff.stroke();

				var logoImg = document.getElementById("image1");
				stuff.drawImage(logoImg, 550,175,300,100);
			}
		}




	}else{
		document.getElementById('errorBox').innerHTML="Your Browser does not support HTML5 Canvas. Upgrade to a later browser to experience site content."
	}
};
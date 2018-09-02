// Canvas Setup //
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// End Canvas Setup //

function image(url)
{
  base_image = new Image();
  base_image.src = url;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}


class Spotlight {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.radius = 100;
		this.set = 1;
		this.xVel = 3;
		this.yVel = 0;
		this.yAcc = 1;
		this.counter = 0;

	}
	move() {
		//Checkpoints
		if (this.set == 1 && this.x >= canvas.width/2){
			this.set ++;
			this.yAcc = -1;
		} else if (this.set == 2 && this.y <= canvas.height/2){
			this.set++;
		}else if (this.radius > canvas.width * 30){
			this.set++;

		}
		//Movement
		if (this.set == 1){
			this.x += this.xVel
			this.y += this.yVel
			this.yVel += this.yAcc;
			if (this.y + this.radius > canvas.height && this.yVel > 0){
				this.yVel = (this.yVel * -1) + this.yVel * 0.25
			}
		} else if (this.set == 2){
			this.y += this.yVel;
			this.yVel += this.yAcc;
		} else if (this.set == 3){
			if (this.counter < 20){
				this.counter ++;
			} else {
				$("#content").css("z-index", "3");
			}
			
			this.radius += 20;
		}
		

	}
	draw(){
		this.move()
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		c.fillStyle = "rgba(0, 0, 0, 1)";
		c.rect(canvas.width, 0, -canvas.width, canvas.height);
		c.fill();

		c.beginPath();
		c.fillStyle = "rgba(255,255,224, 0)";
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		c.fill();

	}
}


let spot = new Spotlight(-10, 0);

// Animate // 

function animate() {
		
	    requestAnimationFrame(animate);
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	    
	    spot.draw();
	
}



animate();
// End Animate //





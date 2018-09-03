// Canvas Setup //
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// End Canvas Setup //

class Circle {
	constructor() {
		if (Math.random() < 0.5){
			this.xVel = Math.random() * -15
			this.xAcc = -0.1
		}else {
			this.xVel = Math.random() * 15
			this.xAcc = 0.1
		}
		if (Math.random() < 0.5){
			this.yVel = Math.random() * -15
			this.yAcc = -0.1
		}else {
			this.yVel = Math.random() * 15
			this.yAcc = 0.1
		}
		this.radius = Math.random() * 3
		this.x = canvas.width/2
		this.y = canvas.height/2
		this.radiusAcc = 0.1
	}
	reset() {
		if (Math.random() < 0.5){
			this.xVel = Math.random() * -15
			this.xAcc = -0.1
		}else {
			this.xVel = Math.random() * 15
			this.xAcc = 0.1
		}
		if (Math.random() < 0.5){
			this.yVel = Math.random() * -15
			this.yAcc = -0.1
		}else {
			this.yVel = Math.random() * 15
			this.yAcc = 0.1
		}
		this.radius = Math.random() * 3
		this.x = canvas.width/2
		this.y = canvas.height/2
		this.radiusAcc = 0.1
	}
	move() {
		this.radius += this.radiusAcc;
		this.xVel += this.xAcc
		this.yVel += this.yAcc
		this.x += this.xVel
		this.y += this.yVel
		if (this.x + this.radius * 2 < 0){
			this.reset();
		}else if (this.x - this.radius * 2 > canvas.width){
			this.reset();
		}else if (this.y + this.radius * 2 < 0){
			this.reset()
		}else if (this.y - this.radius * 2 > canvas.height){
			this.reset();
		}
	}
	draw(){
		this.move()
		c.beginPath();
		c.fillStyle = "rgba(255,255,200, 0.8)";
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		c.fill();

	}
}


var effects = [];

var i;
for (i =0; i < 100; i++){
	effects[i] = new Circle();
}

// Animate // 

function animate() {
		
	    requestAnimationFrame(animate);
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	    
	    for (i = 0; i < 100; i++){
	    	effects[i].draw();
	    }
	    
	
}
animate();
// End Animate //

function loaded() {
	$("#loading").css("z-index", "-1");
	$("#loading").css("opacity", "0");
}



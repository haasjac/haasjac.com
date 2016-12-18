$(document).ready(init);

function init() {
	var force = 10;
	
	var stage = new createjs.Stage("Canvas");
	var bgd = new createjs.Shape();
	bgd.graphics.beginFill("rgba(219,223,235,1)").drawRect(0, 0, 1000, 500);
	bgd.x = 0;
	bgd.y = 0;
	stage.addChild(bgd);
	bgd.addEventListener("click", handleClick);
		
	var c = new Array();
		
	function handleClick (event) {
		new cursor();
		var mx = stage.mouseX;
		var my = stage.mouseY;
		//circle.grow = true;
		for (i = 0; i < j.length; i++) {
			var dx = j[i].shape.x +25 - mx;
			var dy = j[i].shape.y +25 - my;
			if (Math.sqrt(dx*dx + dy*dy) < 175) {
				if (dx != 0)
					j[i].x_vel = Math.random() * force * -dx / Math.abs(dx);
				if (dy != 0)
					j[i].y_vel = Math.random() * force * -dy / Math.abs(dy);
				j[i].grow = true;
			}
			
		}
		
		for (i = 0; i < h.length; i++) {
			var dx = h[i].shape.x +25 - mx;
			var dy = h[i].shape.y - my;
			if (Math.sqrt(dx*dx + dy*dy) < 175) {
				if (dx != 0)
				h[i].x_vel = Math.random() * force * -dx / Math.abs(dx);
				if (dy != 0)
				h[i].y_vel = Math.random() * force * -dy / Math.abs(dy);
				h[i].grow = true;
			}
			
		}
	}
	
	
	var h = new Array();
	var j = new Array();
	
	for (var i = 1; i < 9; i ++) {
		new rect(500,i*50, "rgba(49,58,173,1)", h);
		new rect(550,i*50, "rgba(49,58,173,1)", h);
	}
	
	for (var i = 1; i < 4; i ++) {
		new rect(500+50*i,200, "rgba(49,58,173,1)", h);
		new rect(500+50*i,250, "rgba(49,58,173,1)", h);
	}
	
	for (var i = 1; i < 9; i ++) {
		new rect(700,i*50, "rgba(49,58,173,1)", h);
		new rect(750,i*50, "rgba(49,58,173,1)", h);
	}
	
	for (var i = 0; i < h.length; i ++) {
		stage.addChild(h[i].shape);
	}
	
	/////////////////////////////////////////////////////////////
	
	for (var i = 1; i < 4; i ++) {
		new rect(200,250+i*50, "rgba(51,51,51,1)", j);
		new rect(250,250+i*50, "rgba(51,51,51,1)", j);
	}
	
	for (var i = 1; i < 4; i ++) {
		new rect(200+50*i,350, "rgba(51,51,51,1)", j);
		new rect(200+50*i,400, "rgba(51,51,51,1)", j);
	}
	
	for (var i = 1; i < 9; i ++) {
		new rect(400,i*50, "rgba(51,51,51,1)", j);
		new rect(450,i*50, "rgba(51,51,51,1)", j);
	}	
	
	
	
	function cursor () {
		this.shape = new createjs.Shape();
		this.shape.graphics.beginStroke("red").drawCircle(0,0,2);
		this.shape.x = stage.mouseX;
		this.shape.y = stage.mouseY;
		this.grow_val = 0;
		stage.addChild(this.shape);
		c.push(this);
		this.update = function() {
			//this.shape.x = stage.mouseX;
			//this.shape.y = stage.mouseY;
			this.shape.scaleX += 0.4;
			this.shape.scaleY += 0.4;
			this.shape.alpha -= 0.05;
			if (this.shape.alpha <= 0.0) {
				stage.removeChild(this.shape);
				return false;
			} else {
				return true;	
			}
		}
	}
	
	function rect (x_in, y_in, color, arr) {
		this.shape = new createjs.Shape();
		this.shape.graphics.beginFill(color).drawRect(0, 0, 50, 50);
		this.shape.x = x_in;
		this.shape.y = y_in;
		this.x_vel = 0;
		this.y_vel = 0;
		this.grow = false;
		this.grow_val = 0;
		stage.addChild(this.shape);
		arr.push(this);
		this.update = function()
        {
			this.x_vel *= 0.975;
			this.shape.x -= this.x_vel;
			this.y_vel *= 0.975;
			this.shape.y -= this.y_vel;
			if (this.shape.x > 950) {
				this.shape.x = 950;  
				this.x_vel = -this.x_vel;
			}
			if (this.shape.x < 0) {
				this.shape.x = 0; 
				this.x_vel = -this.x_vel;
			}
			if (this.shape.y > 450) {
				this.shape.y = 450;  
				this.y_vel = -this.y_vel;
			}
			if (this.shape.y < 0) {
				this.shape.y = 0; 
				this.y_vel = -this.y_vel;
			}
			if (this.grow == true) {
				if (this.grow_val < 10) {
					this.shape.scaleX += 0.05;
					this.shape.scaleY += 0.05;
					this.shape.alpha -= 0.01;
					this.grow_val++;
				} else if (this.grow_val < 20) {
					this.shape.scaleX -= 0.05;
					this.shape.scaleY -= 0.05;
					this.shape.alpha += 0.01;
					this.grow_val++;
				} else {
					this.grow = false;
					this.grow_val = 0;
					this.shape.scaleX = 1;
					this.shape.scaleY = 1;
				}
					
			}
			return true;
        }
	}	 
	 createjs.Ticker.setFPS(60);
	 createjs.Ticker.addEventListener("tick", game_update);
	 
	 function game_update () {
		stage.update();
		for (var i = 0; i < c.length; i ++) {
			if (!c[i].update()) {
            	c.splice(i, 1);
            	i --;
			}
		}
		for (var i = 0; i < j.length; i ++) {
			j[i].update();
		}
		for (var i = 0; i < h.length; i ++) {
			h[i].update();
			
		}
	 }
	
}
	  
	   
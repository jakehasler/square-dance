import keyMap from './keyMap';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const keystate = {};

document.addEventListener('keydown', evt => {
	keystate[evt.keyCode] = true;
});

document.addEventListener('keyup', evt => {
	keystate[evt.keyCode] = false;
});

const square = {
	x: 0,
	y: 0,
	width: 50,
	height: 50,
	update() {
		if(keystate[keyMap.A]) {
			if(this.x > 0)
			this.x -= 5;
		}
		if(keystate[keyMap.W]) {
			if(this.y > 0)
			this.y -= 5;
		}
		if(keystate[keyMap.S]) {
			if(this.y + this.height < canvas.height)
			this.y += 5;
		}
		if(keystate[keyMap.D]) {
			if(this.x + this.width < canvas.width)
			this.x += 5;
		}
	},
	draw() {
		ctx.fillStyle = 'orange';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
};

const squareBlue = {
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	update() {
		this.x += 2;
		this.y++;
	},
	draw() {
		ctx.fillStyle = 'blue';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
};

function init() {

}

function main() {
	canvas.height = 400;
	canvas.width = 800;
	init();
	loop();
}

function reset() {

}

function draw() {
	ctx.clearRect(0 , 0, 800, 400);
	square.draw();
	squareBlue.draw();
}

function update() {
	square.update();
	squareBlue.update();
}

function loop() {
	update();
	draw();

	requestAnimationFrame(loop);
}

main();
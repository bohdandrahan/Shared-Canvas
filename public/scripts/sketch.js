let clr
let socket
function setup() {
	let h = 400
	let w = 400
	socket = io.connect('http://localhost:3000')
  createCanvas(h, w);
  background(51);
  clr = random(360)
}


function displayDot(x, y, color){
	colorMode(HSB)
	fill(color, 100, 100)
	ellipse(x, y, 10)
	colorMode(RGB)
}

function draw() {
}

function mouseDragged() {
	clr += 1
	if (clr < 0){
		clr = 360 - clr
	} else if(clr > 360){
		clr = clr % 360
	}
	let data = {
		x: mouseX,
		y: mouseY,
		color: clr
	}
	socket.emit('mouse', data);
	console.log('sending:', mouseX +',', mouseY +',', clr)
	noStroke()
	displayDot(mouseX, mouseY, clr)
}

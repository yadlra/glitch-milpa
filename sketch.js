let glitch, typeCounter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	setupGlitch(); // load image w/ random type
}

function draw() {
	glitch.resetBytes();

	glitch.randomBytes(2); //add random bytes for movemen

	glitch.buildImage(function() {
		background(0); // clear background once image is ready
		displayType(); // show text
	});
	image(glitch.image, width / 2, height / 2)
}

function mousePressed() {
	typeCounter++;
	setupGlitch(); // grab another random format
}

function setupGlitch() {
	loadImage('milpa-system.png', function(im) {
		glitch.loadType(glitch.types[typeCounter%glitch.types.length]); // use random type
		glitch.loadImage(im);
	});
}

function displayType() {
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(20);
	text('cliquea para ver tipo de milpa y resistencia glitch \n' + glitch.types[typeCounter%glitch.types.length], 0, 0, width, height/2);
}



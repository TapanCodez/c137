img = "";

function preload(){
img = loadImage("bottle.jpg")
img = loadImage("box.jpg")
img = loadImage("buds.jpg")
img = loadImage("pen.jpg")
img = loadImage("remote.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#00FFFF");
text("Bottle", 45, 75);
noFill();
stroke("#00FFFF");
rect(20, 50, 430, 360);

fill("#00FFFF");
text("Box", 370, 90);
noFill();
stroke("#00FFFF");
rect(290, 70, 350, 300);

fill("#00FFFF");
text("Buds", 370, 90);
noFill();
stroke("#00FFFF");
rect(290, 70, 350, 300);

fill("#00FFFF");
text("Pen", 370, 90);
noFill();
stroke("#00FFFF");
rect(290, 70, 350, 300);

fill("#00FFFF");
text("Remote", 370, 90);
noFill();
stroke("#00FFFF");
rect(290, 70, 350, 300);
}

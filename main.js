var nose_x = 0;
var nose_y = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/CxHMw4Kd/Moustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Pose Net is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        nose_x = results[0].pose.nose.x - 25;
        nose_y = results[0].pose.nose.y + 5;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, nose_x, nose_y, 75, 50);
}

function takeSnapshot() {
    save("my_filter.png");
}

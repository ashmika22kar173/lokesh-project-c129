song = "";
song2 = "";
leftwrist = 0;
rightwrist = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 500, 400);

fill("#ff0000");
stroke("#ff0000");
circule(leftwrist,rightwrist,20);

if(leftwrist){
song2.play();
document.getElementById("song").innerHTML ="Peter Pan Song";
}
}


function modelloded() {
    console.log("modelloded");

}

function gotresult(results) {
    if (results.length > 0) {
        console.log(results);

        leftwrist = results[0].pose.leftWrist;
        rightwrist = results[0].pose.rightWrist;
        console.log(" leftwrist = " + leftwrist + " rigthwrist = " + rightwrist);
    }

}
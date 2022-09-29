label= "";
objects= [];
stat= "";

function preload() {
sound= loadSound("alert_sound.mp3");
}


function setup() {
canvas= createCanvas(600, 300);
canvas.position(450, 300);
video= createCapture(VIDEO);
video.size(200, 300);
video.hide();
}

function draw() {
  image(video, 0, 0, 600, 300);
if(stat != ""){

objectDetector.detect(video, gotResults);
for(i= 0; i< objects.length; i++) {

if(objects[i].label == "person"){
document.getElementById("status").innerHTML="Baby is Detected!";
sound.stop();
}

else{
document.getElementById("status").innerHTML="Baby is not Detected!";
sound.play();
}

}
}
}



function modelLoaded() {
console.log("CocoSSD model is sucessfully loaded");
stat= true;
}

function gotResults(error,results) {
if(error){
console.error(error);
}
else{
console.log(results); 
objects= results;
}
}

function start() {
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Objects are detecting";
}
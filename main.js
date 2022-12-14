noseX=0;
noseY=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("Posenet is initialised.");
    }
    function takeSnapshot(){
        save('my_filter_image.png');
    }
    function draw(){
        image(video,0,0,300,300);
        image(mustache,noseX,noseY,60,60);
    }
    function gotPoses(results){
        if (results.length > 0){
            console.log(results);
            noseX=results[0].pose.nose.x-17;
        noseY=results[0].pose.nose.y-17 ;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
        }
    }

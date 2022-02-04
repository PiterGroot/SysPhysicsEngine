const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope 
let car, pos, vel, frontWheel, backWheel;
graph = new GraphBackGround();

car = new Image();
frontWheel = new Image();
backWheel = new Image();
backWheel.src = "images/wielen.png"
frontWheel.src = "images/wielen.png"
car.src = "images/auto.png";

frontWheel.angle = 0;
frontWheel.dAngle = .1;
backWheel.angle = 0;
backWheel.dAngle = .1;


pos = 0;
vel = 6;

animate();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();
    context.drawImage(car, pos, height - car.height);
    pos+= vel;

    context.save();
    context.translate(212 + pos, height - 90);
    //context.translate(752 + pos, height - 90);
    context.rotate(frontWheel.angle);
    context.drawImage(frontWheel, -frontWheel.width / 2, -frontWheel.height /2);
    context.restore();

    context.save();
    //context.translate(212 + pos, height - 90);
    context.translate(752 + pos, height - 90);
    context.rotate(backWheel.angle);
    context.drawImage(backWheel, -backWheel.width / 2, -backWheel.height /2);
    context.restore();

    frontWheel.angle += frontWheel.dAngle;
    backWheel.angle += frontWheel.dAngle;

    if(pos > width){
        pos = -car.width;
    }
}
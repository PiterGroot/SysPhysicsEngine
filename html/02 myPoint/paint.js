class Paint{
    constructor(x,y, radius, color){
        this.x;
        this.y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius, 0, 2);
        context.closePath();
        context.stroke();
        context.fill();
    }
}
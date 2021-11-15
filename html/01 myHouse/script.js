const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginPath();
context.lineWidth = "10";
context.fillStyle = "red";
context.moveTo(300, 100);
context.lineTo(200, 300);
context.moveTo(300, 100);
context.lineTo(700, 200);
context.lineTo(600, 400);
context.lineTo(200, 300);
context.fill();
context.lineTo(200, 500);
context.lineTo(600, 600);
context.lineTo(600, 400);
context.fillStyle = "grey";
context.lineTo(800, 300);
context.lineTo(700, 200);
context.lineTo(800, 300);
context.lineTo(800, 500);
context.moveTo(600, 600);
context.fill();
context.lineTo(800, 500);
context.closePath();
context.stroke();
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

//resize
let width, height;
function adjustCanvasSize() {
    c.canvas.width = width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    c.canvas.width = width = width/3;
    c.canvas.height = height = width;
}
window.addEventListener('load', adjustCanvasSize);
window.addEventListener('resize', adjustCanvasSize);

var pi = Math.PI;
var gaps = 100;
var freq = 1;

function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}

function drawGrid() {
  drawLine(width/2, 0, width/2, height);
  drawLine(0, height/2, width, height/2);
}

let x, y, r;
var dx = 0;
var dy = 0;

dxv = 4;
dyv = 3;

function recalculate() {
  x = c.canvas.width/5;
  y = c.canvas.height/5;
  r = c.canvas.width/10;
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, width, height)
  recalculate();
  c.beginPath();
  c.arc(x + dx, y + dy, r, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
  console.log(x + dx);
  if (x + dx >= x * 5 - r || x + dx <= 0 + r) {
    dxv *= -1;
  }
  if (y + dy >= y * 5 - r || y + dy <= 0 + r) {
    dyv *= -1;
  }
  dx += dxv;
  dy += dyv;
}

animate();

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

let width, height;
function adjustCanvasSize() {
    c.canvas.width = width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    c.canvas.height = height = window.innerHeight/2 || document.documentElement.clientHeight/2 || document.body.clientHeight/2;
    // c.strokeStyle = '#00ff00af';
    // c.lineWidth = 1;
    repaint();
}
window.addEventListener('load', adjustCanvasSize);
window.addEventListener('resize', adjustCanvasSize);


// range sliders
var slider1 = document.getElementById('myRange1');
slider1.oninput = function() {
  gaps = slider1.value / 1000;
  repaint();
}

var slider2 = document.getElementById('myRange2');
slider2.oninput = function() {
  freq = slider2.value / 10;
  repaint();
}

var slider3 = document.getElementById('myRange3');
slider3.oninput = function() {
  shift = slider3.value / 10;
  repaint();
}

var pi = Math.PI;
var gaps = 10;
var freq = 1;
var shift = 0;

let equation = 'Math.cos(test)'

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

function drawBars() {
  c.strokeStyle = '#000';
  c.lineWidth = 1;
  for(var i = 0; i <= gaps; i++) {
    drawLine(
      (width/gaps * i),
      height,
      (width/gaps * i),
      height/2 - (height/2 * Math.cos(2 * pi * i * freq / gaps))
    );
  }
}

function drawEquation1() {
  c.strokeStyle = '#f00';
  c.lineWidth = 3;
  var x = 0;
  //first y value
  var y = (height/2 - height/2 * Math.cos(0));
  for(var i = 0; i < 10000; i++) {
    drawLine(
      x,
      y,
      x += (width/10000),
      y = height/2 - (height/2 * Math.cos(( (2 * pi * (i + 1)) + shift/10000) * freq / 10000))
    );
  }
}

function drawEquation2() {
  c.strokeStyle = '#000';
  c.lineWidth = 3;
  var x = 0;
  //first y value
  var y = (height/2 - height/2 * Math.cos(0));
  for(var i = 0; i < gaps; i++) {
    drawLine(
      x,
      y,
      x += (width/gaps),
      y = height/2 - (height/2 * Math.cos( ((2 * pi * (i + 1)) + shift/gaps) * freq / gaps))
    );
  }
}

function repaint() {
  c.clearRect(0, 0, width, height);
  c.lineWidth = .25;
  drawGrid();
  c.lineWidth = 1;
  drawBars();
  drawEquation1();
  drawEquation2();
}

repaint();

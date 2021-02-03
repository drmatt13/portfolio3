let emojis = ['🥰', '💸', '🙏🏼', '🎲', '🔥', '🍑', '🍀', '✈️', '😇', '🤡', '😈', '✨', '👻', '👽', 
'💀', '💰', '💯', '👑', '🙈', '💎', '🌈',  '🍆', '🎅🏻', '🚀', '🌻', '⚡️', '🌛', '🦄', '💩', '🍹'];

function swap(p, q) {
  let temp = emojis[p];
  emojis[p] = emojis[q];
  emojis[q] = temp;
}

function randomizeEmojis() {
  for ( let i=0; i<emojis.length; i++) {
    swap(i, Math.floor((Math.random() * emojis.length)));
  }
}

var sound = new Audio("./sound.wav");
sound.preload = 'auto';
sound.load();
let delay = false;

function hello() {
  if (!delay) {
    var click=sound.cloneNode();
    click.volume = 0.2;
    click.play();
    delay = true;
    setTimeout(() => {
      delay = false;
    }, 60)
  }  
}

randomizeEmojis();

let options = ['', '', '', '', '', '', '', '', '', ''];
let players = [];
let count = 0;
let spinning = false;
let gameActive = false;

// CREATE ONE STYLE TAG with class of styles
function createStyle() {
  var style = document.createElement("style");
  style.className = 'styles';
  document.body.appendChild(style);
}
createStyle();

function updatestyles() {
  let styles = document.querySelector('.styles');
  styles.innerHTML = '';
  for (let i=0; i<count; i++) {
    styles.innerHTML += `.style${i} {background: ${getColor(i, options.length)}c0;}`
  }
}

let testinput = document.querySelector('#testinput');
testinput.maxLength = 16;

let testbtn = document.querySelector('#testbtn');
testbtn.addEventListener('click', test1);

let logo = document.querySelector(".img1-1");
let spinBtn = document.getElementById("spin");
spinBtn.addEventListener("click", () => {
  if (!spinBtn.classList.contains("disabled")){
    gameActive = true;
    spin();
  }
});

// Execute a function when the user releases a key on the keyboard
testinput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    if (options.length == 1) {
      alert("please start new game first");
      testinput.value = '';
      return null;
    }
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    testbtn.click();
  }
});

let body = document.querySelector('.body');

function test1() {

  if (count === 30) {
      alert("game is full");
      testinput.value = '';
      return count;
  }
  // clear form and store string to temp
  let temp = testinput.value;
  testinput.value = '';
  players.push(temp);

  // add player --------------------------------
  var bodydiv = document.createElement("div");
  bodydiv.classList = `bodydiv style${count}`;

  var temp1 = document.createElement("div");
  temp1.classList = 'bodydiv1';
  temp1.setAttribute('id', `bodydiv${count}`)

  temp1.addEventListener('click', () => {
    // get parent container
    let tempElement = document.querySelector(`.${temp1.parentNode.classList[1]}`);
    // get number
    let num = 0;
    if (temp1.parentNode.classList[1].length == 7) {
      num = temp1.parentNode.classList[1].substring(temp1.parentNode.classList[1].length-2);
    } else {
      num = temp1.parentNode.classList[1].substring(temp1.parentNode.classList[1].length-1);
    }
    // remove option and put back into emoji Arr
    emojis.push(options[num]);
    // fix options arr
    let tempOptions = [];
    for (let i=0; i<options.length; i++) {
      if (i != num) {
        tempOptions.push(options[i]);
      }
    }
    if (tempOptions.length == 1) {
      spinBtn.classList.add("disabled");
      console.log(bodydiv.children[0]);
    }
    if (tempOptions.length == 0) {
      tempOptions = ['', '', '', '', '', '', '', '', '', ''];
    }
    if (!gameActive && options.length < 11) {
      tempOptions.push('');
      spinBtn.classList.add("disabled");
      logo.classList.add("logo-disabled");
      logo.classList.remove("rainbow");
    }
    options = tempOptions;
    // remove element
    tempElement.parentNode.removeChild(tempElement);

    // cascade childnodes and find value of i that was removed to fix players array
    for (let i=0; i<=body.children.length; i++) {
      if (i == body.children.length) {
        players.pop();
        break;
      }
      if (body.children[i].classList.value != `bodydiv style${i}`) {
        players.splice(i, 1);
        break;
      }
    }

    //cascade childnodes and update classes
    for (let i=0; i<body.children.length; i++) {
      //update class
      body.children[i].classList = `bodydiv style${i}`;
    }
    count--;
    // redrawwheel
    arc = Math.PI / (options.length / 2);
    drawRouletteWheel();
    updatestyles();
  });

  var temp1_1 = document.createElement("h2");
  temp1_1.innerHTML = 'X';
  temp1.appendChild(temp1_1);
  bodydiv.appendChild(temp1);

  var temp2 = document.createElement("div");
  temp2.classList = 'bodydiv2';
  var temp2_1 = document.createElement("h2");
  temp2_1.innerHTML = `$${temp}`;
  temp2.appendChild(temp2_1);
  bodydiv.appendChild(temp2);

  var temp3 = document.createElement("div");
  temp3.classList = 'bodydiv3';
  var temp3_1 = document.createElement("h2");
  temp3_1.innerHTML = `${emojis[emojis.length-1]}`;
  temp3.appendChild(temp3_1);
  bodydiv.appendChild(temp3);
  body.appendChild(bodydiv);

  if (count < 10) {
    options[count] = emojis.pop();
  } else {
    options.push(emojis.pop());
  }
  if (count == 9) {
    spinBtn.classList.remove("disabled");
    logo.classList.add("rainbow");
    logo.classList.remove("logo-disabled");
  }
  count++;
  arc = Math.PI / (options.length / 2);
  drawRouletteWheel();
  updatestyles();
}

let testbtn2 = document.querySelector('#testbtn2');
testbtn2.addEventListener('click', test2);

function test2() {
  logo.classList.remove("rainbow");
  logo.classList.add("logo-disabled");
  spinBtn.classList.add("disabled");
  for (i=0; i<count; i++) {
    emojis.push(options[i]);
  }
  count = 0;
  options = ['', '', '', '', '', '', '', '', '', ''];
  players = [];
  body.innerHTML = '';
  arc = Math.PI / (options.length / 2);
  drawRouletteWheel();
}

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;
var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx = canvas.getContext("2d");

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  return RGB2Color(red,green,blue);
}

let degrees = startAngle * 180 / Math.PI + 90;
let arcd = arc * 180 / Math.PI;
let index = Math.floor((360 - degrees % 360) / arcd);
let prevIndex = index;

function adjust() {
  degrees = startAngle * 180 / Math.PI + 90;
  arcd = arc * 180 / Math.PI;
  index = Math.floor((360 - degrees % 360) / arcd);
  return true;
}

adjust();
function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");

  adjust();
  if (index != prevIndex && spinning) {
    prevIndex = index;
    hello();
  }

  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;
    ctx.clearRect(0,0,500,520);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.font = '25px Lato, Arial';

    for(var i = 0; i < options.length; i++) {
      angle = startAngle + i * arc;
      ctx.fillStyle = getColor(i, options.length);
      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc);
      ctx.stroke();
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      ctx.save();
      ctx.strokeStyle = '#0000';
      ctx.lineWidth = 1;
      ctx.fillStyle = "white";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.strokeText(text, -ctx.measureText(text).width / 2, 0);
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    //Arrow
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function spin() {
  spinBtn.classList.add("disabled");
  if (spinning) {
    return false;
  }
  spinning = true;
  spinAngleStart = 21.6433 - (randomNumber(0, 14428)/10000);
  spinTime = 0;
  spinTimeTotal = 1800;
  rotateWheel();
}

function rotateWheel() {
  spinTime += .8;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal)/1;
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 1);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  adjust();
  ctx.save();
  ctx.font = 'bold 30px Lato, Arial';
  var text = players[index];
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 500);
  ctx.restore();
  spinning = false;
  spinBtn.classList.remove("disabled");
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();

pageLoaded = true;

const masterContainer = document.querySelector('.master-container');
const loaderContainer = document.querySelector('.loader-container');
var video = document.getElementById("video");
masterContainer.parentNode.removeChild(masterContainer);
let flag = false;
setInterval( () => {
  if (video.readyState === 4 && !flag) {
      masterContainer.classList.remove("remove");
      loaderContainer.parentNode.removeChild(loaderContainer);
      document.body.appendChild(masterContainer);
      flag = true;
  }
}, 1000);
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let freq = 1;

let xSquares = 10;
let ySquares = 10;

let xGap
let yGap
const calcGaps = () => {
    xGap = canvas.clientWidth / xSquares;
    yGap = canvas.clientHeight / ySquares;
};
calcGaps();

let xOffset = 0;
let yOffset = 0;

// dragable mouse scroll
let mdFlag = false
let active = false;
canvas.addEventListener("mousedown", () => {
    mdFlag = true;
});

document.addEventListener("mouseup", () => {
    mdFlag = false;
    active = false;
});

let originalX;
let originalY;
let oldXOffset;
let oldYOffset;
document.addEventListener("mousemove", (e) => {
    if (mdFlag) {
        if (!active) {
            originalX = e.screenX;
            originalY = e.screenY;
            oldXOffset = xOffset;
            oldYOffset = yOffset;
            active = true;
        } else {
            xOffset = oldXOffset + (originalX-e.screenX)/10;
            yOffset = oldYOffset + (originalY-e.screenY)/10;
            repaint();
        }
    }
});

const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();       
    ctx.moveTo(x1 * xGap, canvas.clientHeight - (y1 * yGap));    
    ctx.lineTo(x2 * xGap, canvas.clientHeight - (y2 * yGap));  
    ctx.stroke();
}

const paintGrid = () => {
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 0.5;
    // verticle lines
    if (Math.floor(xOffset) > 0) {
        for (let i=-1-Math.floor(xOffset); i<=xSquares+1+Math.floor(xOffset); i++) {
            if (yOffset > 0) {
                drawLine(
                    i + xOffset, -1 - yOffset,
                    i + xOffset, ySquares + 1
                );
            } else {
                drawLine(
                    i + xOffset, -1 + yOffset,
                    i + xOffset, ySquares + 1
                );
            }
        }
    } else {
        for (let i=-1+Math.floor(xOffset); i<=xSquares+1-Math.floor(xOffset); i++) {
            if (yOffset > 0) {
                drawLine(
                    i + xOffset, -1 - yOffset,
                    i + xOffset, ySquares + 1
                );
            } else {
                drawLine(
                    i + xOffset, -1 + yOffset,
                    i + xOffset, ySquares + 1
                );
            }
        }
    }
    // horizontal lines
    if (Math.floor(yOffset) > 0) {
        for (let i=-1-Math.floor(yOffset); i<=ySquares+1+Math.floor(yOffset); i++) {
            if (xOffset > 0) {
                drawLine(
                    -1 - xOffset, i - yOffset,
                    xSquares + 1, i - yOffset
                );
            } else {
                drawLine(
                    -1 + xOffset, i - yOffset,
                    xSquares + 1, i - yOffset
                );
            }
        }
    } else {
        for (let i=-1+Math.floor(yOffset); i<=ySquares+1-Math.floor(yOffset); i++) {
            if (xOffset > 0) {
                drawLine(
                    -1 - xOffset, i - yOffset,
                    xSquares + 1, i - yOffset
                );
            } else {
                drawLine(
                    -1 + xOffset, i - yOffset,
                    xSquares + 1, i - yOffset
                );
            }
        }
    }
}
paintGrid();

const drawEquation = () => {
    ctx.strokeStyle = "#F00";
    ctx.lineWidth = 4;
    if (xOffset > 0) {
        for (let x=-1-Math.floor(xOffset); x<=xSquares+1+Math.floor(xOffset); x+=1/freq) {
            drawLine(
                x + xOffset, Math.sin(x * 2 * Math.PI/5)*10 - yOffset,
                (x+1/freq) + xOffset, Math.sin((x+1/freq) * 2 * Math.PI/5)*10 - yOffset
            );
        }  
    } else {
        for (let x=-1+Math.floor(xOffset); x<=xSquares+1-Math.floor(xOffset); x+=1/freq) {
            drawLine(
                x + xOffset, Math.sin(x * 2 * Math.PI/5)*10 - yOffset,
                (x+1/freq) + xOffset, Math.sin((x+1/freq) * 2 * Math.PI/5)*10 - yOffset
            );
        }  
    }
}
drawEquation();

const repaint = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    calcGaps();
    paintGrid();
    drawEquation();
}

// scale sliders
const xScaleSlider = document.getElementById("xScale");
const yScaleSlider = document.getElementById("yScale");

xScaleSlider.addEventListener("input", () => {
    xSquares = +xScaleSlider.value;
    repaint();
});

yScaleSlider.addEventListener("input", () => {
    ySquares = +yScaleSlider.value;
    repaint();
});

// frequency slider
const frequencySlider = document.getElementById("frequencyScale");

frequencySlider.addEventListener("input", () => {
    freq = +frequencySlider.value;
    repaint();
});
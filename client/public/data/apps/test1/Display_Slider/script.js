let photoContainer = document.querySelector(".photo-container");
let photoContainerWidth = photoContainer.clientWidth;

let style = document.createElement("style");
style.classList.add("photo-container-style");
document.body.appendChild(style);

let prevX, currentX, mousedown = false;

photoContainer.addEventListener("mousedown", (e) => {
    prevX = e.clientX;
    currentX = prevX;
    mousedown = true;
    currentSpeed = 0;
    if (sliding) clearTimeout(slideTimeOut);
    sliding = false;
});

document.addEventListener("mouseup", (e) => {
    mousedown = false;
    slide(currentSpeed);
});

let photoContainerX = 0;

let sliding = false;
let slideTimeOut;
const slide = (x) => {
    if (currentSpeed == 0) return;
    if (!sliding) {
        sliding = true;
        slideDecay(x/5);
        slideTimeOut = setTimeout(() => {
            sliding = false;
        }, 5000);
    }
}

const slideDecay = async (x) => {
    await delay(x ,slideDecay);  
}

const delay = (x, f) => {
    currentSpeed = x;
    setTimeout(() => {
        adjustPhotoContainer(photoContainerX += currentSpeed);
        if (sliding) f(x/1.01);
    }, 1);
}

let currentSpeed;
let mouseSpeedProcessing = false;
const getSpeed = () => {
    if (mousedown) {
        if (!mouseSpeedProcessing) {
            mouseSpeedProcessing = true;
            let test = currentX;
            setTimeout(() => {
                currentSpeed = currentX - test;
                mouseSpeedProcessing = false;
                if (mousedown) getSpeed();
            }, 50);
        }
    }
};

document.addEventListener("mousemove", (e) => {
    if (mousedown) {
        currentX = e.clientX;
        photoContainerX += currentX - prevX;
        adjustPhotoContainer(photoContainerX);
        prevX = currentX;
        getSpeed();
    }
});

const photoContainerStyle = document.querySelector(".photo-container-style");
const adjustPhotoContainer = (x) => {
    if (x > 0) {
        photoContainerX = 0;
        x = photoContainerX;
        sliding = false;
    }
    
    if (x < -(photoContainerWidth - (document.body.clientWidth * .9))) {
        photoContainerX = -(photoContainerWidth - (document.body.clientWidth * .9));
        x = photoContainerX;
        sliding = false;
    }

    photoContainerStyle.innerHTML = 
        `.photo-container {
            transform: translateX(${x}px);
        }`;
}

window.addEventListener("resize", () => {
    adjustPhotoContainer(photoContainerX);
});
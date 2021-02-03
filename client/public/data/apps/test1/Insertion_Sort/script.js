const sortDisplay = document.getElementById('sortDisplay');
let resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', reset);

const DELAY_BETWEEN_SWAPS = 25;

const delay = (ms) => new Promise(res => setTimeout(res, ms));

let cancelLast = () => {};

let count = 0;
let amount = 50;

// create div that has custom attribute value, unique style tag, default bar style and append.
function generateBar() {
  // generate div
  let bar = document.createElement('div');
  // keep track of the total amount of bars
  count++;
  // assign random number 0-100 and setAttribute to the div
  let temp = Math.floor(Math.random() * 101);
  // create custom attribute that holds its value
  bar.setAttribute('value', temp);
  // create unique style tag with height as a percentage based on Attribute
  let barHeight = document.createElement('style');
  barHeight.innerHTML = `.barHeight${count} {height: ${temp}%;}`;
  // add that unique style to the DOM
  sortDisplay.appendChild(barHeight);
  // now add that unique style to the div
  bar.classList.add(`barHeight${count}`);
  // use standard style from css as well
  bar.classList.add('sortBar');
  // now add that div to the DOM
  sortDisplay.appendChild(bar);
}

// clear container div and regenerate
function reset() {
  cancelLast();
  // clear all data within the container
  sortDisplay.innerHTML = '';
  // reset the count
  count = 0;
  // generate k bars
  for (let i = 0; i < amount; i++) {
    generateBar();
  }
}

// when page is loaded reset
reset(amount);

// swap elements within the DOM
function swapElements(obj1, obj2) {
  // create marker element and insert it above where obj1 is
  var temp = document.createElement("div");
  obj1.parentNode.insertBefore(temp, obj1);
  // move obj1 to right before obj2
  obj2.parentNode.insertBefore(obj1, obj2);
  // move obj2 to right before where obj1 used to be
  temp.parentNode.insertBefore(obj2, temp);
  // remove temporary marker node
  temp.parentNode.removeChild(temp);
}

// sort the divs within the DOM
async function sort(cancellationChecker) {
  for (let i = 1; i < amount; i++) {
    let j = i;
    for (j; j > 0; j--) {
      if (cancellationChecker()) return;
      if (+document.querySelectorAll('.sortBar')[j].getAttribute('value') < +document.querySelectorAll('.sortBar')[j-1].getAttribute('value')) {
        swapElements(document.querySelectorAll('.sortBar')[j], document.querySelectorAll('.sortBar')[j-1]);
        await delay(DELAY_BETWEEN_SWAPS);
      }
      else {
        break;
      }
    }
  }
}

function btnSort() {
  let cancelled = false;
  cancelLast();
  cancelLast = () => cancelled = true;
  sort(() => cancelled);
}

// Button to run the sort function
button = document.querySelector('.button');
button.addEventListener('click', btnSort);

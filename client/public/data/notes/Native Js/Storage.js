// replace `${i}` --> \`\${i}\`

const data = [
    
    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// Local storage is an Object for the Document's origin

// Retrieve entire local storage Object for the current page
myStorage = window.localStorage;

// Add item to local storage
localStorage.setItem('myCat', 'Tom');

// Retrieve value for given key
const cat = localStorage.getItem('myCat');

// Remove an item from the local storage Object
localStorage.removeItem('myCat');

// Clear local storage
localStorage.clear();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// A page session lasts as long as the browser is open, and survives over page reloads and restores.

// Retrieve entire session storage Object for the current page
myStorage = window.sessionStorage;

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// cookie functions
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

];

module.exports = data;
// replace `${i}` --> \`\${i}\`

const data = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [
{'output': `latitude:  [-90, 90]
longitude: [-180, 180]`}
        ],
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
        [],
        // output
        [
{'comment': `navigator.geolocation.getCurrentPosition(successCallback, errorCallback, optionsCallback)`}
        ],
        //render
        {'render': false}
    ],

        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Get Location</button>

<p id="locationText"></p>`}
            ],
            //css
            [],
            //js
            [
{'js': `// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, optionsCallback);

let locationText = document.getElementById("locationText");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    // could also utilize the errorCallback to eliminate the conditional statement
    locationText.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const showPosition = (position) => {
  locationText.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}`}
            ],
            // output
            [],
            //render
            {'render': true}
        ],
    
    // card ----------------------------------------------------- >
    [
        //html
        [
{'html': `<div id="mapContainer"></div>`}
        ],
        //css
        [
{'css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

#mapContainer {
  height: 100vh;
  width: 100vw;
}

iframe {
  height: 100%;
  width: 100%;
  border: none;
}`}
        ],
        //js
        [
{'js': `let mapContainer = document.getElementById("mapContainer");
let mapframe = document.createElement("iframe");

let x = 42.2576128;
let y = -71.01480959999999;

mapframe.setAttribute("src", \`https://www.google.com/maps?q=\${x},\${y}&output=embed\`);
mapContainer.appendChild(mapframe);
`}
        ],
        // output
        [],
        //render
        {'render': true}
    ],

];

module.exports = data;
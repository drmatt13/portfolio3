let ctx = document.getElementById('canvas').getContext('2d');

function init() {
    let chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

// Check Notes/Math/Linspace for documentation
const linspace = (start, end, length) => {
    let gap = (end-start)/(length-1);
    let arr = [];
    for (let i=0; i<length; i++) {
        arr.push(+(start+gap*i).toFixed(2));
    }
    return arr;
}

// sin(x) over 2 periods using 50 x-points
let x = linspace(0, 4*Math.PI, 50-1);
let y1 = [];
for (let i of x) {
    y1.push(Math.sin(i).toFixed(2));
}

let y2 = [];
for (let i of x) {
    y2.push((Math.sin(i-Math.PI/2)/2).toFixed(2));
}

let y3 = [];
for (let i of x) {
    y3.push((Math.tan(i/4)/8).toFixed(2));
}

const data = {

    // xAxes
    labels: x,

    datasets:[

        {
            label: 'sin(x)',
            data: y1,
            fill: false,
            backgroundColor:'rgba(255, 0, 0, 1)',
            borderColor: 'rgba(255, 0, 0, 0.6)',
            borderWidth: 2,
            pointStyle: 'rectRot',
        },

        {
            label: 'sin(x-PI/2)/2',
            data: y2,
            fill: false,
            backgroundColor: 'rgba(85, 200, 235, 0.9)',
            borderColor: 'rgba(85, 200, 235, 0.8)',
            borderWidth: 2,
            pointStyle: 'rectRot',
        },

        {
            label: 'tan(x/4)/8',
            data: y3,
            fill: false,
            backgroundColor: 'rgba(180, 255, 180, 0.9)',
            borderColor: 'rgba(180, 255, 180, 0.8)',
            borderWidth: 2,
            pointStyle: 'point',
        }

    ]
};

const options = {

    responsive: true,
    maintainAspectRatio: false,

    title: {
        display: false,
    },

    legend: {
        // removes legend toggle by click funtionality
        onClick: (e) => e.stopPropagation(),
        display: true,
        position:'right',
        labels: {
            fontSize: 25,
            fontColor: 'rgba(255, 255, 255, 0.8)',
        }
    },

    scales: {

        yAxes: [{
            display: true,
            color: "rgba(255,99,132,0.0)",
            ticks: {
                fontColor: 'rgba(255, 255, 255, 0.8)',
                max: 1,
                min: -1
            },
            gridLines: {
                color: "rgba(255,99,132,0.3)",
                zeroLineColor: 'rgba(255,99,132,0.3)',
            }
        }],

        xAxes: [{
            display: false,
            gridLines: {
                // color: "rgba(255,99,132,0.2)"
            }
        }]

    }

};

init();
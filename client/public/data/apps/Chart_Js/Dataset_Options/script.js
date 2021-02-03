let ctx = document.getElementById('canvas').getContext('2d');

function init() {
    let chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

const data = {

    labels:[
        'label1',
        'label2',
        'label3',
        'label4',
        'label5'
    ],

    datasets:[

        {
            label: 'dataset 1',
            data:[10, 20, 0, 30, 0],
            fill: true,
            // also effects the legend color
            backgroundColor: 'lightpink',
            borderColor: 'black',
            // point styles
            // 'circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle'
            // pointStyle: 'circle',
            // pointRadius: 6,
            // pointHoverRadius: 6,
            borderWidth: 2,
            hoverBorderWidth: 2,
            hoverBorderColor: 'black',
            // smoothness of the bézier curve, default 0.4
            tension: .4,
        },

        {
            label: 'dataset 2',
            data:[20, 30, 10, 40, 10],
            fill: true,
            backgroundColor: 'cyan',
            borderColor: 'black',
            borderWidth: 2,
            hoverBorderWidth: 2,
            hoverBorderColor: 'black'
        },

        {
            label: 'dataset 3',
            data:[90, 50, 30, 40, 30],
            fill: true,
            // length of stroke, length of gap
            borderDash: [10,5],
            backgroundColor: '#9370db70',
            borderColor: 'black',
            borderWidth: 2,
            hoverBorderWidth: 2,
            hoverBorderColor: 'black'
        },

        {
            label: 'dataset 4',
            data:[40, 50, 40, 50, 40],
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 2,
            hoverBorderWidth: 2,
            pointBorderColor: 'grey',
            hoverBorderColor: 'black',
        }

    ]
};

const options = {

    responsive: true,
    maintainAspectRatio: false,

    title: {
        display: true,
        text: 'Chart Title',
        fontSize: 25,
        fontColor: '#9370db',
        padding: 20
    },

    legend: {
        // removes legend toggle by click funtionality
        onClick: (e) => e.stopPropagation(),
        display: true,
        position:'right',
        labels: {
            fontSize: 25,
            fontColor: '#708090',
        }
    },

    // override scale options
    scales: {
        xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    fontSize: 25,
                    fontColor: '#db7093',
                    labelString: 'x-label',
                    padding: 20
                }
            }],
        yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 60
                },
                scaleLabel: {
                    display: true,
                    fontSize: 25,
                    fontColor: 'lightsteelblue',
                    labelString: 'y-label',
                    padding: 20
                }
            }]
    }

};

init();
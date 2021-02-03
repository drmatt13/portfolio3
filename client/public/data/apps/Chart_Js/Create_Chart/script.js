let ctx = document.getElementById('canvas').getContext('2d');

function init() {
    // set type to string value of the following
    // bar, horizontalBar, pie, line, doughnut, radar, polarArea
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

    datasets:[{
        label: 'dataset name',
        data:[10, 20, 40, 10, 20]
    }]
};

const options = {

    responsive: true,
    maintainAspectRatio: false,

    title: {
        display: false,
        // text: 'Chart Title',
        // fontSize: 25
    },

    legend: {
        display: false,
        position: 'right',
        // labels: {
        //     fontColor: '#000'
        // }
    },

    // override scale options
    scales: {
        xAxes: [{
                display: true,
                // scaleLabel: {
                //     display: true,
                //     fontSize: 25,
                //     labelString: 'x-label'
                // }
            }],
        yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 50
                    // steps: 2,
                    // stepValue: 10,
                },
                // scaleLabel: {
                //     display: true,
                //     fontSize: 25,
                //     labelString: 'y-label'
                // }
            }]
    }

};

init();
let ctx = document.getElementById('canvas').getContext('2d');

function init() {
  let chart = new Chart(ctx, {
    type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: data,
    options: options
  });
}

const data = {

  labels:['Boston', 'Worchester', 'Springfield', 'Lowell', 'Cambridge', 'Brockton'],

  datasets:[{
    label: 'population',
    data:[
      679413,
      185195,
      154596,
      115665,
      111249,
      95426
    ],
    backgroundColor:'rgba(255, 99, 132, 0.6)',
    fill: false,
    borderWidth: 2,
    borderColor: 'rgba(255, 99, 132, 0.6)',
    hoverBorderWidth: 1,
    hoverBorderColor: '#000'
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display:true,
    text:'Largest Cities In Massashuetts',
    fontSize: 25
  },
  legend: {
    display: false,
    position:'right',
    labels: {
      fontColor: '#000'
    }
  },
  layout: {
    padding: 50
  }
};

init();

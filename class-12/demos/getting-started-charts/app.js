var ctx = document.getElementById('myChart').getContext('2d');

console.log('Chart : ', Chart);
var chart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }
    ]

  },
  // Configuration options go here
  options: {}
});
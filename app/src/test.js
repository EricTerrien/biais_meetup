import Chart from 'chart.js/auto'

(async function() {
    const data = {
        labels: [
          'Aventure',
 //         'Comédie',
          'Drame',
          'Science fiction',
          'Documentaire',
          'Autres'
        ],
        datasets: [{
          label: 'Poids du film',
          //data: [200, 145, 150, 40, 35, 10],
          data: [200, 150, 40, 35, 155],
        //   options: {
        //     responsive: true,
        //     plugins: {
        //       legend: {
        //         position: 'top',
        //       },
        //       title: {
        //         display: true,
        //         text: 'Chart.js Pie Chart'
        //       }
        //     }
        //   },
          backgroundColor: [
            'rgb(255, 153, 255)',
//            'rgb(153, 51, 255)',
            'rgb(102, 204, 153)',
            'rgb(102, 255, 255)',
            'rgb(255, 153, 102)',
            'rgb(153, 153, 153)'
          ],
          hoverOffset: 4
        }]
      };

  new Chart(
    document.getElementById('test'),
    {
      type: 'doughnut',
      data: data,
    }
  );
})();
import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'

(async function() {
  const data = [
    { year: "Avatar 1", count: 2.9 },
    { year: "Avengers: Endgame", count: 2.8 },
    { year: "Avatar 2", count: 2.3 },
    { year: "Titanic", count: 2.2 },
    { year: "Star Wars 7", count: 2.0 },
    { year: "Avengers: Infinity War", count: 2.0 },
    { year: "Spider-Man: No way home", count: 1.9 },
  ];
    //const data = await getAquisitionsByYear();

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options: {
        animation: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

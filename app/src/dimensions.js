import Chart from 'chart.js/auto'
import { getDimensions } from './api'

(async function() {
  const data = await getDimensions();

  new Chart(
    document.getElementById('dimensions'),
    {
      type: 'bubble',
      options: {
        aspectRatio: 1,
        scales: {
          x: {
            max: 500,
            ticks: {
              callback: value => `${value / 100} m`
            }
          },
          y: {
            max: 500,
            ticks: {
              callback: value => `${value / 50}`
            }
          }
        }
      },
      data: {
        labels: data.map(x => x.year),
        datasets: [
            {
              label: 'Point de référence',
              data: data
                .filter(row => row.width === row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            },
            {
              label: 'Mauvais choix',
              data: data
                .filter(row => row.width > row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            },
            {
              label: 'Bon choix',
              data: data
                .filter(row => row.width < row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            }
          ]
      }
    }
  );
})();
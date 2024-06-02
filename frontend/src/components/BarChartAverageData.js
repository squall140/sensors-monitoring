import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// use Bar Chart
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// setting the range of Y-axis
const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
      max: 150,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};


export default function ChartWithSelectByDay(props) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(function () {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    
    // fetch data from api endpoints
    fetch('http://127.0.0.1:8000/api/sensor/getSensorAverageData')
      .then(response => response.json())
      .then(data => {
        console.log("data:" + JSON.stringify(data));
        const chartData = {
          labels: data.labels,  
          datasets: [
            {
              label: 'Average Data',
              data: data.values,  
              fill: false,
              tension: 0.3,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
              ],
              
            }
          ]
        };
        // chart set data
        setChartData(chartData);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return <Bar data={chartData} options={options} ref={chartRef} />;
}
 

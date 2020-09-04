import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../../api/index'
import {Line , Bar} from 'react-chartjs-2';
import { Card} from '@material-ui/core'



import styles from './Chart.module.css'

function Chart( {data: { confirmed, recovered, deaths }, country}) {

    const [dailyData, setDailyData] = useState([])

    useEffect ( ()=> {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    },[])

    const lineChart = (
    dailyData[0] ? (
      <Card className={styles.card}>
        <Line
          type= 'line'
          data={{
            labels: dailyData.map(({ date }) => (new Date(date).toDateString())),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"
              
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: "#742774"
              
            },
            ],
            
          }}
          options={options}
          legend={legend}
         
          />
      </Card>
    ) : null
  );

    const barChart = (
    confirmed ? (
      <Card className={styles.card}>
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      </Card>
    ) : null) 
    return (
        <div className={styles.container}>
        {country ? barChart : lineChart}
            
        </div>
    )
}

const legend = {
  display: true,
  position: "top",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Covid 19 Global Data"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};


export default Chart
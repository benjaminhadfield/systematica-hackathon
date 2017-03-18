import React from 'react'
import styles from './styles.scss'
const LineChart = require('react-chartjs').Line

export const StockGraph = ({marketData, ...props}) => {
    const options = {
        scales: {
            yAxes: [{
                max: 200,
                min: 100,
                fixedStepSize: 20
            }],
            xAxes: [{
                display: false
            }]
        }
    }
    
    const formatMarketData = (marketData) => {
        return {
            labels : [],
            datasets: [{
		            backgroundColor: 'rgba(0,255,00,0.1)',
		            borderColor: '#00FF00',
		            borderWidth: 2,
		            data: marketData.map(item => item.bid)
		        }]
        }
    }

    return (
        <div className={styles.container}>
            <LineChart
                data={formatMarketData(marketData)}
                options={options}/>
        </div>
    )
}
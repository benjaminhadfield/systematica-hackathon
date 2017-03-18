import React from 'react'
import styles from './styles.scss'
const LineChart = require('react-chartjs').Line

export class StockGraph extends React.Component {
    render() {
        const {data} = this.props
        return (
            <div className={styles.container}>
                <LineChart
                    data={data}/>
            </div>
        )
    }
}
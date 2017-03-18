import React from 'react'
import styles from './styles.scss'
import {LineChart, Line, YAxis, XAxis, Tooltip} from 'recharts'

export const StockGraph = ({marketData, ...props}) => {
    const formatMarketData = (marketData) => marketData.map(item => ({name: item.time, bid: parseFloat(item.bid)}))
    
    console.log(formatMarketData(marketData))
    
    return (
            <LineChart width={500} height={400} data={formatMarketData(marketData)}>
                <Line type="monotone" dataKey="bid" stroke="#8884d8" isAnimationActive={false}/>
                <YAxis type="number" domain={['auto', 'auto']}/>
                <XAxis/>
                <Tooltip/>
            </LineChart>
    )
}
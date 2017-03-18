import React from 'react'
import styles from './styles.scss'
const moment = require('moment')

export const Ticker = ({marketData, ...props}) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>
                <span className={styles.symbol}>APPL</span> Bid Prices
            </h5>
            <ul className={styles.list}>
            {
                marketData.map((item, i) => {
                    const formattedDate = moment(item.time).format('HH:m ss:SSS')
                    const price = '$' + (item.bid || '')
                    return (
                        <li key={i}>
                            <span className={styles.time}>{formattedDate}</span>
                            <span className={styles.price}>{price}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
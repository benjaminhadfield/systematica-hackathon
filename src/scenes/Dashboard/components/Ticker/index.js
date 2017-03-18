import React from 'react'
import styles from './styles.scss'

export const Ticker = ({marketData, ...props}) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>
                <span className={styles.symbol}>APPL</span> Buy Prices
            </h5>
            <ul className={styles.list}>
            {
                marketData.map((item, i) => <li key={i} children={`${item.time}: $${item.bid}`}/>)
            }
            </ul>
        </div>
    )
}
import React from 'react'
import styles from './styles.scss'

export const Ticker = ({marketData, ...props}) => {
    return (
        <div className={styles.container}>
            <ul>
            {
                marketData.map((item, i) => <li key={i} children={item.bid}/>)
            }
            </ul>
        </div>
    )
}
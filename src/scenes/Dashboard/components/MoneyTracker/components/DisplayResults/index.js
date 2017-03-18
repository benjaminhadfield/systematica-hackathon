import React from 'react'
import styles from './styles.scss'

export const DisplayResults = ({balance, lastDeposit, ...props}) => {
    const item = (title, value) => (
        <li className={styles.item}>
            <span className={styles.dataTitle}>{title}</span>
            <span className={styles.dataValue}>{value}</span>
        </li>
    )
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {item('Balance', balance)}
                {item('Last Deposit', lastDeposit)}
                {item('% diff', 0.00)}
                {item('Abs diff', 0.00)}
            </ul>
        </div>
    )
}
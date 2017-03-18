import React from 'react'
import styles from './styles.scss'

import {AddMoney} from './components/AddMoney'
import {DisplayResults} from './components/DisplayResults'

const MoneyTracker = ({onAddMoney, lastDeposit, balance, ...props}) => {
    return (
        <div className={styles.container}>
            <AddMoney
                onSubmit={onAddMoney}/>
            <DisplayResults
                balance={balance}
                lastDeposit={lastDeposit}/>
        </div>
    )
}

export default MoneyTracker
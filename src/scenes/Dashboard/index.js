import React from 'react'
import styles from './styles.scss'
import MoneyTracker from './components/MoneyTracker'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: 0,
            lastDeposit: 0
        }
    }

    updateBalance = (amount) => this.setState((prev) => ({balance: prev.balance + amount, lastDeposit: amount}))

    render() {
        let {balance, lastDeposit} = this.state
        return (
            <div>
                <MoneyTracker
                    onAddMoney={this.updateBalance}
                    balance={balance}
                    lastDeposit={lastDeposit}/>
            </div>
        )
    }
}

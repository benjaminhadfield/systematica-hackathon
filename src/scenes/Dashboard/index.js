import React from 'react'
import styles from './styles.scss'
import io from 'socket.io-client'
import {MoneyTracker} from './components/MoneyTracker'
import {StockGraph} from './components/StockGraph'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            balance: 0,
            lastDeposit: 0,
            data: {
                labels: ['one', 'two', 'three'],
                datasets: [
                    {
                        label: 'APPL',
                        borderWidth: 1,
                        data: [1, 2, 3]
                    }
                ]
            }
        }
    }

    componentDidMount() {
        // connect to socket.io
        this.socket = io('/')
    }

    updateBalance = (amount) => this.setState((prev) => ({balance: prev.balance + amount, lastDeposit: amount}))

    render() {
        let {balance, lastDeposit, data} = this.state
        return (
            <div className={styles.container}>
                <MoneyTracker
                    onAddMoney={this.updateBalance}
                    balance={balance}
                    lastDeposit={lastDeposit}/>
                <StockGraph data={data}/>
            </div>
        )
    }
}

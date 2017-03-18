import React from 'react'
import styles from './styles.scss'
import io from 'socket.io-client'
import {MoneyTracker} from './components/MoneyTracker'
import {StockGraph} from './components/StockGraph'
import {Ticker} from './components/Ticker'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            balance: 0,
            lastDeposit: 0,
            marketData: [...Array(25)].map(i => 0),
            predictedData: []
        }
    }

    componentDidMount() {
        // connect to socket.io
        this.socket = io('/')
        this.socket.on('recievedUserMarketData', (data) => {
            if (data.bid) {
                this.setState((prev) => ({marketData: [...prev.marketData, data].slice(-25)}))
            }
        })
        this.socket.emit('predict', this.state.marketData)
        this.socket.on('pred-res', (data) => {
          this.setState({predictedData: data})
        })
    }

    updateBalance = (amount) => this.setState((prev) => ({balance: prev.balance + amount, lastDeposit: amount}))

    render() {
        let {balance, lastDeposit, marketData, predictedData} = this.state
        return (
            <div className={styles.container}>
                <MoneyTracker
                    onAddMoney={this.updateBalance}
                    balance={balance}
                    lastDeposit={lastDeposit}/>
                <StockGraph
                    marketData={marketData}/>
                <Ticker
                    marketData={[...marketData, ...predictedData]}/>
            </div>
        )
    }
}

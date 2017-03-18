import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

class App extends React.Component {
    componentDidMount() {
        // this.socket = io('/')

        // this.dataSocket = io('http://emsapi.eu-west-2.elasticbeanstalk.com')
        // this.dataSocket.emit('subscribe', ['AAPL', 'MSFT'])
        // this.dataSocket.on('onMarketData', (data) => console.log('data', data))
    }

    render() {
        return (
            <div>
                <p>Hey</p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('mount'))

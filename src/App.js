import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import Dashboard from './scenes/Dashboard'

class App extends React.Component {
    componentDidMount() {
        // connect to socket.io
        this.socket = io('/')
    }

    render() {
        return (
            <div>
                <Dashboard/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('mount'))

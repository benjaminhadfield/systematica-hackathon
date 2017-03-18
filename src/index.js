import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './scenes/Dashboard'
import './styles/global.scss'

class App extends React.Component {
    render() {
        return (
            <Dashboard/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('mount'))

import React from 'react'
import styles from './styles.scss'
import {Input} from 'Components/Form'

export class AddMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: ''
        }
    }

    handleChange = (e) => {
        let amount = e.target.value
        if (amount === '' || Number.isInteger(parseInt(amount))) {
            amount = amount ? parseInt(amount) : 0
            this.setState({amount})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.amount)
        this.setState({amount: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.container}>
                <Input
                    value={this.state.amount}
                    onChange={this.handleChange}
                    type="number"
                    name="addMoney"/>
            </form>
        )
    }
}

import React from 'react'
import styles from './styles.scss'
import {Input} from 'Components/Form'

export const AddMoney = (props) => {
    return (
        <div className={styles.container}>
            <Input name="addMoney"/>
        </div>
    )
}

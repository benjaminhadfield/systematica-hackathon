import React from 'react'
import styles from './styles.scss'
import {capitaliseFirst} from 'Services/string'

export const Input = ({name, ...props}) => {
    return (
        <div className={styles.container}>
            <label
                htmlFor={`input-${name}`}
                className={styles.label}
                children={capitaliseFirst(name)}/>
            <input
                id={`input-${name}`}
                className={styles.input}
                placeholder="Type here..."
                name={name}
                type="text"
                {...props}/>
        </div>
    )
}
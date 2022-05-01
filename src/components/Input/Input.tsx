import React from 'react'
import styles from './input.module.scss'

interface IInput {
    type:string,
    label:string,
    name:string,
    value?:string
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input:React.FC<IInput>=({type,label,name,onChange,value}):JSX.Element=>{
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
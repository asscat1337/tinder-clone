import React from "react";
import {Input} from "../../Input/Input";
import styles from "./Login.module.scss";
import {UseInput} from "../../../hooks/useInput";


export const FormLogin:React.FC=():JSX.Element=>{

    const {value,handleChange} = UseInput({login:"",password:""})

    const onclickLogin=(event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        console.log(value)
    }

    return (
        <form action="" className={styles.main}>
            <Input
                type="text"
                label="login"
                name="login"
                value={value.login}
                onChange={handleChange}
            />
            <Input
                type="password"
                label="password"
                name="password"
                value={value.password}
                onChange={handleChange}
            />
            <button onClick={onclickLogin}>
                Авторизация
            </button>
        </form>
    )
}
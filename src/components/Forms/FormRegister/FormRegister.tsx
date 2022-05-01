import React from 'react'
import {Input} from "../../Input/Input";
import styles from './Form.module.scss'
import {UseInput} from "../../../hooks/useInput";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store";
import {registerThunk} from "../../../store/actions/actionAuth";


export const FormRegister:React.FC=():JSX.Element=>{
    const dispatch = useDispatch<AppDispatch>()

    const {value,handleChange} = UseInput({login:"",password:""})

    const onRegisterUser=(event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        dispatch(registerThunk(value))
    }

    return (
        <form action="" className={styles.main}>
            <Input
                type="text"
                name="login"
                label="login"
                value={value.login}
                onChange={handleChange}
            />
            <Input
                type="password"
                name="password"
                label="password"
                value={value.password}
                onChange={handleChange}
            />
            <button onClick={onRegisterUser}>
                Регистрация
            </button>
        </form>
    )
}
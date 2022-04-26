import React from 'react'
import styles from './Modal.module.scss'


interface IModal {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    children?:React.ReactChild
}

export const Modal:React.FC<IModal>=({open,setOpen,children}):JSX.Element=>{
    const onClose=()=>{
        setOpen(false)
    }
    return (
        <div className={styles.modalMain} onClick={onClose}>
            <div className={styles.modalDialog} onClick={e=>e.stopPropagation()}>
                <div className={styles.header}>
                    <span>
                        &times;
                    </span>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <h1>Скачайте приложение</h1>
                </div>
            </div>
        </div>
    )
}
import React from 'react'



export function UseInput(initialState:any){
    const [value,setValue] = React.useState(initialState)

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue((prevState: any) => ({
            ...prevState,
            [event.target.name]:event.target.value
        }))
    }

    return {
        value,
        handleChange
    }
}
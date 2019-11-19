import React from 'react'

export const YearPicker = ({onChange, name}) => {
    const optionChange = e =>{
        e.preventDefault()
        
        const value = parseInt(e.target.value)
        const event = {...e, target: {...e.target, value, name: e.target.name}, preventDefault: ()=>{}}
        onChange(event)
    }
    return (
        <select name={name} onChange={optionChange}>
           {[...Array(100)].map((_, i)=>{
               const year = 2019-i
               return (<option value={year}>{year}</option>)
           })}
        </select>
    )
}

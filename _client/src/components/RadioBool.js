import React, {Fragment} from 'react'
import {Radio} from '@material-ui/core'

export const RadioBool = ({texts, onChange, name, value: isOpen}) => {

    const handleCheck = e => {
        e.preventDefault()
        const value = e.target.value==="true"
        const event = {...e, target: {...e.target, name, value }, preventDefault: ()=>{}}    
        console.log(event);
        
        onChange(event)
    }

    return (
        <Fragment>
            <label>
            {texts[0]}
            <Radio
                checked={true}
                onChange={handleCheck}
                value="true"
                checked={isOpen}
            />
            </label>
            <label>
            {texts[1]}
            <Radio
                onChange={handleCheck}
                value="false"
                checked={!isOpen}
            />
            </label>
        </Fragment>
    )
}

import React, {Fragment} from 'react'

export const RadioBool = ({texts, onChange, name, value: isOpen}) => {

    const handleCheck = e => {
        e.preventDefault()
        const value = e.target.value==="true"
        const event = {...e, target: {...e.target, name, value }, preventDefault: ()=>{}}
        onChange(event)
    }

    return (
        <Fragment>
            <label>
                {texts[0]}
                <input
                    type="radio"
                    checked={true}
                    onChange={handleCheck}
                    value="true"
                    checked={isOpen}
                />
            </label>
            <label>
                {texts[1]}
                <input
                    type="radio"
                    onChange={handleCheck}
                    value="false"
                    checked={!isOpen}
                />
            </label>
        </Fragment>
    )
}

import React from 'react'

const GridChild = ({gridArea, children}) => {
    return (
        <div style={{gridArea}}>
            {children}
        </div>
    )
}

export default GridChild

import React from 'react'

function VisibilityButton({handleClick, label}) {
    console.log(label)
    return(
        label.map(lab => {
            return (
            <button onClick={() => {
                handleClick(lab)
            }}>{lab}</button>
            )
        })
        
    )
}

export default VisibilityButton
import React from 'react'

function PokeList({cards}) {
    const cardItems = cards.map(card => {
        return<p>{card.name}</p>
    })
    
    return(
        <ul>
            {cardItems}
        </ul>
    )
}


export default PokeList
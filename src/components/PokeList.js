import React from 'react'

function PokeList({cards, handleClick}) {
    const cardItems = cards.map(card => {
        return<p key={card.id} onClick={ () => {
            // to pass handleClick a custom argument
            // we must wrap it in an anonymous function
            handleClick(card.id)
        }}>{card.name}</p>
    })
    
    return(
        <ul>
            {cardItems}
        </ul>
    )
}


export default PokeList
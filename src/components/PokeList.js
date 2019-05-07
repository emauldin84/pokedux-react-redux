import React from 'react'

function PokeList({cards, handleClick, visibility}) {
    console.log('from PokeList:', visibility)
    let cardItems = []
    
    if (visibility === 'all') {

        cardItems = cards.map(card => {
        return<p key={card.id} onClick={ () => {
            // to pass handleClick a custom argument
            // we must wrap it in an anonymous function
            handleClick(card.id)
        }}>{card.name}</p>
    })
    } else if (visibility === 'caught') {
        const filteredCards = cards.filter(card =>  {
            return  card.isCaught === true
        })
        cardItems = filteredCards.map(card => {
            return<p key={card.id} onClick={ () => {

                handleClick(card.id)
            }}>{card.name}</p>
        })
    } else if (visibility === 'uncaught') {
        
        const filteredCards = cards.filter(card =>  {
            
            return  !card.isCaught
        })
        console.log(filteredCards)
        cardItems = filteredCards.map(card => {
            return<p key={card.id} onClick={ () => {

                handleClick(card.id)
            }}>{card.name}</p>
        })
    }
    






    return(
        <ul>
            {cardItems}
        </ul>
    )
}


export default PokeList
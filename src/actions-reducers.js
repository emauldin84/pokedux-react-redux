// ================================================================
// State
import { combineReducers } from 'redux'
import initialCards from './base.json'
// console.log(initialState);

const VISIBILITY_ALL = 'all'
const VISIBILITY_CAUGHT = 'caught'
const VISIBILITY_UNCAUGHT = 'uncaught'

const initialState = {
    ...initialCards, // This spreads the 'cards':[...] into this spot in initialState
    // cards: initialCards.cards // This line is the equivalent of ...initialCards
    visibilityFilter: VISIBILITY_ALL,
}


// the state is an object with a cards property
// which is an array of objects
// { cards: [{}, {}, {}]}

// ================================================================
// Action and Action Creators
const ACTION_CATCH = 'catch';

export function catchCard (id) {
    return{
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}
window.catchCard = catchCard;

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT

export function setVisibilityAll() {
    return{
        type: ACTION_VISIBILITY_ALL
    }
}
export function setVisibilityCaught() {
    return{
        type: ACTION_VISIBILITY_CAUGHT
    }
}
export function setVisibilityUncaught() {
    return{
        type: ACTION_VISIBILITY_UNCAUGHT
    }
}
window.setVisibilityAll = setVisibilityAll
window.setVisibilityCaught = setVisibilityCaught
window.setVisibilityUncaught = setVisibilityUncaught

// ================================================================
// Reducer

// cards reducer manages array
function cards( state=initialState.cards, action={type: ''} ) {
    console.log(`cards got called with ${action.payload}`)
    switch(action.type) {
        case ACTION_CATCH:
            console.log(`cards got called with id: ${action.payload.id}`)
            // find the card, set it to 'caught'
            const newState = state.map(card => {
                    if(card.id === action.payload.id) {
                        // adds new 
                        return {
                            ...card,
                            isCaught: true,
                        }
                    } else {
                        return card;
                    }
                })
            // Whatever is returned by the reducer is automatically used
            // by the store as the new version of state.
            return newState;
        break;
        default:
            return state
        break;
    }
}

function visibility( state=initialState.visibilityFilter, action={type: ''} ) {
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL
        break;

        case ACTION_VISIBILITY_CAUGHT:
            return VISIBILITY_CAUGHT
        break;

        case ACTION_VISIBILITY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT
        break;

        default:
            return state
        break;
    }
}

// This is where you are assigning responsibility
// of once piece of state
// to one reducer.
export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
})

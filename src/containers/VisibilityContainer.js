// A 'smart' container has three jobs:
//  - grab stuff from Redux
//  - grab a dumb component
//  - smash them together

import { connect } from 'react-redux'
import VisibilityButton from '../components/VisibilityButton'

import { setVisibilityCaught, setVisibilityUncaught, setVisibilityAll } from '../actions-reducers'

const mapStateToProps = (state) => {
    // return our own custom props object
    console.log(state)
    return {
        label: ['all', 'caught', 'uncaught']
    }
}

const mapDispatchToProps = (dispatch) => {
    // return our own custom props
    return {

        handleClick: (label) => {
            if (label === 'all') {
                dispatch(setVisibilityAll())
            } else if (label === 'caught') {
                dispatch(setVisibilityCaught())
            } else if (label === 'uncaught') {
                dispatch(setVisibilityUncaught())
            }
        }
    }
}

const makeComponentSmart = connect(mapStateToProps, mapDispatchToProps)
const SmartVisibilityButton = makeComponentSmart(VisibilityButton)

export default SmartVisibilityButton
import {BUY_CAKE} from '../actionTypes/cakeTypes'

export const buyCake = (cakeNumber = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakeNumber
    }
}

import {KOLA_KHA} from "../actionTypes/kolaActionTyps";

const initialState = {
    numberOfKola: 30
}

const kolaReducer = (state = initialState, action) => {
    switch (action.type) {
        case KOLA_KHA:
            return {
                ...state,
                numberOfKola: state.numberOfKola - 1
            }

        default:
            return state
    }
}

export default kolaReducer;
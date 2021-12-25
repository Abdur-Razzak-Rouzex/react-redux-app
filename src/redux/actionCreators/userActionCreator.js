import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "../actionTypes/userActionType";
import axios from "axios";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err => {
                const errMsg = err.message;
                dispatch(fetchUsersFailure(errMsg));
            })
    }
}
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    user: null,
    error: null
};

const fetchUserInit = (state, action) => {
    return updateObject(state, { user: null, error: null });
};

const userProcessStart = (state, action) => {
    return updateObject(state, { error: null });
};

const userProcessSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        error: null
    });
};

const userProcessFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const updateSeguroSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        error: null
    });
};

const updateSeguroFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_INIT:
            return fetchUserInit(state, action);
        case actionTypes.FETCH_USER_START:
            return userProcessStart(state, action);
        case actionTypes.FETCH_USER_SUCCESS:
            return userProcessSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL:
            return userProcessFail(state, action);
        case actionTypes.UPDATE_SEGURO_SUCCESS:
            return updateSeguroSuccess(state, action);
        case actionTypes.UPDATE_SEGURO_FAIL:
            return updateSeguroFail(state, action);
        default:
            return state;
    }
};

export default reducer;
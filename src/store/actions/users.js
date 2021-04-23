import userService from '../../services/userService';
import * as actionTypes from './actionTypes';

export const fetchUserInit = () => {
    return {
        type: actionTypes.FETCH_USER_INIT
    };
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    };
};

export const fetchUserSuccess = user => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user: user
    };
};

export const fetchUserFail = error => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        error: error
    };
};

export const updateDatosSeguroSuccess = user => {
    return {
        type: actionTypes.UPDATE_SEGURO_SUCCESS,
        user: user
    };
};

export const updateDatosSeguroFail = error => {
    return {
        type: actionTypes.UPDATE_SEGURO_FAIL,
        error: error
    };
};

export const getRandomUser = () => {
    return async dispatch => {
        dispatch(fetchUserInit());
        dispatch(fetchUserStart());
        try {
            const user = await userService.getRandomUser();

            dispatch(fetchUserSuccess(user.data.results[0]));
        } catch (error) {
            dispatch(fetchUserFail(error));
        }
    };
};

export const updateDatosSeguro = user => {
    return async dispatch => {
        try {
            dispatch(updateDatosSeguroSuccess(user));
        } catch (error) {
            dispatch(updateDatosSeguroFail(error));
        }
    };
};
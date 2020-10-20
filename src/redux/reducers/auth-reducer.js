import { AUTH_ACTIONS } from '../types';

const initialState = {
    token: null,
};

export const authReducer = (state = initialState, action) => {

    if (action.type === AUTH_ACTIONS.SET_TOKEN) {
        return { ...state, token: action.payload };
    }

    return state;
};
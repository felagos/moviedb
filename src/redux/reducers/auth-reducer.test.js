import { AUTH_ACTIONS } from '../types';
import { authReducer } from './auth-reducer';

const initialState = {
    token: null,
};

describe('authReducer test', () => {

    test('initial state', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('set token action', () => {
        const action = { type: AUTH_ACTIONS.SET_TOKEN, payload: { token: "token" } };

        const state = authReducer(initialState, action);

        expect(state).toEqual({ token: action.payload });
    });

});

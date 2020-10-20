import { getTokenSession } from "../../api";
import { AUTH_ACTIONS } from '../types';

export const setToken = (token) => {
    return async dispatch => {
        const response = await getTokenSession(token);

        localStorage.setItem("token", response.session_id);

        dispatch({
            type: AUTH_ACTIONS.SET_TOKEN,
            payload: response.session_id
        });
    };
}
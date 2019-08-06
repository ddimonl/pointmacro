import ACTION from '../actions/actiontsTypes';

const initialState = {
    isValidEmail: true,
    jwt: null,
    error: null,
    isFetching: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.LOGIN_USER_RESPONSE: {
            return {
                ...state,
                jwt: action.data.jwt,
                isFetching: false,
                error: action.data.error,
                user: action.data.user
            };
        }
        case ACTION.LOGIN_USER_ERROR: {
            return {
                ...state,
                jwt: null,
                isFetching: false,
                error: action.error,
                user: null
            };
        }
        default: {
            return state;
        }
    }
}
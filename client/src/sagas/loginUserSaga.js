import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
    loginUser,
} from '../api/rest/restContoller';

export function* loginUserSaga(action) {
    yield put({ type: ACTION.LOGIN_USER_REQUEST });
    try {
        const { data } = yield loginUser(action.loginData);
        yield put({ type: ACTION.LOGIN_USER_RESPONSE, data: data });
        if(data.user) {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", data.user);
            action.redirect("/");
        }
    } catch (e) {
        yield put({ type: ACTION.LOGIN_USER_ERROR, error: e });
    }
}
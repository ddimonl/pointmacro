import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { signupUser } from '../api/rest/restContoller';


//COMBINE SIGNUP AND LOGIN SAGAS
export function* signupUserSaga(action) {
    yield put({ type: ACTION.LOGIN_USER_REQUEST });
    try {
        const { data } = yield signupUser(action.signupData);
        yield put({ type: ACTION.LOGIN_USER_RESPONSE, data: data });
        console.log(data.user);
        if(data.user) {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", data.user);
            action.redirect("/");
        }
    } catch (e) {
        yield put({ type: ACTION.LOGIN_USER_ERROR, error: e });
    }
}
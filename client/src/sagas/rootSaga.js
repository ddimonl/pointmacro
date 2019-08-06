import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  getGoodsSaga, getOneGoodsSaga
} from './goodsSaga';

import { loginUserSaga } from './loginUserSaga'
import { signupUserSaga } from './signupUserSaga'

function* rootSaga() {
/*  yield takeLatest(ACTION.GOODS_ACTION, getGoodsSaga);
  yield takeLatest(ACTION.SINGLE_GOODS_ACTION, getOneGoodsSaga);*/
  yield takeLatest(ACTION.LOGIN_USER_ACTION, loginUserSaga);
  yield takeLatest(ACTION.SIGNUP_USER_ACTION, signupUserSaga);
}

export default rootSaga;

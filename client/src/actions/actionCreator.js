import ACTION from './actiontsTypes';

//COMBINE LOGIN AND SIGNUP ACTION
export const loginUserAction = (loginData, redirect) => ({
  type: ACTION.LOGIN_USER_ACTION,
  loginData,
  redirect
});

export const signupUserAction = (signupData, redirect) => ({
  type: ACTION.SIGNUP_USER_ACTION,
  signupData,
  redirect
});
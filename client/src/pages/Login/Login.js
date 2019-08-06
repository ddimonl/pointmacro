import  React, { Component } from 'react';
import './Login.module.sass';
import connect from 'react-redux/es/connect/connect';
import validator from 'validator';
import Input from '../../components/Input/Input';
import styles from './Login.module.sass'
import { Link } from "react-router-dom";
import { loginUserAction } from "../../actions/actionCreator";


class Login extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmailValid: true,
            isPasswordValid: true
        };
    }

    /*validateValues = (values) =>
        schema.validate(values, { abortEarly: false }).catch(error => {
            throw error.inner.reduce((errorMessages, error) => {
                if (!errorMessages[error.path]) {
                    errorMessages[error.path] = error.message;
                }
                return errorMessages;
        }, {});
    });*/

    onInputChanged = (e, name) => {
        this.setState({[name]: e.currentTarget.value});
    };

    logIn = () => {
        const { email, password } = this.state;
        if(!validator.isEmail(email)) {
            this.setState({isEmailValid: false});
            return;
        }
        if(validator.isEmpty(password)) {
            this.setState({isPasswordValid: false});
            return;
        }
        this.setState({isEmailValid: true, isPasswordValid: true});
        this.props.loginUserAction({email, password}, this.props.history.push);
    };

    renderInputError = (param, text) => {
        return !param && <p className={styles.inputError}>{text}</p>;
    };

    renderFormError = () => {
        const error = this.props.error;
        return error && <div className={styles.loginFailed}>Invalid Email or Password</div>
    };

    render() {
        const { isEmailValid, isPasswordValid } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.loginHeader}>
                        <div className={styles.logo}>
                            <img src="./logo.png" alt="logo"/>
                        </div>
                        <div className={styles.loginBtn}>
                            <Link  className={styles.loginLink} to='/signup'>Signup</Link>
                        </div>
                    </div>
                    <div className={styles.loginFormContainer}>
                        <div className={styles.loginHeader}>
                            <h2>Login to your account</h2>
                        </div>
                        {this.renderFormError()}
                        <div className={styles.fieldContainer}>
                            <Input type="text"
                                   isValid={isEmailValid}
                                   name={"email"}
                                   placeholder="Email address"
                                   handler={this.onInputChanged}
                            />
                            {this.renderInputError(isEmailValid, "Email is not valid format")}
                            <Input type="password"
                                   isValid={isPasswordValid}
                                   name={"password"}
                                   placeholder="Password"
                                   handler={this.onInputChanged}
                            />
                            {this.renderInputError(isPasswordValid,"Password cannot be empty")}
                            <div>
                                <label><input type="checkbox"/>Remember Me</label>
                                <span>Forgot password</span>
                            </div>
                        </div>
                        <button onClick={this.logIn}>Login</button>
                        <div className={styles.socialMedia}>
                            <span>Sign in with Google</span>
                            <span>Sign in with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        state,
        error: state.loginUserReducers.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUserAction: (loginData, redirect) => dispatch(loginUserAction(loginData, redirect)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import  React, { Component } from 'react';
import './Signup.module.sass';
import connect from 'react-redux/es/connect/connect';
import Input from '../../components/Input/Input';
import styles from './Signup.module.sass';
import { Link } from "react-router-dom";
import { signupUserAction } from "../../actions/actionCreator";

class Signup extends  Component {
    constructor(props)  {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            displayName: '',
            email: '',
            pwd: '',
            pwdConfirm: '',
            role: '',
            isFNValid: true,
            isLNValid: true,
            isDNValid: true,
            isEmailValid: true,
            isPwdValid: true,
            isPwdConfirmValid: true
        }
    }

    onInputChanged = (e, name) => {
        console.log(name);
        console.log(e.currentTarget.value);
        this.setState({[name]: e.currentTarget.value});
    };

    onRoleChanged = (e) => {
        this.setState({role: e.currentTarget.value})
    };

    signUp = () => {
        const { email, displayName, firstName, lastName, password, role } = this.state;
        const data = { email, displayName, firstName, lastName, password, role };
        this.props.signupUserAction(data, this.props.history.push);
    };



    render() {
        const { isFNValid, isLNValid, isDNValid, isEmailValid, isPwdValid, isPwdConfirmValid } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.loginHeader}>
                        <div className={styles.logo}>
                            <img src="./logo.png" alt="logo"/>
                        </div>
                        <div className={styles.loginBtn}>
                            <Link  className={styles.loginLink} to='/login'>Login</Link>
                        </div>
                    </div>
                    <div className={styles.loginFormContainer}>
                        <div className={styles.formHeader}>
                            <h2>Create an account</h2>
                            <h4>We always keep your name and email address private.</h4>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldRow}>
                                <Input type="text"
                                       placeholder="First Name"
                                       isValid={isFNValid}
                                       name="firstName"
                                       handler={this.onInputChanged}
                                />
                                <Input type="text"
                                       placeholder="Last Name"
                                       isValid={isLNValid}
                                       name="lastName"
                                       handler={this.onInputChanged}
                                />
                            </div>
                            <div className={styles.fieldRow}>
                                <Input type="text"
                                       placeholder="Display Name"
                                       isValid={isDNValid}
                                       name="displayName"
                                       handler={this.onInputChanged}
                                />
                                <Input type="text"
                                       placeholder="Email Address"
                                       isValid={isEmailValid}
                                       name="email"
                                       handler={this.onInputChanged}
                                />
                            </div>
                            <div className={styles.fieldRow}>
                                <Input type="text"
                                       placeholder="Password"
                                       isValid={isPwdValid}
                                       name="password"
                                       handler={this.onInputChanged}
                                />
                                <Input type="text"
                                       placeholder="Confirm Password"
                                       isValid={isPwdConfirmValid}
                                       name="pwdConfirm"
                                       handler={this.onInputChanged}
                                />
                            </div>

                            <div className={styles.roleContainer}>
                                {/*MAKE IT RENDER FN*/}
                                <div>
                                    <label>
                                        <span><input type="radio" value="CUSTOMER" name="role" onChange={this.onRoleChanged}/>Join As a Buyer</span>
                                        <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span><input type="radio" value="CREATIVE" name="role" onChange={this.onRoleChanged}/>Join As a Creative</span>
                                        <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.offers}>
                            <label><input type="checkbox"/> Allow Squadhelp to send marketing/promotional offers from time to time</label>
                        </div>
                        <button onClick={this.signUp}>Create account</button>
                        <span className={styles.terms}>By clicking this button, you agree to our <a href="google.com" target="_blank">Terms of Service</a>.</span>
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
        state, //<=NOT NECESSARY MAP ALL STATE
    }
};

const mapDispatchToProps = (dispatch) => ({
    signupUserAction: (loginData, redirect) => dispatch(signupUserAction(loginData, redirect)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

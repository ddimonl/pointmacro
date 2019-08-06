import  React, { Component } from 'react';
import './ContestForm.module.sass';
import connect from 'react-redux/es/connect/connect';
import styles from './ContestForm.module.sass'
import { loginUserAction } from "../../actions/actionCreator";

class ContestForm extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmailValid: true,
            isPasswordValid: true
        };
    }
    render() {
        return (
            <div className={styles.container}>
                Test page
                <input type="text"/><input type="text"/><input type="text"/>
                <div onClick={() => {this.props.history.goBack()}}>Back</div>
                <div>Next</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestForm);
